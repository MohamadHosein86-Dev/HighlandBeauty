import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";


interface PropeType{
    CloseModal:()=>void
}
export default function MenuMobile({CloseModal}:PropeType) {

    const navigate =useNavigate();
    const [query , setQuery] =useState("");
    const [activ , setActiv] =useState("فهرست");
    const {authenticatd}= useUser();



    function handleSubmit(x:React.FormEvent<HTMLFormElement>) {
        x.preventDefault();    
        setTimeout(()=>{
          if(query !== ""){
            navigate(`/shop?search=${query}`);
          };
          setQuery("");
          CloseModal();
        },50);
    }


  return (
    <div className=" h-[100vh] pb-[1.5rem] flex flex-col justify-between " >
    <div className=" h-full ">
         <div className=" shadowMenu pt-[1rem]  px-[1.5rem]  ">
             <div className=" flex pb-[1rem] justify-between items-center w-[100%] ">
                 <form onSubmit={handleSubmit} className=" flex flex-row-reverse ">
                        <button className=" flex justify-center items-center boderBtn bgPink h-[2.8rem] w-[3.2rem] transition-all ease-out delay-150 shadow1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="white" className=" size-5">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                        <input onChange={(x)=>setQuery(x.target.value)} placeholder="جستجوی محصولات" type="text" className=" text-[.85rem] bg-[#fffff] border-[1px] border-[rgba(0,0,0,0.1)] boderInput w-[100%] px-[.8rem] outline-none " />
                      </form>
             </div>
         </div>
        <div className="    flex   ">
            <p onClick={(x)=>setActiv((x.target as HTMLElement).innerText)}  className={` transition delay-75 ease-in  text-sm font-bold  px-[1rem] py-[.8rem] ${activ === "فهرست" ? "bg-[#33333344] text-[#333333e3] "  : " text-[#33333376]  bg-[#3333330f]"}  basis-[50%] text-center `}>فهرست</p>
            <p  onClick={(x)=>setActiv((x.target as HTMLElement).innerText)} className={` transition delay-75 ease-in  text-sm font-bold ${activ === "دسته بندی" ? "bg-[#33333344] text-[#333333e3] "  : " text-[#33333376]  bg-[#3333330f]    "}  px-[1rem] py-[.8rem]  basis-[50%] text-center `}>دسته بندی</p>
        </div>
           {activ !== "دسته بندی" ? <div className="  ">
                <p onClick={()=>{navigate("/");CloseModal()}}  className=" text-sm font-bold text-[#333333ae] mt-[1.5rem] pb-[1rem] border-b-[1px] ">
                    <p className="px-[1.5rem]">صفحه اصلی</p>
                </p>
                <p  onClick={()=>{navigate("/about-us");CloseModal()}} className=" text-sm font-bold text-[#333333ae] mt-[1.2rem] pb-[1.2rem] border-b-[1px] ">
                    <p className="px-[1.5rem]">درباره ما</p>
                </p>
                <p onClick={()=>{navigate("/contact-us");CloseModal()}}  className=" text-sm font-bold text-[#333333ae] mt-[1.2rem] pb-[1.2rem] border-b-[1px] ">
                    <p className="px-[1.5rem]">  ارتباط با ما </p>
                </p>
                <p  onClick={()=>{navigate("/my-account/favarit");CloseModal()}} className=" text-sm font-bold text-[#333333ae] mt-[1.2rem] pb-[1.2rem] border-b-[1px]  ">
                    <div className="flex gap-[.3rem] px-[1.5rem] ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg>
                            <span className="">علاقه مندی</span>
                    </div>
                </p>
                <p  onClick={()=>{navigate("/my-account");CloseModal()}}  className=" text-sm font-bold text-[#333333ae] mt-[1.2rem] pb-[1.2rem] border-b-[1px] ">
                    {authenticatd ? 
                    <p className=" flex px-[1.5rem] gap-[.3rem] ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mb-[-.3rem]"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>
                        <span className="">حساب کاربری من</span>
                    </p> 
                    : 
                    <p className="px-[1.5rem]"> ورود / ثبت نام  </p> 
                    }
                </p>
           </div> : 
            <ul className={` transition-opacity duration-500 z-[100]   `} >
                    <p onClick={(x)=>{setTimeout(() => {
                    navigate(`/shop?product-category=${(x.target as HTMLElement).innerText}`)
                    }, 100);CloseModal()}  }   className=" text-sm font-bold text-[#333333ae] mt-[1.5rem] pb-[1rem] border-b-[1px] ">
                        <p className="px-[1.5rem]"> بهداشتی </p>
                    </p>

                    <p  onClick={(x)=>{setTimeout(() => {
                    navigate(`/shop?product-category=${(x.target as HTMLElement).innerText}`)
                    }, 100);CloseModal()}  } className=" text-sm font-bold text-[#333333ae] mt-[1.2rem] pb-[1.2rem] border-b-[1px] ">
                        <p className="px-[1.5rem]"> آرایشی </p>
                    </p>

                    <p onClick={(x)=>{setTimeout(() => {
                    navigate(`/shop?product-category=${(x.target as HTMLElement).innerText}`)
                    }, 100); CloseModal(); }  }  className=" text-sm font-bold text-[#333333ae] mt-[1.2rem] pb-[1.2rem] border-b-[1px] ">
                        <p className="px-[1.5rem]">  مو  </p>
                    </p>
            </ul>
    }
         
    </div>

   </div>
  )
}

