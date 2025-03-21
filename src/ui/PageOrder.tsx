import { useParams } from "react-router-dom";
import { formatCurrencyToToman } from "../helperfunction/functionHelper";
import useGetOrdersUser from "../hooks/useGetOrdersUser";

export default function PageOrder() {
     const {data}=useGetOrdersUser();
     const {idOrder} = useParams();


    const totalPrice = data?.orders?.find((res)=> res.idOrder === Number(idOrder))?.totalPricePost;
    const Postofprice =  data?.orders?.find((res)=> res.idOrder === Number(idOrder))?.postOfPrice;
    const Postofname =  data?.orders?.find((res)=> res.idOrder === Number(idOrder))?.postOfname;
    const phoneUser =    data?.orders?.find((res)=> res.idOrder === Number(idOrder) )?.phone;
    const nameUser =    data?.orders?.find((res)=>  res.idOrder === Number(idOrder))?.name;
    const lastnameUser =  data?.orders?.find((res)=> res.idOrder === Number(idOrder))?.lastname;
    const toPay =   data?.orders?.find((res)=>  res.idOrder === Number(idOrder) )?.toPay;
    const products =  data?.orders?.find((res)=> res.idOrder === Number(idOrder))?.products;
    const ostan =  data?.orders?.find((res)=>  res.idOrder === Number(idOrder))?.ostsan;
    const city =    data?.orders?.find((res)=>  res.idOrder === Number(idOrder))?.city;
    const street =    data?.orders?.find((res)=>  res.idOrder === Number(idOrder))?.street;
  
  return (
    <section className=" basis-[75%] ">
            <div className=" mt-[2rem] md:mt-[4rem] ">
                              <h2 className=" mb-[2rem] font-semibold text-[1.4rem] text-[#333] ">مشخصات سفارش</h2>
            
                              <div className=" flex justify-between border-b-[2px] pb-[1rem] mb-[1rem] ">
                                <p className=" text-[#333] font-medium ">محصول</p>
                                <p className=" text-[#333] font-medium ">مجموع</p>
                              </div>
                              { Array.isArray(products) && products?.map((res)=>(
                                 <div className=" flex justify-between border-b-[2px] pb-[1rem] mb-[1rem] ">
                                      <p className=" font-medium  ">{res?.name} <span className=" text-[#33333359] "> × {res?.quantity}</span> </p>
                                      <p className=" font-medium text-[#f42777]  ">{formatCurrencyToToman(res?.price)}</p>
                                 </div>
                              ))}
                              <div className=" flex justify-between border-b-[2px] pb-[1rem] mb-[1rem] ">
                                <p className=" text-[#333] font-medium ">جمع جزء:</p>
                                <p className=" font-medium text-[#f42777]  ">{formatCurrencyToToman(Number(totalPrice))}</p>
                              </div>
                              <div className=" flex justify-between border-b-[2px] pb-[1rem] mb-[1rem] ">
                                <p className=" text-[#333] font-medium "> حمل و نقل: </p>
                                <p className=" font-medium text-[#f42777]  ">{formatCurrencyToToman(Number(Postofprice))} <span className=" font-extralight text-[#333333a9] "> توسط {Postofname} </span> </p>
                              </div>
                              <div className=" flex justify-between border-b-[2px] pb-[1rem] mb-[1rem] ">
                                <p className=" text-[#333] font-medium "> روش پرداخت: </p>
                                <p className=" font-extralight ">{toPay}</p>
                              </div>
                              <div className=" flex justify-between border-b-[2px] pb-[1rem] mb-[1rem] ">
                                <p className="  text-[#333] text-[1.4rem] font-bold "> قیمت نهایی: </p>
                                <p className=" font-bold text-[#f42777] text-[1.4rem]  ">{formatCurrencyToToman(Number(totalPrice))}</p>
                              </div>
            
                        </div>
            
                        <div className=" mt-[4rem] md:mt-[6rem] flex gap-[2rem] md:flex-row md:gap-[15rem] flex-col ">
                              <div>
                                  <h2 className=" text-[1.3rem] md:text-[1.4rem] font-bold ">آدرس خریدار</h2>
                                  
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
                                  <h2 className=" text-[1.3rem] md:text-[1.4rem] font-bold "> آدرس حمل و نقل </h2>
                                  
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
                                      <span className=" text-[#3333338f] ml-[.5rem] ">  کد پستی  : </span> <span className=" font-semibold ">{street}</span>
                                  </div>
                              </div>
                        </div>        
    </section>
  )
}
