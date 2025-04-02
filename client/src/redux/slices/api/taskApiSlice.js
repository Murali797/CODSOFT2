import { duplicateTask } from "../../../../../server/controllers/taskController"
import { apiSlice } from "../apiSlice"

const TASK_URL = "/task"
export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: `${TASK_URL}/dashboard`,
                method: 'GET',
            }),
        }),
        getAllTask: builder.query({
            query: ({strQuery, isTrashed, search}) => ({
                url: `${TASK_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
                method: "GET",
            }),
        }),

        createTask: builder.mutation({
            query: (data) => ({
                url: `${TASK_URL}/create`,
                method: 'POST',
                body: data,
            }),
        }), 

        duplicateTask: builder.mutation({
            query: (id) => ({
                url: `${TASK_URL}/duplicate/${id}`,
                method: 'POST',
                body: {},
            }),
        }), 

        updateTask: builder.mutation({
            query: (data) => ({
                url: `${TASK_URL}/update/${data._id}`,
                method: 'PUT',
                body: data,
            }),
        }), 

        trashTask: builder.mutation({
            query: ({id}) => ({
                url: `${TASK_URL}/${id}`,
                method: 'PUT',

            }),
        }),

        createSubTask: builder.mutation({
            query: ({data, id}) => ({
                url: `${TASK_URL}/create-subtask/${id}`,
                method: 'PUT',
                body: data,

            }),
        }),

    }),
})
export const {
    useGetDashboardStatsQuery, 
    useGetAllTaskQuery,
    useCreateTaskMutation, 
    useDuplicateTaskMutation,
    useUpdateTaskMutation,
    useTrashTaskMutation,
    useCreateSubTaskMutation
} = taskApiSlice