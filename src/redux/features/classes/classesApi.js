// import { apiSlice } from "../api/apiSlice";

import { apiSlice } from "../api/apiSlice";

export const classesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getClasses: builder.query({
      query: () => `/classes`,
    }),
    getClass: builder.query({
      query: (id) => `/classes/${id}`,
    }),
    updateClass: builder.mutation({
      query: ({ id, data }) => ({
        url: `/classes/${id}`,
        method: "PATCH",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData("getClasses", undefined, (draft) => {
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
    editClass: builder.mutation({
      query: ({ id, data }) => ({
        url: `/classes/${id}`,
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
                "getClasses",
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
    deleteClass: builder.mutation({
      query: (id) => ({
        url: `/classes/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData("getClasses", undefined, (draft) => {
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
    addClass: builder.mutation({
      query: (data) => ({
        url: `/classes`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // debugger;
        try {
          const query = await queryFulfilled;
          // pessimistic cache update start
          if (query?.data?.id) {
            dispatch(
              apiSlice.util.updateQueryData(
                "getClasses",
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
  useGetClassesQuery,
  useGetClassQuery,
  useEditClassMutation,
  useUpdateClassMutation,
  useDeleteClassMutation,
  useAddClassMutation,
} = classesApi;
