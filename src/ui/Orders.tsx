import { useNavigate } from "react-router-dom";
import { formatCurrencyToToman } from "../helperfunction/functionHelper";
import useGetOrdersUser from "../hooks/useGetOrdersUser"

export default function Orders() {

  const {data}=useGetOrdersUser();
  
  const navigate = useNavigate();

  return (
      <section className={` bgHeadr ${data?.orders && data.orders.length === 0 ? "w-[100%]" : " w-full   lg:w-[75%] "}  `}>
          {data?.orders && data.orders.length === 0 || !data?.orders  ? <div>
              <div className=" mt-[-.5rem] flex justify-center ">
              <img className=" mx-auto w-[14rem] sm:w-[18rem] "  src="https://greenskinshop.com/images/68b7acd6.png" alt="" />
              </div>
              <div className=" flex flex-col justify-center gap-[1rem] mt-[1rem] ">
                <h2 className=" text-[#333] sm:text-[2rem] text-[1.4rem] font-bold text-center  ">هیج سفارشی برای شما ثبت نشده .   </h2>
                <button onClick={()=>navigate("/")} className=" mt-[1rem] h-[3rem] w-[10rem] pb-[.3rem] font-normal rounded-[2rem] bg-[#aa3a8e] text-white mx-auto  "> بازگشت به فروشگاه </button>
              </div>
            </div> : 
       
            <>

              <table className="  hidden md:table w-full text-right">
                    <thead className=" ">
                      <tr className="border-b-[2px] border-gray-300">
                        <th className="py-[15px] px-[10px] text-[rgb(51,51,51)] font-bold text-[1.1rem]">سفارش</th>
                        <th className="py-[15px] px-[10px] text-[rgb(51,51,51)] font-bold text-[1.1rem]">تاریخ</th>
                        <th className="py-[15px] px-[10px] text-[rgb(51,51,51)] font-bold text-[1.1rem]">وضعیت</th>
                        <th className="py-[15px] px-[10px] text-[rgb(51,51,51)] font-bold text-[1.1rem]">مبلغ کل</th>
                        <th className="py-[15px] text-left  px-[10px] text-[rgb(51,51,51)] font-bold text-[1.1rem]">عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.orders?.map((res) => (
                        <tr key={res.idOrder} className="border-b border-gray-200">
                          <td className="py-3 px-[10px] text-[#f42777]">#{res.idOrder}</td>
                          <td className="py-3 px-[10px] text-[#3333337b]">{res.orderDate}</td>
                          <td className="py-3 px-[10px] text-[#3333337b]">{res.statusOrder}</td>
                          <td className="py-3 px-[10px] flex gap-[.2rem] text-[#3333337b]">
                            <span className="font-semibold text-[#f42777] ml-1">
                              {formatCurrencyToToman(Number(res.totalPricePost))}
                            </span>
                           
                          </td>
                          <td className="py-3 pr-[2rem]">
                            <div className="flex w-full  justify-end h-full">
                              <button
                                onClick={() => navigate(`/my-account/view-order/${res.idOrder}`)}
                                className="w-[5rem] h-[2.2rem] rounded-[1.8rem] font-bold text-white text-[.9rem] bg-[#aa3a8e]"
                              >
                                نمایش
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
              </table>
              {data?.orders.map((res)=>(
                <div className="  pb-[2rem] border-solid border-b-[2px] flex flex-col mt-[2rem] gap-[1rem] md:hidden w-full ">
                      <div className=" flex justify-between ">
                        <p className=" font-semibold text-[#33333368] ">سفارش</p>
                        <p className=" text-[#f42777] ">#{res.idOrder}</p>
                      </div>
                      <div className=" flex justify-between ">
                        <p className=" font-semibold  text-[#33333368] ">تاریخ</p>
                        <p className=" font-extralight ">{res.orderDate}</p>
                      </div>
                      <div className=" flex justify-between ">
                        <p className=" font-semibold  text-[#33333368] ">وضعیت</p>
                        <p className=" font-extralight ">{res.statusOrder}</p>
                      </div>
                      <div className=" flex justify-between ">
                        <p className=" font-semibold  text-[#33333368] ">  کل مبلغ </p>
                        <p className=" font-medium text-[#f42777] ">{formatCurrencyToToman(Number(res.totalPricePost))}</p>
                      </div>
                      <div className=" flex justify-between ">
                          <p className=" font-semibold  text-[#33333368] ">عملیات</p>
                          <button
                                onClick={() => navigate(`/my-account/view-order/${res.idOrder}`)}
                                className="w-[4rem] h-[2.2rem] rounded-[1.8rem] font-bold text-white text-[.9rem] bg-[#aa3a8e]"
                              >
                                نمایش
                          </button>
                      </div>
                </div>
              ))}
             
            </>
          }
      </section>
  )
}