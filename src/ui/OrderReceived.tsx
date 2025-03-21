import { useSelector } from "react-redux";
import { formatCurrencyToToman } from "../helperfunction/functionHelper";
import useGetOrdersUser from "../hooks/useGetOrdersUser"
import TitelPages from "./TitelPages";
import { ProductType } from "../servises/getProdcts";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";





interface TypeSelctor{
  cartCustomer:{
    IDorder:"" | number
  }
}
export default function OrderReceived() {
  
    const { data }=useGetOrdersUser();
    
    
    const IdOrder =useSelector((res:TypeSelctor)=>res.cartCustomer.IDorder)  ;
    const productsLenght =  data?.orders?.map((res)=>res.products);
    const is0Lenght = productsLenght?.length === 0 
 
    const idOrders =  is0Lenght ? data?.orders?.map((res)=>res.idOrder) :  data?.orders?.find((res)=>   res.idOrder  == IdOrder)?.idOrder;
    const totalPrice = is0Lenght ?  data?.orders?.map((res)=>res.totalPricePost) : data?.orders?.find((res)=> res.idOrder === IdOrder)?.totalPricePost;
    const Postofprice = is0Lenght ?  data?.orders?.map((res)=>res.postOfPrice) : data?.orders?.find((res)=> res.idOrder === IdOrder)?.postOfPrice;
    const Postofname = is0Lenght ?  data?.orders?.map((res)=>res.postOfname) : data?.orders?.find((res)=> res.idOrder === IdOrder)?.postOfname;
    const phoneUser =   is0Lenght ? data?.orders?.map((res)=>res.phone) : data?.orders?.find((res)=> res.idOrder === IdOrder )?.phone;
    const nameUser =   is0Lenght ? data?.orders?.map((res)=>res.name) : data?.orders?.find((res)=>  res.idOrder === IdOrder)?.name;
    const lastnameUser =   is0Lenght ? data?.orders?.map((res)=>res.lastname) : data?.orders?.find((res)=> res.idOrder === IdOrder)?.lastname;
    const toPay =   is0Lenght ? data?.orders?.map((res)=>res.toPay) : data?.orders?.find((res)=>  res.idOrder === IdOrder )?.toPay;
    const products =   is0Lenght ? data?.orders?.map((res)=>res.products) : data?.orders?.find((res)=> res.idOrder === IdOrder)?.products ;
    const ostan =   is0Lenght ? data?.orders?.map((res)=>res.ostsan) : data?.orders?.find((res)=>  res.idOrder === IdOrder)?.ostsan;
    const city =   is0Lenght ? data?.orders?.map((res)=>res.city) : data?.orders?.find((res)=>  res.idOrder === IdOrder)?.city;
    const street =   is0Lenght ? data?.orders?.map((res)=>res.street) : data?.orders?.find((res)=>  res.idOrder === IdOrder)?.street;
    const numberpost = is0Lenght ? data?.orders?.map((res)=>res.numberpost) : data?.orders?.find((res)=>  res.idOrder === IdOrder)?.numberpost;
    const orderDate = is0Lenght ? data?.orders?.map((res)=>res.orderDate) : data?.orders?.find((res)=>  res.idOrder === IdOrder)?.orderDate;

    const [loading ,setLoading]=useState(false);

    useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1500);
    },[])

  if(loading ) return <div className=" py-[14rem] "><Spinner /></div> ;  
  return (
    <section className=" bgHeadr " >
        <TitelPages />
        
        <div className="contanerOrders px-[4rem] ">
            <div className=" flex justify-center items-center mt-[2rem] w-full h-[5rem] border-dashed border-[2px] border-[#7A9C59] "> 
              <h1 className=" text-[1.2rem] sm:text-[1.5rem] pb-[.5rem] font-semibold text-[#7A9C59] ">متشکریم، سفارش شما دریافت شد.</h1>
            </div>
            <div className=" hidden lg:flex px-[2rem] mt-[2rem]  flex-col ">
              <div className=" flex justify-center ">
                    <div className=" w-[25%] flex flex-col items-center border-l-[1px]  border-[#33333379] border-dashed  ">
                      <p className=" text-[#3333337b] ">شماره سفارش : </p>
                      <p className=" mt-[.3rem] font-semibold text-[1rem] ">{idOrders}</p>
                    </div>
                    <div className=" w-[25%] flex flex-col items-center border-l-[1px]  border-[#33333379] border-dashed  ">
                      <p className=" text-[#3333337b] "> تاریخ :</p>
                      <p className=" mt-[.3rem] text-[1rem] font-semibold ">{orderDate} </p>
                    </div>
                    <div className=" w-[25%] flex flex-col items-center border-l-[1px]  border-[#33333379] border-dashed  ">
                      <p className=" text-[#3333337b] ">شماره تلفن : </p>
                      <p className=" mt-[.3rem] text-[1.2rem] font-semibold ">{phoneUser}</p>
                    </div>
                    <div className=" w-[25%] flex flex-col items-center border-l-[1px]  border-[#33333379] border-dashed  ">
                      <p className=" text-[#3333337b] "> قیمت نهایی : </p>
                      <p className=" mt-[.3rem] text-[1rem] font-semibold ">{formatCurrencyToToman(Number(totalPrice))}</p>
                    </div> 
              </div>
              <div className=" text-center mt-[2rem] ">
                <h2 className=" text-[#3333337b]  ">روش پرداخت:</h2>
                <p className=" font-semibold text-[1.2rem] ">{toPay}</p>
              </div>
            </div>
            <div className=" flex  flex-col mt-[3rem] lg:hidden ">
                    <div className="  flex justify-between   border-b-[2px] pb-[1.2rem] mt-[1.2rem]  border-solid  ">
                      <p className=" text-[#3333336a] font-semibold ">شماره سفارش : </p>
                      <p className=" mt-[.3rem] font-semibold text-[1rem] text-[#f42777] ">#{idOrders}</p>
                    </div>
                    <div className="  flex  justify-between  border-b-[2px] pb-[1.2rem] mt-[1.2rem]   border-solid  ">
                      <p className=" text-[#3333336a] font-semibold "> تاریخ :</p>
                      <p className=" mt-[.3rem] text-[1rem] text-[#333] font-semibold ">{orderDate} </p>
                    </div>
                    <div className="  flex  justify-between  border-b-[2px] pb-[1.2rem] mt-[1.2rem]   border-solid  ">
                      <p className=" text-[#3333336a] font-semibold ">شماره تلفن : </p>
                      <p className=" mt-[.3rem] text-[1.2rem] font-semibold text-[#333] ">{phoneUser}</p>
                    </div>
                    <div className="  flex  justify-between  border-b-[2px] pb-[1.2rem] mt-[1.2rem]   border-solid  ">
                      <p className=" text-[#3333336a] font-semibold ">  روش پرداخت : </p>
                      <p className=" mt-[.3rem] text-[1rem] font-semibold text-[#333] ">{toPay}</p>
                    </div> 
                    <div className="  flex  justify-between  border-b-[2px] pb-[1.2rem] mt-[1.2rem]   border-solid  ">
                      <p className=" text-[#3333336a] font-semibold "> قیمت نهایی : </p>
                      <p className=" mt-[.3rem] text-[1rem] font-semibold text-[#f42777] ">{formatCurrencyToToman(Number(totalPrice))}</p>
                    </div> 
            </div>


            <div className=" mt-[4rem] ">
                  <h2 className=" mb-[2rem] font-semibold text-[1.4rem] ">مشخصات سفارش</h2>

                  <div className=" flex justify-between border-b-[2px] pb-[1rem] mb-[1rem] ">
                    <p className=" font-medium ">محصول</p>
                    <p className=" font-medium ">مجموع</p>
                  </div>
                  { Array.isArray(products) && products?.map((res:ProductType)=>{
                     const discountAmount = (res.price * res.discount) / 100;
                     const finalPrice = res.price - discountAmount;

                    return (
                      <div>
                        <div className=" flex justify-between border-b-[2px] pb-[1rem] mb-[1rem] ">
                            <p className=" font-medium  ">{res?.name} <span className=" text-[#33333359] "> × {res.quantity}</span> </p>
                            <p className=" font-medium text-[#f42777]  ">{formatCurrencyToToman(finalPrice)}</p>
                        </div>
                      </div>
                    )
                  })}
                  <div className=" flex justify-between border-b-[2px] pb-[1rem] mb-[1rem] ">
                    <p className=" font-medium "> حمل و نقل: </p>
                    <p className=" font-medium text-[#f42777]  ">{formatCurrencyToToman(Number(Postofprice))} <span className=" font-extralight text-[#333333a9] "> توسط {Postofname} </span> </p>
                  </div>
                  <div className=" flex justify-between border-b-[2px] pb-[1rem] mb-[1rem] ">
                    <p className=" font-medium "> روش پرداخت: </p>
                    <p className=" font-extralight ">{toPay}</p>
                  </div>
                  <div className=" flex justify-between border-b-[2px] pb-[1rem] mb-[1rem] ">
                    <p className=" text-[1.4rem] font-bold "> قیمت نهایی: </p>
                    <p className=" font-bold text-[#f42777] text-[1.4rem]  ">{formatCurrencyToToman(Number(totalPrice))}</p>
                  </div>

            </div>

            <div className=" mt-[3rem] lg:mt-[6rem] flex-col gap-[3rem] lg:flex-row flex lg:gap-[15rem] ">
                  <div>
                      <h2 className=" text-[1.4rem] font-bold ">آدرس خریدار</h2>
                      
                      <div className=" mt-[2rem] mb-[1rem] flex text-[#333] ">
                        <span className=" ml-[.5rem] text-[#3333338f]"> نام :</span> <span className=" font-semibold ">{nameUser}</span>
                      </div>
                      <div className="  mb-[1rem] flex text-[#333] ">
                        <span className=" ml-[.5rem] text-[#3333338f]">  نام خوانوادگی :</span> <span className=" font-semibold ">{lastnameUser}</span>
                      </div>
                      <div className=" flex   text-[#333]  ">
                          <span className=" text-[#3333338f] ml-[.5rem] ">شماره تلفن : </span> <span className=" font-semibold ">{phoneUser}</span>
                      </div>
                  </div>

                  <div>
                      <h2 className=" text-[1.4rem] font-bold "> آدرس حمل و نقل </h2>
                      
                      <div className=" mt-[2rem] mb-[1rem] flex  text-[#333] ">
                        <span className=" ml-[.5rem] text-[#3333338f]"> استان :</span> <span className=" font-semibold ">{ostan}</span>
                      </div>
                      <div className=" flex mb-[1rem]   text-[#333]  ">
                          <span className=" text-[#3333338f] ml-[.5rem] "> شهر  : </span> <span className=" font-semibold ">{city}</span>
                      </div>
                      <div className=" flex mb-[1rem] text-[#333]  ">
                          <span className=" text-[#3333338f] ml-[.5rem] "> ادرس دقیق  : </span> <span className=" font-semibold ">{street}</span>
                      </div>
                      <div className=" flex mb-[1rem] text-[#333]  ">
                          <span className=" text-[#3333338f] ml-[.5rem] ">  کد پستی  : </span> <span className=" font-semibold ">{numberpost}</span>
                      </div>
                  </div>
            </div>
        </div>
    </section>
  )
}
