import { TagTypes } from "../../../types/tagTypes";
import { baseApi } from "../baseApi";

export const cardApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
     createCard:builder.mutation({
        query:(data)=>{
            return {
               url:'/cards',
               method:"POST",
               body:data
            }
        },
        invalidatesTags:[TagTypes.card]
     }),
     getAllCard:builder.query({
        query:(args)=>{
            return {
               url:'/cards',
               method:"GET",
               params:args
            }
        },
        providesTags:[TagTypes.card]
     })
    })
})

export const {useCreateCardMutation,useGetAllCardQuery}=cardApi;