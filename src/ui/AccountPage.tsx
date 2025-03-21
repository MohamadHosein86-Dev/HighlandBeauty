import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useUser from '../hooks/useUser';
import Orders from './Orders';
import PageOrder from './PageOrder';
import Favarit from './Favarit';
import useLogout from '../hooks/useLogout';

export default function AccountPage() {

    const {idOrder} = useParams();
    const {pathname}=useLocation();
    const { user }=useUser();
    const navigate =useNavigate();
    const {logout}=useLogout();

    function handleLogout() {
            logout();
    }


    
    if(pathname === "/my-account") return (
        <div className=" w-full md:w-[65%] pb-[2rem] lg:w-[75%]  ">
            <div>
                <h1 className=' text-[#3333339f] mt-[1.4rem] mb-[2rem] '>سلام  <strong>{user?.name}</strong> به سایت هایلند بیوتی خوش امدی . </h1>
                <div className=' grid-cols-1  md:grid-cols-2 grid gap-[.5rem] lg:gap-[2rem] '>
                    <div onClick={()=>navigate("/my-account/orders")} className='  transition ease-in delay-75 cursor-pointer rounded-sm hover:bg-[#33333312] flex justify-center items-center  shadow3 h-[9rem] border-[1px] '>
                            <div  className=' flex flex-col justify-center items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[4rem] transition ease-in delay-75 text-pink-500 text-[#3333333b] ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                                </svg>
                                <span className=' text-[#333] font-semibold '>  سفارش ها</span>
                            </div>
                    </div>
                    <div onClick={()=>navigate("/my-account")} className='  transition ease-in delay-75 cursor-pointer rounded-sm hover:bg-[#33333312] flex justify-center items-center   shadow3 h-[9rem] border-[1px] '>
                            <div  className=' flex flex-col justify-center items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[4rem] transition ease-in delay-75 text-pink-500 text-[#3333333b] ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <span className=' text-[#333] font-semibold '> پیشخوان  </span>
                            </div>
                    </div>
                    <div onClick={()=>navigate("/my-account/favarit")} className='  transition ease-in delay-75 cursor-pointer rounded-sm hover:bg-[#33333312] flex justify-center items-center   shadow3 h-[9rem] border-[1px] '>
                            <div  className=' flex flex-col justify-center items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[4rem] transition ease-in delay-75 text-pink-500 text-[#3333333b] ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                <span className=' text-[#333] font-semibold '> علاقه مندی  </span>
                            </div>
                    </div>
                    <div onClick={handleLogout} className='  transition ease-in delay-75 cursor-pointer rounded-sm hover:bg-[#33333312] flex justify-center items-center   shadow3 h-[9rem] border-[1px] '>
                            <div  className=' flex flex-col justify-center items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="size-[4rem] transition ease-in delay-75 text-pink-500 text-[#3333333b] ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                </svg>
                                <span className=' text-[#333] font-semibold '> خروج  </span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )

    if(pathname === "/my-account/orders") return <Orders /> ;
    
    if(pathname === `/my-account/view-order/${idOrder}`) return <PageOrder /> ;

    if(pathname === "/my-account/favarit") return <Favarit />

}
