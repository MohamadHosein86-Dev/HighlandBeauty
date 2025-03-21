import {  useQuery } from "@tanstack/react-query";
import { getOrdersUser } from "../servises/AthenacationApi";
import useUser from "./useUser";

export default function useGetOrdersUser() {
    const {user}=useUser();
    const id  = user?.id  ;
    
    const { data  ,isLoading  ,isFetching  } = useQuery({
        queryKey:["user", id],
        queryFn: ()=>getOrdersUser(String(id)),
        
    });

    
    return { data ,  isFetching ,isLoading  }
}
