import { Link, useNavigate } from "react-router-dom";
import useGetOrdersUser from "../hooks/useGetOrdersUser"

export default function Favarit() {

    const {data}=useGetOrdersUser();
    const navigate =useNavigate();  
    
    return (
          <div className={` mt-[2rem] flex justify-center pb-[1rem] sm:justify-normal flex-wrap gap-[2rem] ${data?.favarits && data?.favarits.length === 0 ? "w-[100%]" : " basis-[70%] "} `}>
                  { data?.favarits && data?.favarits.length === 0 || !data?.favarits ?
                  <div className="  flex justify-center w-full flex-col gap-[4rem] items-center ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" mt-[-3rem] text-[#33333320] size-[16rem] "><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg>
                      <h1 className="  mt-[-3rem] text-center font-bold text-[#333] text-[1.6rem] ">هیچ محصولی در صفحه علاقه مندی شما وجود ندارد.</h1>
                      <button onClick={()=>navigate("/")} className=" mt-[-2rem] h-[3rem] w-[10rem] pb-[.3rem] font-normal rounded-[2rem] bg-[#aa3a8e] text-white mx-auto  "> بازگشت به فروشگاه </button>
                  </div>
                   : data?.favarits?.map((res, index) => {
                                                        const discountAmount = (res.price * res.discount) / 100;
                                                        const finalPrice = res.price - discountAmount;
                      
                                                        return (
                                                          <div key={index}   className="rounded-lg sm:m-0 mx-auto flex flex-col justify-between mb-[1rem] shadow3 max-w-[20rem] bg-[#fff]" style={{ pointerEvents: "auto" }}>
                                                            <Link to={`/product/${res.id}`} className=" relative ">
                                                              
                                                                  <img className="object-cover rounded-lg w-[100%] pointer-events-none"   src={res.image}  alt={res.name}/>
                                                                  { res.discount > 0 && <div className=" text-[#fff] gap-[2px] font-semibold top-[.5rem] left-[11.5rem] flex justify-center items-center absolute w-[3rem] h-[2.5rem] bggPink rounded-[50%] ">
                                                                        <span className=" text-[.7rem] "> {res?.discount}% </span>  <span className="  font-medium  text-[1rem] mr-[-.1rem] ">-</span>
                                                                  </div>}
                                                            </Link>
                                                            <div className="bg-[#fff]  px-[1rem] flex flex-col justify-between rounded-lg">
                                                              <h4 className="text-center pointer-events-none pt-[.5rem]">{res.name}</h4>
                                                          
                                                                {  res.discount !== 0 ? 
                                                                  <div className=" flex flex-col gap-[.75rem] ">
                                                                      <h3 className="text-center font-extralight text-dec text-gray-300">{res.price} تومان</h3>
                                                                      <h3 className="text-[red] font-medium text-center pb-[1rem]">{finalPrice} تومان</h3>
                                                                  </div>
                                                                :  <h3 className="text-[red] font-medium text-center pt-[.75rem] pb-[1rem]">{finalPrice} تومان</h3>
                                                                }
                                                              
                                                            </div>
                                                          </div>
                                                        );
                  })}
          </div>
    )
}
