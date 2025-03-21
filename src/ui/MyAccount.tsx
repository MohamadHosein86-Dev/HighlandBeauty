import { useLocation, useNavigate, useParams } from "react-router-dom";
import useGetOrdersUser from "../hooks/useGetOrdersUser";
import useLogout from "../hooks/useLogout";


export default function MyAccount() {

      const {data}=useGetOrdersUser();
      const {idOrder} = useParams();
      const {pathname}=useLocation();
      const navigate = useNavigate();
      const {logout}=useLogout();
      
      function handleLogout() {
            logout();
      }

      if(pathname === "/my-account" || pathname === "/my-account/orders" || pathname === "/my-account/favarit") return (
            <div className=" pl-[0] md:pl-[2rem] border-none md:border-l-[1px] flex pb-[3rem] flex-col basis-[35%] lg:basis-[25%]  ">
                  <h1 className=" pb-[.75rem] border-b-[1px] mb-[1rem] mt-[1rem] font-medium text-[1.2rem]  ">حساب کاربری من</h1>
                  <p onClick={()=>navigate("/my-account")}  className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem] ${pathname === "/my-account" ? "bg-[#3333331e] hover:bg-[#3333331e]" : " "}   rounded-[.4rem] `} >پیشخوان</p>
                  <p onClick={()=>navigate("/my-account/orders")} className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem] ${pathname === "/my-account/orders" ? "bg-[#3333331e] hover:bg-[#3333331e] " : pathname === `/my-account/view-order/${idOrder}` ? " bg-[#3333331e] hover:bg-[#3333331e] " : ""}   rounded-[.4rem] `} >سفارش ها</p>
                  <p onClick={()=>navigate("/my-account/favarit")} className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem] ${pathname === "/my-account/favarit" ? "bg-[#3333331e] hover:bg-[#3333331e]" : " "}   rounded-[.4rem] `} > علاقه مندی</p>
                  <p onClick={handleLogout} className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem]   rounded-[.4rem] `} > خروج </p>
            </div>
      )
      if(pathname === "/my-account/orders" || pathname === "/my-account/favarit" || pathname === "/my-account") return (
            <>
                  {data?.orders && data.orders.length !== 0 &&  
                        <div className=" pl-0 sm:pl-[2rem] border-none md:border-l-[1px] flex  flex-col basis-[25%]  ">
                              <h1 className=" pb-[.75rem] border-b-[1px] mb-[1rem] mt-[1rem] font-medium text-[1.2rem]  ">حساب کاربری من</h1>
                              <p onClick={()=>navigate("/my-account")}  className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem] ${pathname === "/my-account" ? "bg-[#3333331e] hover:bg-[#3333331e]" : " "}   rounded-[.4rem] `} >پیشخوان</p>
                              <p onClick={()=>navigate("/my-account/orders")} className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem] ${pathname === "/my-account/orders" ? "bg-[#3333331e] hover:bg-[#3333331e] " : pathname === `/my-account/view-order/${idOrder}` ? " bg-[#3333331e] hover:bg-[#3333331e] " : ""}   rounded-[.4rem] `} >سفارش ها</p>
                              <p onClick={()=>navigate("/my-account/favarit")} className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem] ${pathname === "/my-account/favarit" ? "bg-[#3333331e] hover:bg-[#3333331e]" : " "}   rounded-[.4rem] `} > علاقه مندی</p>
                              <p onClick={handleLogout} className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem]   rounded-[.4rem] `} > خروج </p>
                        </div>
                  }
            </>
      )
      if(pathname === `/my-account/view-order/${idOrder}`) return(
            <>
                  {data?.orders && data.orders.length !== 0 &&  <div className=" pl-0 sm:pl-[2rem] border-l-[0] md:border-l-[1px] flex pb-[-1rem] flex-col basis-[25%]  ">
                                          <h1 className=" pb-[.75rem] border-b-[1px] mb-[1rem] mt-[1rem] font-medium text-[1.2rem]  ">حساب کاربری من</h1>
                                          <p onClick={()=>navigate("/my-account")}  className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem] ${pathname === "/my-account" ? "bg-[#3333331e] hover:bg-[#3333331e]" : " "}   rounded-[.4rem] `} >پیشخوان</p>
                                          <p onClick={()=>navigate("/my-account/orders")} className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem] ${pathname === "/my-account/orders" ? "bg-[#3333331e] hover:bg-[#3333331e] " : pathname === `/my-account/view-order/${idOrder}` ? " bg-[#3333331e] hover:bg-[#3333331e] " : ""}   rounded-[.4rem] `} >سفارش ها</p>
                                          <p onClick={()=>navigate("/my-account/favarit")} className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem] ${pathname === "/my-account/favarit" ? "bg-[#3333331e] hover:bg-[#3333331e]" : " "}   rounded-[.4rem] `} > علاقه مندی</p>
                                          <p onClick={handleLogout} className={` cursor-pointer text-[#333] hover:bg-[#3333330c] px-[1rem] h-[2.8rem] pt-[.6rem] ${pathname === "" ? "bg-[#3333331e] hover:bg-[#3333331e]" : " "}   rounded-[.4rem] `} > خروج </p>
                  </div>}
            </>
      )
}
