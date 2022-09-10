import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://think-in-redux-way-server.herokuapp.com",

    }),
    tagTypes: ["Todos", "Todo"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos",
            providesTags: (result, error, arg) => ["Todos"]

        }),
        addTodo: builder.mutation({
            query: ({ data }) => {
                return {
                    url: `/todos`,
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: (result, error, arg) => [
                "Todos",
            ],
        }),
        editTodo: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `/todos/${id}`,
                    method: "PATCH",
                    body: data
                }
            },
            invalidatesTags: (result, error, arg) => [
                "Todos",
                { type: "Todo", id: arg.id },
            ],
        })


    })
});

export const { useGetTodosQuery, useAddTodoMutation, useEditTodoMutation } = apiSlice
