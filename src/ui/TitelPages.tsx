import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { ProductType } from "../servises/getProdcts";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";



  interface TypeSelctor{
            cartCustomer:{
            cartProducts:ProductType[]
            }
  }
  interface typePrope{
    pageOrder?:boolean,
    blog?:boolean,
    shop?:boolean
  }
  
export default function TitelPages({pageOrder , blog ,shop }:typePrope) {

    
        const {pathname}=useLocation(); 
        const navigate = useNavigate();
        const [searchParams  ]=useSearchParams();
        const category = searchParams.get("product-category") || "";
        const search = searchParams.get("search") || "";
        const products =useSelector((res:TypeSelctor)=>res.cartCustomer.cartProducts)  ;
    
        function gotoCheackOute() {
            if(products.length !==  0){
                navigate("/checkout");
            }
            if(products.length ==  0){
                toast.error(" محصولی در سبد خرید شما وجود ندارد نمیتوانید وارد شوید . ")
            }
        }


            if(shop)
                return (
                    <div className=" bgPink">
                            <div className=" contanerProudct ">
                                <div className=" w-full py-[4rem] sm:py-[5rem]text-center ">
                                {category || search ? (
                                    <div className={` ${search ? " max-w-[23rem] sm:max-w-[34rem] " : ""} mx-auto gap-[.5rem] flex items-center justify-center `}>
                                        <svg
                                            onClick={() => navigate(-1)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="cursor-pointer text-[#fff] font-semibold size-8 sm:size-12 "
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                        <h1 className="mt-[-1rem]  text-center text-[1.6rem] sm:text-[2.6rem] font-medium text-[#ffff]">
                                            {search ? ` نتایج جستجو برای :  ${search}` : category}
                                        </h1>
                                    </div>
                                    ) : (
                                        <h1 className="mt-[-1rem] text-center text-[2.2rem] sm:text-[2.6rem] font-medium text-[#ffff]"> فروشگاه </h1>
                                    )}
                                </div>
                            </div>
                    </div>
                       );

            if(pathname === "/my-account" )
                return(
                    <div className=" bg-[#3333331f] ">
                            <div className=" contanerProudct ">
                                <div className=" w-full py-[4rem] sm:py-[5rem] text-center ">
                                    <h1 className=" mt-[-1rem] text-[2rem] sm:text-[2.6rem] font-medium text-[#000000c9] "> حساب کاربری من </h1>
                                </div>
                            </div>
                    </div>
                      );  

            if(pathname === "/my-account/orders" )
                return(
                    <>
                        {<div className=" bg-[#3333331f] ">
                            <div className=" contanerProudct ">
                                <div className=" w-full py-[4rem] sm:py-[5rem] text-center ">
                                    <h1 className=" mt-[-1rem]  text-[2rem]   sm:text-[2.6rem] font-medium text-[#000000c9] ">سفارش های من </h1>
                                </div>
                            </div>
                        </div>}
                    </>
                      );
            
            if(pathname === "/my-account/favarit")
                return(
                    <div className=" bg-[#3333331f] ">
                            <div className=" contanerProudct ">
                                <div className=" w-full py-[4rem] sm:py-[5rem] text-center ">
                                    <h1 className="  mt-[-1rem] text-[2rem] sm:text-[2.6rem] font-medium text-[#000000c9] ">  علاقه مندی ها </h1>
                                </div>
                            </div>
                    </div>
                      ); 

            if(pathname === "/about-us")
                return(
                        <div className=" bg-[#33333309] ">
                                <div className="  ">
                                    <div className=" w-full py-[4rem] sm:py-[5rem] text-center ">
                                        <h1 className="  mt-[-1rem] text-[2rem] sm:text-[2.6rem] font-bold text-[#000000c9] ">  درباره ما </h1>
                                    </div>
                                </div>
                        </div>
                      ); 

            if(blog)
                return(
                            <div className=" bg-[#33333309] ">
                                    <div className="  ">
                                        <div className=" w-full py-[4rem] sm:py-[5rem] text-center ">
                                            <h1 className="  mt-[-1rem] text-[2rem] sm:text-[2.6rem] font-bold text-[#000000c9] "> بلاگ </h1>
                                        </div>
                                    </div>
                            </div>
                      );
                       

            if(pathname === "/contact-us")
                return(
                            <div className=" bg-[#33333309] ">
                                    <div className="  ">
                                        <div className=" w-full py-[4rem] sm:py-[5rem] text-center ">
                                            <h1 className="  mt-[-1rem] text-[2rem] sm:text-[2.6rem] font-bold text-[#000000c9] "> ارتباط با ما  </h1>
                                        </div>
                                    </div>
                            </div>
                      );
                       
                
            if(!pageOrder )
                return(
                        <div className=" bg-[#3333331f] ">
                                <div className=" contanerProudct ">
                                    <div className=" w-full py-[4rem] sm:py-[5rem] text-center ">
                                        <h1 className="  mt-[-1rem] text-[2rem] sm:text-[2.6rem] font-medium text-[#000000c9] "> حساب کاربری من </h1>
                                    </div>
                                </div>
                        </div>
                );   
            
            return(
                    <div className=" bg-[#3333330b] ">
                            <div className=" contanerProudct ">
                            <div className=" w-full flex justify-center items-center py-[4rem] sm:py-[5rem] text-center ">
                                    <h1 onClick={()=>navigate("/cart")} className={` hover:text-[#000000c9]  cursor-pointer ${pathname == "/cart"  ? " text-[#000000c9] border-b-[3px] pb-[.1rem] border-[#f42777] " : "text-[#3333338e]" }  mt-[-1rem]  text-[1.6rem] font-medium text-[#000000c9] `}> سبد خرید </h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` text-[#3333338e]  size-6 mb-[1.2rem] mx-[1.2rem]   `}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                    </svg>

                                    <h1 onClick={gotoCheackOute} className={` transition ease-in delay-75 hover:text-[#000000c9] cursor-pointer ${pathname == "/checkout"  ? " text-[#000000c9] pb-[.1rem] border-b-[3px] border-[#f42777] " : "text-[#3333338e]" } mt-[-1rem] text-[1.6rem] font-medium  `}> تسویه حساب  </h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` text-[#3333338e] size-6 mb-[1.2rem]   mx-[1.2rem] `}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                    
                                    </svg>
                                    <h1  className={` transition ease-in delay-75  cursor-pointer ${pathname == "/order-received"  ? " text-[#000000c9] pb-[.1rem]  border-b-[3px] border-[#f42777] " : "text-[#3333338e]" } mt-[-1rem] text-[1.6rem] font-medium text-[#000000c9] `}>  تکمیل سفارش  </h1>
                            </div>
                            </div>
                    </div>
            )
}
