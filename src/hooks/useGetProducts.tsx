import { useQuery } from "@tanstack/react-query";
import { getProdcots } from "../servises/getProdcts";
import { useSearchParams } from "react-router-dom";

export default function useGetProducts() {
    const [searchParams] =useSearchParams();

    const search = searchParams.get("search") || "";
    const filterByCatgury = searchParams.get("product-category") || "";
    const perPage = searchParams.get("per-page") || "";
    const orderby = searchParams.get("orderby") || "";

    const {data,isLoading} = useQuery({
        queryKey:["Products",search , filterByCatgury],
        queryFn:getProdcots
    });



    const searchProducts = data?.filter((res)=> search === "" ? res : res.name.includes(search) );
    const filterProducts = searchProducts?.filter((res)=> filterByCatgury === "" ? res : res.category.includes(filterByCatgury) );
    
    const products1 = Number(perPage) == 0 ? filterProducts : filterProducts?.slice(0 , Number(perPage));

    const products =   orderby === "price-asc" ? products1?.slice()?.sort((a,b)=> b.price - a.price ) : orderby === "price-desc" && products1?.slice().sort((a,b)=> a.price - b.price )  || products1;


    return {products ,data , isLoading};
}
