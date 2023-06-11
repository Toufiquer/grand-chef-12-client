/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// import { apiSlice } from "../api/apiSlice";

import { apiSlice } from "../api/apiSlice";

export const enrolledClassesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getEnrolledClasses: builder.query({
      query: () => `/enrolledClasses`,
    }),
    getEnrolledClass: builder.query({
      query: (email) => `/enrolledClasses/${email}`,
    }),
    updateEnrolledClass: builder.mutation({
      query: ({ id, data }) => ({
        url: `/enrolledClasses/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData(
            "enrolledClasses",
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
        // update getInstructors query
        const patchResult2 = dispatch(
          apiSlice.util.updateQueryData(
            "getInstructors",
            undefined,
            (draft) => {
              draft.push(...arg.data);
              // Object.assign(draft, newValue);
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
    deleteEnrolledClass: builder.mutation({
      query: (id) => ({
        url: `/enrolledClasses/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData(
            "getEnrolledClasses",
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
    addEnrolledClass: builder.mutation({
      query: (data) => ({
        url: `/enrolledClasses`,
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
                "getEnrolledClasses",
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
  useGetEnrolledClassesQuery,
  useGetEnrolledClassQuery,
  useUpdateEnrolledClassMutation,
  useDeleteEnrolledClassMutation,
  useAddEnrolledClassMutation,
} = enrolledClassesApi;
