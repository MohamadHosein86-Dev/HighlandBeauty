import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "../servises/getProdcts";
import TitelPages from "./TitelPages";
import { formatCurrencyToToman } from "../helperfunction/functionHelper";
import { useNavigate } from "react-router-dom";
import { deleteProduct, munesquantity, updatequantity } from "../featchers/CartCustomerReducer";
import { useState } from "react";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

interface TypeSelctor{
  cartCustomer:{
    cartProducts:ProductType[],
    totalPrice:number,
    ProductLength:number
  }
}
export default function Cart() {

  const navigate = useNavigate();
  const dispatch =useDispatch();

  const products =useSelector((res:TypeSelctor)=>res.cartCustomer.cartProducts)  ;
  const totalPrice = useSelector((res:TypeSelctor)=>res.cartCustomer.totalPrice) ; 
  const quantity = useSelector((res:TypeSelctor)=>res.cartCustomer.ProductLength) ; 
  const [loading ,setLoading]= useState(false);
 
  function handleDelete(product:ProductType) {
    setLoading(true);
    setTimeout(()=>{
      dispatch(deleteProduct(product));
      setLoading(false);
      toast.success("محصول شما با موفقیت حذف شد");
    },250);
  }
  function handlemunse(res:ProductType) {
    dispatch(munesquantity(res));
  }
  function handleIncrase(res:ProductType) {
    dispatch(updatequantity(res))
  }
    

  return ( 
    <section className="  bgHeadr">
      <div>
        <TitelPages />
      </div>
      {products.length === 0 ? 
          <div className=" flex flex-col py-[4rem] ">
              <img className=" mx-auto w-[14rem]  "  src="	https://greenskinshop.com/images/68b7acd6.png" alt="" />
              <h1  className=" text-[#333] text-center  text-[1.6rem] font-bold ">متسفانه هیچ محصولی وجود ندارد!</h1>
              <button onClick={()=>navigate("/shop")} className=" mt-[2rem] mx-auto bg-[#aa3a8e] rounded-[4rem] py-[.8rem] font-semibold  text-[#fff] w-[9rem] ">رفتن به فروشگاه</button>
          </div>
            :
      <div className="  contanerProudct2 gap-[2rem]  flex-col lg:flex-row flex ">
          <div className=" hidden sm:block  mt-[1rem] pt-[1.5rem] basis-[65%] ">

            <div className=" border-b-[2px] font-medium pb-[1rem] flex justify-between ">
              <p className=" text-[1.1rem] mr-[9.5rem] ">محصول</p>
              <p className=" text-[1.1rem] ">قیمت</p>
              <p className=" text-[1.1rem] ">تعداد</p>
              <p className=" text-[1.1rem] ">جمع جز</p>
            </div>
            { loading ? <div className=" flex justify-center ">
              <Spinner />
            </div> : products.map((res)=>{
              const discountAmount = (res?.price * res?.discount) / 100 ;
              const finalPrice = Number(res?.price) - discountAmount;

              return(
                    <div className=" flex mt-[1rem] border-b-[1px] pb-[1rem] justify-between items-center ">

                        <div  className=" w-[35%] flex items-center gap-[.75rem]  ">
                            <svg onClick={()=>handleDelete(res)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` transition ease-in delay-75  cursor-pointer hover:text-[#33333369] size-4  `}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            <div onClick={()=>navigate(`/product/${res.id}`)} className=" cursor-pointer flex items-center gap-[1.5rem] ">
                                <img src={res.image} className=" size-[5rem] " alt="" />  
                                <h2 className=" font-semibold  hover:text-[#3333337d] transition ease-in delay-75 ">{res.name}</h2>
                            </div>
                        </div>
                        <p className=" text-[#33333379] ">{formatCurrencyToToman(finalPrice )}</p>
                        <div>
                              <button onClick={()=>handlemunse(res)} className="px-[.8rem] py-[.5rem] bg-gray-200 rounded hover:bg-gray-300">
                                     -
                              </button>
                                    <span className="px-4 text-center">{res?.quantity}</span>
                              <button onClick={()=>handleIncrase(res)}  className="px-[.8rem] py-[.5rem] bg-gray-200 rounded hover:bg-gray-300">
                                      +
                              </button>
                        </div>
                        <p className=" text-[#f42777] font-semibold text-[1.2rem] ">{formatCurrencyToToman(finalPrice * res.quantity )}</p>
                    
                    </div>
            )
            })}
                
          
          </div>
          {products.map((res)=>{
          

            return(
              <div className=" flex w-full sm:hidden ">
                    <div className="] w-full mt-[2rem]  gap-[1.5rem] font-medium pb-[1rem] flex  flex-col  ">
                          <div className=" border-b-[2px] pb-[1.5rem] w-full flex items-center justify-between text-[1.1rem]  ">
                            <p className="font-bold text-[#3333339e]  ">محصول</p>
                            <div className=" items-center gap-[1rem] flex ">
                              <p className=" font-bold text-[#3333339e]    ">{res.name}</p>
                              <img className=" max-w-[4.5rem] " src={res.image} alt="" />
                            </div>
                          </div>
                          <div className=" border-b-[2px] pb-[1.5rem] w-full flex items-center justify-between text-[1.1rem]  ">
                            <p className="font-bold text-[#3333339e]  ">تعداد</p>
                            <div className=" items-center gap-[1rem] flex ">
                              <p className=" font-bold text-[#f42777]    ">{res.quantity}</p>
                            </div>
                          </div>
                          <div className=" border-b-[2px] pb-[1.5rem] w-full flex items-center justify-between text-[1.1rem]  ">
                            <p className="font-bold text-[#3333339e]  ">قیمت</p>
                            <div className=" items-center gap-[1rem] flex ">
                              <p className=" font-bold text-[#f42777]    ">{formatCurrencyToToman(totalPrice)}</p>
                            </div>
                          </div>
                          <div className=" border-b-[2px] pb-[1.5rem] w-full  flex items-center justify-between text-[1.1rem]  ">
                            <p className="font-bold text-[#3333339e] text-[1.4rem]  "> جمع جزء </p>
                            <div className=" items-center gap-[1rem] flex ">
                              <p className=" font-bold text-[#f42777] text-[1.4rem]    ">{formatCurrencyToToman(totalPrice)}</p>
                            </div>
                          </div>
                    </div>
              </div>
            )
          })}
          <div className=" border-[3px] px-[1.8rem] py-[1.5rem] mt-[2rem] basis-[35%] ">
              <h2 className=" font-semibold text-[1.4rem] ">جمع کل سبد خرید</h2>
              <div className=" pb-[1.2rem] border-b-[1px] mt-[2.2rem] flex w-full justify-between ">
                <p className=" font-semibold ">  جمع جز  </p>
                <p className=" font-semibold text-[#33333378] ">{formatCurrencyToToman(totalPrice)}</p>
              </div>
              <div className=" pb-[1.2rem] border-b-[1px] mt-[2rem] flex w-full justify-between ">
                <p className=" font-semibold "> تعداد کل کالا </p>
                <p className=" text-[#f42777] ">{quantity}</p>
              </div>
              <div className=" mt-[2.5rem] flex w-full justify-between ">
                <p className=" text-[1.4rem] font-semibold ">  مجموع </p>
                <p className=" text-[1.4rem] font-semibold text-[#f42777] ">{formatCurrencyToToman(totalPrice)}</p>
              </div>
              <button onClick={()=>navigate("/checkout")} className=" pb-[-.2rem] mt-[2rem] bg-[#aa3a8e] rounded-[4rem] py-[.8rem] font-semibold  text-[#fff] w-[100%] "> ادامه جهت تسویه </button>
          </div>  
      </div>
      }
    </section>
  )
}
