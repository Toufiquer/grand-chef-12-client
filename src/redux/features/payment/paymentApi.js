// import { apiSlice } from "../api/apiSlice";

import { apiSlice } from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getPayments: builder.query({
      query: () => `/payments`,
    }),
    getPayment: builder.query({
      query: (id) => `/payments/${id}`,
    }),
    updatePayment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/payments/${id}`,
        method: "PATCH",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData("getPayments", undefined, (draft) => {
            const newValue = draft.map((curr) => {
              if (parseInt(curr.id) === parseInt(arg.id)) {
                return { ...curr, ...arg.data };
              } else {
                return curr;
              }
            });
            Object.assign(draft, newValue);
          })
        );
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),
    editPayment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/payments/${id}`,
        method: "PATCH",
        body: { ...data },
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const query = await queryFulfilled;
          // pessimistic cache update start
          if (query?.data?.id) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getPayments",
                undefined,
                (draft) => {
                  const newValue = draft.map((curr) => {
                    if (+curr.id === arg.id) {
                      return { ...query?.data };
                    } else {
                      return curr;
                    }
                  });
                  Object.assign(draft, newValue);
                }
              )
            );
          }
          // pessimistic cache update end
        } catch {}
      },
    }),
    deletePayment: builder.mutation({
      query: (id) => ({
        url: `/payments/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData("getPayments", undefined, (draft) => {
            const index = draft.findIndex(
              (i) => parseInt(i.id) === parseInt(arg)
            );
            draft.splice(index, 1);
          })
        );
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),
    addPayment: builder.mutation({
      query: (data) => ({
        url: `/payments`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // debugger;
        try {
          const query = await queryFulfilled;
          // pessimistic cache update start
          if (query?.data) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getPayments",
                undefined,
                (draft) => {
                  draft.push(query.data);
                }
              )
            );
          }
          // pessimistic cache update end
        } catch {}
      },
    }),
  }),
});
export const {
  useGetPaymentsQuery,
  useGetPaymentQuery,
  useEditPaymentMutation,
  useUpdatePaymentMutation,
  useDeletePaymentMutation,
  useAddPaymentMutation,
} = paymentApi;
