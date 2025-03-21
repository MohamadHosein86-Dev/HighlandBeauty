import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getProudct from "../servises/getProudct";


export default function useGetProudct() {

  const {id} =useParams() ;

  const {data:proudct , isLoading} = useQuery({
    queryKey:["proudct",id],
    queryFn:()=>getProudct(String(id))
  });

  return {proudct , isLoading};
}
