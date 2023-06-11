/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// import { apiSlice } from "../api/apiSlice";

import { apiSlice } from "../api/apiSlice";

export const instructorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getInstructors: builder.query({
      query: () => `/instructors`,
    }),
    getInstructor: builder.query({
      query: (id) => `/instructors/${id}`,
    }),
    updateInstructor: builder.mutation({
      query: ({ id, data }) => ({
        url: `/instructors/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData(
            "getInstructors",
            undefined,
            (draft) => {
              const newValue = draft.map((curr) => {
                if (curr._id === arg.id) {
                  return { ...curr, ...arg.data };
                } else {
                  return curr;
                }
              });
              Object.assign(draft, newValue);
            }
          )
        );
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),
    deleteInstructor: builder.mutation({
      query: (id) => ({
        url: `/instructors/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData(
            "getInstructors",
            undefined,
            (draft) => {
              const index = draft.findIndex(
                (i) => parseInt(i._id) === parseInt(arg)
              );
              draft.splice(index, 1);
            }
          )
        );
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),
    addInstructor: builder.mutation({
      query: (data) => ({
        url: `/instructors`,
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
                "getInstructors",
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
  useGetInstructorsQuery,
  useGetInstructorQuery,
  useUpdateInstructorMutation,
  useDeleteInstructorMutation,
  useAddInstructorMutation,
} = instructorApi;
