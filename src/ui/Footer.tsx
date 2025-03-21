import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import ProductsModal10 from "./ProductsModal10";
import { useSelector } from "react-redux";
import useGetOrdersUser from "../hooks/useGetOrdersUser";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";

interface TypeSector{
  cartCustomer:{
    ProductLength:number
  }
}
export default function Footer() {
  
  const {authenticatd}=useUser();
  const productLength = useSelector((res:TypeSector)=>res.cartCustomer.ProductLength) ;
  const {data} = useGetOrdersUser();
  const {pathname}=useLocation();

  const navigate =useNavigate();

  return (
    <section className={`  pt-[4rem] ${ pathname === "/my-account" || pathname === "/shop" || pathname === "/blog1" || pathname === "/about-us" || pathname === "/contact-us" ? "bg-[#ffff] " : "bgHeadr"}  `} >
        <div className="   reduse">
          <div className=" bgFoote1 h-[100%]">
              
              
              <div className=" lg:flex-nowrap   flex-wrap  justify-center contaner pt-[3rem] pb-[6rem] flex footer-gap-560:gap-[6rem] gap-[4rem]"> 
                  <div>
                     <Link  to={"/"}>
                            <img className=" max-w-[12rem] " src="/src/images/logo-footer3.png" alt="" />
                     </Link>
                     <p className=" max-w-[15rem] mt-[1rem] text-[#fff] leading-[1.95rem] ">
                        هایلند بیوتی در تمامی انتخاب درست برای شما برای خرید کالا ها . <strong> تهیه شده توسط محمدحسین صفریان .  </strong>  
                     </p>
                  </div>
                  <div className=" basis-[13rem] ">
                        <h3 className=" text-[1.4rem]  font-bold text-[#fff]">دسترسی سریع</h3>     
                        <div className=" flex flex-col mt-[1rem] gap-[.5rem]">
                          <Link className="  text-[#fff] text-[1rem] " to={"/"}>صفحه اصلی</Link>
                          <Link  className=" text-[#fff] text-[1rem] " to={"/about-us"}>دربار ما</Link>
                          <Link  className=" text-[#fff] text-[1rem] " to={"/contact-us"}>ارتباط با ما</Link>
                          <Link  className=" text-[#fff] text-[1rem] " to={"/shop-rules"}> قوانین فروشگاه </Link>
                        </div>               
                  </div>
                  <div className=" sm:text-[2px] basis-[13rem]">
                        <h3 className=" text-[1.4rem] font-bold text-[#fff]"> اخرین مقالات</h3>
                        <div className=" flex mt-[1.5rem] flex-col gap-[1.2rem] ">
                          <Link className="  text-[#fff] text-[1rem] " to={"/blog1"}> نکات استفاده از روغن پوست </Link>
                          <Link  className=" text-[#fff] text-[1rem] " to={"/blog2"}> فوم اصلاح چیست؟ </Link>
                          <Link  className=" text-[#fff] text-[1rem] " to={"/blog3"}> اهمیت استفاده از ضد آفتاب </Link>
                        </div>                 
                  </div>
                  <div className=" max-w-[18rem] ">
                        <h3 className=" text-[1.4rem] font-bold text-[#fff] text-center m-0 "> نماد اعتماد </h3>  
                        <img src="	https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/enamad1.png " className=" m-auto my-[1rem] " alt="" />
                        <p className=" text-[#fff] text-[1rem] text-center max-w-[12rem] ">این نماد فاقد اعتبار می باشد </p>
                        <p className=" text-[#fff] text-[1rem] text-center max-w-[12rem] ">و صرفا جنبه نمایشی دارد </p>                 
                  </div>
              </div>
              <div className=" bg-[#fff]  h-[3.5rem]   fixed bottom-0 left-0 right-0 z-[100]  lg:hidden">

                <div className="  flex justify-around  pt-[.3rem]">
                    <div onClick={()=>navigate("/shop")} className="  cursor-pointer transition ease-in delay-75 hover:text-[rgba(51,51,51,.6)] flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                        </svg>
                        <p>فروشگاه</p>
                    </div>
                    <div onClick={()=>{
                      if(authenticatd){
                        navigate("/my-account/favarit")
                      }
                      else{
                        toast.error("لطفا اول وارد سایت شوید .");
                      }
                      }} className=" cursor-pointer transition ease-in delay-75 hover:text-[rgba(51,51,51,.6)] flex flex-col items-center" >
                        <div className=" relative cursor-pointer ">
                        <span className="">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                          </svg>
                        </span>
                        <span className="IconNumber">   {data?.favarits ?  data?.favarits?.length : 0} </span>
                        </div>
                        <p>علاقه مندی</p>
                    </div>
                     <Modal>
                             <Modal.Open openwindowName="productModa">
                                  <div className="  cursor-pointer transition ease-in delay-75 hover:text-[rgba(51,51,51,.6)] flex flex-col items-center" >
                        <div className=" flex gap-[.7rem] relative  cursor-pointer hover:text-[rgba(51,51,51,.6)] ">
                          <span className="">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="  size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                          </svg>
                          </span>
                          <span className=" IconNumber">{productLength}</span>
                        </div>
                        <p>سبد خرید</p>
                                  </div>
                             </Modal.Open>
                             <Modal.Window center={false} name="productModa">
                                  <ProductsModal10 CloseModal={()=>{}} />
                             </Modal.Window>
                     </Modal>
                    <div onClick={()=>navigate("/my-account")} className="  cursor-pointer transition ease-in delay-75 hover:text-[rgba(51,51,51,.6)] flex flex-col items-center gap-[.3rem] " >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mb-[-.3rem]">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                          <p>حساب کاربری من</p>
                    </div>
                </div>
             
              </div>
          </div>
        </div>
    </section>
  )
}
