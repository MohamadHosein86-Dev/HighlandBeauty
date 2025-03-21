import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatCurrencyToToman } from "../helperfunction/functionHelper";
import Modal from "./Modal";
import ProductsModal10 from "./ProductsModal10";
import useUser from "../hooks/useUser";
import useGetOrdersUser from "../hooks/useGetOrdersUser";
import MenuMobile from "./MenuMobile";
import toast from "react-hot-toast";



interface TypeSelctor{
  cartCustomer:{
    ProductLength:number,
    totalPrice:number
  }
}
export default function Header() {
  
  const {user , authenticatd} = useUser();
  const {data}=useGetOrdersUser();
  
  const productsIndex = useSelector((res:TypeSelctor)=>res.cartCustomer.ProductLength) ;
  const totalPrice = useSelector((res:TypeSelctor)=>res.cartCustomer.totalPrice) ;
  const [showBox , setShowBox] =useState(false);
  const [query , setQuery] =useState("");
  const navigate = useNavigate();
  const {pathname}=useLocation();



  function handleSubmit(x:React.FormEvent<HTMLFormElement>) {
    x.preventDefault();    
    setQuery("");
    setTimeout(()=>{
      if(query !== ""){
       navigate(`/shop?search=${query}`);
      }
      setQuery("");
    },50);
  }

  return (
    <header className="  " >
           
              <section className=" bg-[#fffff] lg:bg-[#f6f6f6] ">
                <div className=" contaner pt-[.5rem]  flex justify-between items-center py-[1rem]">

                   <div className=" lg:hidden flex items-center gap-[.5rem]">
                            <Modal>
                                  <Modal.Open openwindowName="productModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" cursor-pointer size-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"> </path>
                                    </svg>
                                  </Modal.Open>
                                  <Modal.Window center={true} name="productModal">
                                    <MenuMobile CloseModal={()=>{}}  />
                                  </Modal.Window>
                            </Modal>
                      <span>فهرست</span>
                   </div>
                   <div>
                      <Link  to={"/"}>
                          <img className=" lg:max-w-[10rem] max-w-[8rem]" src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/logo3.png" alt="" />
                      </Link>
                   </div>
                
                 
                    <div className=" lg:block hidden basis-[26rem]">
                      <form onSubmit={handleSubmit} className=" flex flex-row-reverse ">
                        <button className=" flex justify-center items-center boderBtn bgPink h-[2.8rem] w-[3.2rem] transition-all ease-out delay-150 shadow1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="white" className=" size-5">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                        <input value={query} onChange={(x)=>setQuery(x.target.value)} placeholder="جستجوی محصولات" type="text" className=" text-[.85rem] bg-[#fffff] border-[1px] border-[rgba(0,0,0,0.1)] boderInput w-[100%] px-[.8rem] outline-none " />
                      </form>
                    </div>


                    <div onClick={()=>navigate("/my-account")} className=" lg:flex hidden cursor-pointer  gap-[.5rem] items-center transition-all ease-out delay-150 hover:text-[rgba(51,51,51,.6)] " >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mb-[-.3rem]">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                          <p>                      
                            {authenticatd  ? user?.name : " ورود / ثبت نام  "  }
                          </p>
                    </div>   
                    <div className=" lg:hidden  flex items-center gap-[1rem] ">
                          <span onClick={()=>navigate("/my-account")} className=" hover:opacity-[.5] cursor-pointer transition ease-in delay-75 "> 
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mb-[-.3rem]">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                              </svg>
                          </span>
                          <Modal>
                              <Modal.Open openwindowName="productModal">
                                  <div className=" flex gap-[.7rem] relative  cursor-pointer hover:text-[rgba(51,51,51,.6)] ">
                                      <span className="hover:text-[rgba(51,51,51,.6)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="  size-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                      </span>
                                      <span className=" IconNumber">{productsIndex}</span>
                                  </div>
                              </Modal.Open>
                              <Modal.Window center={false}  name="productModal">
                                <ProductsModal10 CloseModal={()=>{}} />
                              </Modal.Window>
                        </Modal>
                          
                    </div>

                </div>                 
              </section>

              <section className={` ${pathname === "/" ? "pb-[3.5rem]" : "pb-[3.5rem]"} bg-[#fffff] lg:block hidden h-[3rem]   `}>
                    <div className="  p-0  flex  contaner   justify-between items-center  relative">
                  
                        <div onMouseOut={()=>setShowBox(false)} onMouseOver={()=>setShowBox(true)} className=" h-[3.5rem] flex justify-between items-center basis-[16rem]  ">
                            <div className=" flex items-center gap-[.5rem] ">
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                </span>
                                <span>دسته بندی محصولات</span>
                            </div>
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                              </svg>
                            </div>
                        </div>
                        <ul onMouseOut={()=>showBox && setShowBox(false)} onMouseOver={()=> showBox && setShowBox(true)}  className={` transition-opacity duration-500 ${showBox ? " opacity-100" : " opacity-0"} z-[100]  absolute top-[3.5rem] `} >
                                <li onClick={(x)=>{setTimeout(() => {
                                  navigate(`/shop?product-category=${(x.target as HTMLElement).innerText}`)
                                }, 100);}  }  className=" hover:bg-[#f7f7f7] cursor-pointer transition-all ease-out delay-150 p-[.5rem] w-[16rem] pb-[1rem] bg-[#fff] border-t-[rgba(0,0,0,0.075)] border-t-[1px] border-b-[rgba(0,0,0,0.075)] border-b-[1px] ">بهداشتی </li>
                                <li onClick={(x)=>{setTimeout(() => {
                                  navigate(`/shop?product-category=${(x.target as HTMLElement).innerText}`)
                                }, 100);}  } className=" hover:bg-[#f7f7f7] cursor-pointer transition-all ease-out delay-150 p-[.5rem] w-[16rem] pb-[1rem] bg-[#fff] border-b-[rgba(0,0,0,0.075)] border-b-[1px]  " >آرایشی</li>
                                <li onClick={(x)=>{setTimeout(() => {
                                  navigate(`/shop?product-category=${(x.target as HTMLElement).innerText}`)
                                }, 100);}  } className=" hover:bg-[#f7f7f7] cursor-pointer transition-all ease-out delay-150 p-[.5rem] w-[16rem] pb-[1rem] bg-[#fff] border-b-[rgba(0,0,0,0.075)] border-b-[1px]  " >مو</li>
                        </ul>
                        <div className=" flex gap-[1rem]">
                            <Link className={`  font-normal ${pathname === "/" && "text-[rgb(244,39,119)]"} hover:text-[rgb(244,39,119)] transition-all ease-out delay-100 `} to={"/"}>صفحه اصلی</Link>
                            <Link  className={` font-normal ${pathname === "/about-us" && "text-[rgb(244,39,119)]"}  hover:text-[rgb(244,39,119)] transition-all ease-out delay-100 "`} to={"/about-us"}>درباره</Link>
                            <Link  className={` font-normal ${pathname === "/shop" && "text-[rgb(244,39,119)]"}  hover:text-[rgb(244,39,119)] transition-all ease-out delay-100 `} to={"/shop"}>فروشگاه</Link>
                            <Link  className={` font-normal ${pathname === "/contact-us" && "text-[rgb(244,39,119)]"} hover:text-[rgb(244,39,119)] transition-all ease-out delay-100 `} to={"/contact-us"}>ارتباط با ما</Link>
                        </div>

                        <div className=" flex flex-row-reverse items-center gap-[1.2rem]">
                            <Modal>
                                  <Modal.Open openwindowName="productModal">
                                      <div className=" flex gap-[.7rem] relative  cursor-pointer hover:text-[rgba(51,51,51,.6)] ">
                                          <span className="hover:text-[rgba(51,51,51,.6)]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="  size-6">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                          </span>
                                          <span> {  formatCurrencyToToman( authenticatd ? totalPrice : 0)} </span>
                                          <span className=" IconNumber">{ authenticatd ? productsIndex : 0}</span>
                                      </div>
                                  </Modal.Open>
                                  <Modal.Window center={false} name="productModal">
                                    <ProductsModal10 CloseModal={()=>{}} />
                                  </Modal.Window>
                            </Modal>
                            <div onClick={()=> {
                              if(authenticatd){
                                navigate("/my-account/favarit")
                              }
                              else{
                                toast.error(" لطفا اول وارد سایت شوید ")
                              }
                              }} className=" relative cursor-pointer ">
                                <span className="hover:text-[rgba(51,51,51,.6)]">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                  </svg>
                                </span>
                                <span className="IconNumber">  {data?.favarits ?  data?.favarits?.length : 0}  </span>
                            </div>
                        </div>

                    </div>
              </section>
        
    </header>
  )
}
