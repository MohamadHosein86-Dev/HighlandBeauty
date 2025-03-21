import { useDispatch, useSelector } from "react-redux"
import { ProductType } from "../servises/getProdcts";
import { formatCurrencyToToman } from "../helperfunction/functionHelper";
import { useState } from "react";
import SpinnerMini from "./SpinerMini";
import { deleteProduct } from "../featchers/CartCustomerReducer";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";



interface TypeSelctor{
  cartCustomer:{
    cartProducts:ProductType[],
    totalPrice:number
  }
}
interface PropeType{
  CloseModal:()=>void
}

export default function ProductsModal10({CloseModal}:PropeType) {

  const {authenticatd} = useUser();
  const {pathname} =useLocation();

  const navigate = useNavigate();
  const products =useSelector((res:TypeSelctor)=>res.cartCustomer.cartProducts)  ;
  const [lodaing ,setLoading]=useState(false);
  const dispatch = useDispatch();
  const totalPrice = useSelector((res:TypeSelctor)=>res.cartCustomer.totalPrice) ;

  function handleDeleteProduct(product:ProductType) {

    setLoading(true)
    setTimeout(()=>{
        setLoading(false);
        dispatch(deleteProduct(product));
        toast.success(" محصول شما از سبد خرید حذف شد ")
    },500);
    
  }
  function handleGotoCart() {
      if(authenticatd){
        navigate("/cart");
        CloseModal();
      }
      else{
        toast("لطفا اول وارد حسابتون شوید یا حساب برای خودتون بسازید.");
      }
  }
  if(pathname === "/checkout" || pathname === "/cart"){

    CloseModal();
    return null;
  };

  return (
    <div className=" h-[100vh] pb-[1.5rem] flex flex-col justify-between " >
     <div className=" h-full ">
          <div className=" pt-[1rem]  px-[1.5rem]  border-b-[1px]">
              <div className=" flex pb-[1rem] justify-between items-center w-[100%] ">
                  <h1 className=" font-bold text-[1.3rem] ">سبد خرید</h1>
                  <div className=" transition-all ease-in delay-75  flex items-center gap-[.2rem] hover:text-[rgba(51,51,51,.6)] ">
                      <svg onClick={()=>CloseModal()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                      <span className="  font-medium "> بستن </span>
                  </div>
              </div>
          </div>
          {products.length !== 0 && authenticatd ?
            <div className={`  pb-[1rem]  relative  `}>

                {products.map((res)=>{
                   const discountAmount = (res?.price * res?.discount) / 100 ;
                   const finalPrice = res?.price - discountAmount;
                  return(
                      <div className={` ${lodaing && "bg-[#3333330c]"} flex  gap-[1rem] pt-[1rem] pb-[1rem] px-[1.5rem] border-b-[1px] transition ease-in-out delay-150 hover:bg-[#3333330c] `}>
                            <div>
                              <img className={` ${lodaing && "opacity-[.35]" } max-w-[4rem] relative `} src={res.image} alt="" />
                              {lodaing && 
                                <div className=" absolute top-[1.5rem] right-[2.2rem] ">
                                    <SpinnerMini />
                                </div>
                              }
                            </div>
                            <div>
                              <h3 className=" font-semibold text-[#333] ">{res?.name}</h3>
                              <div className=" mt-[.25rem] text-sm  flex items-center gap-[.5rem]  ">
                                <p className=" font-semibold ">{res.quantity}</p> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-[#3338]  size-[15px] ">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                                <p className=" font-semibold text-[rgb(244,39,119)] ">{formatCurrencyToToman(finalPrice)}</p>
                                  <p className=" w-[4.5rem] "></p>
                              </div>
                            </div>
                            <div className=" absolute left-[1.5rem]  ">
                              <div onClick={()=>handleDeleteProduct(res)} className=" transition-all ease-in delay-75  hover:bg-white flex items-center justify-center size-5 rounded-[50%] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                              </div>
                            </div>
                      </div>
                  )
                }
                )}
            </div>
            :
            <div className=" px-[1.5rem] ">
              <div className=" mt-[-.5rem] flex justify-center ">
                   <img className=" w-[10rem] mt-[2rem] "  src="https://th.bing.com/th/id/OIP.aLes1kbd5W46BYXrwM5rGgAAAA?rs=1&pid=ImgDetMain" alt="" />
              </div>
              <div className=" flex flex-col justify-center gap-[1rem] mt-[1rem] ">
                <h2 className=" text-[#333] font-medium text-center  ">هیج محصولی در سبد خرید شما نیست</h2>
                <button onClick={()=> {navigate("/shop"); CloseModal()} } className=" h-[3rem] w-[67%] pb-[.3rem] rounded-[2rem] bg-[#aa3a8e] text-white mx-auto  "> بازگشت به فروشگاه </button>
              </div>
            </div>
          }
     </div>
      {products.length !== 0 && authenticatd &&  <div className="  border-t-[1px] pt-[1rem]  px-[1.5rem]  ">
          <div className=" flex pb-[.6rem] justify-between ">
            <h2 className=" font-semibold text-[1.2rem] "> جمع کل : </h2>
            <h2 className=" font-semibold text-[1.2rem] text-[rgb(244,39,119)] ">{formatCurrencyToToman(totalPrice)}</h2>
          </div>
          <div className=" flex flex-col gap-[.5rem] ">
            <button onClick={handleGotoCart} className=" h-[2.8rem] pb-[.3rem] rounded-[2rem] bg-[#aa3a8e] hover:bg-[#33333325] transition ease-in-out delay-100 text-[#333] w-full ">مشاهده سبد خرید</button>
            <button className=" h-[2.8rem] rounded-[2rem] bg-[#aa3a8e] text-white w-full ">تسویه حساب</button>
          </div>
      </div>}
    </div>
  )
}
