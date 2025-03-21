import { useState } from "react";
import TitelPages from "./TitelPages";
import Spinner from "./Spinner";
import useSignUp from "../hooks/useSignUp";
import useUser from "../hooks/useUser";
import AccountPage from "./AccountPage";
import useLogin from "../hooks/useLogin";
import MyAccount from "./MyAccount";
import { useLocation } from "react-router-dom";




export default function Account() {

      const {login}=useLogin();
      const {signUpAp}=useSignUp();
      const {authenticatd }=useUser();
      const{pathname}=useLocation();

      const [email , setemail]=useState("");
      const [name , setname]=useState("");
      const [password , setPas]=useState("");
      const [islog ,setIslog]=useState(false);
      const [load ,setLoad]=useState(false);

      const isFul = email && name && password ;
      const isFul2 = email && password ;

      function handlechangPage() {
        setLoad(true);
        setTimeout(()=>{
          setIslog((res)=>!res);
          setLoad(false);
        },300);
      }
      function handleSubmit(x:React.FormEvent<HTMLFormElement>) {
        x.preventDefault();
        if(!email && !password && !name) return null ;

        signUpAp({email ,password ,name},{onSettled:()=>{
            setemail("");
            setname("");
            setPas("");
        }});
      }
      function handleLogin(x:React.FormEvent<HTMLFormElement>) {
        x.preventDefault();
        login({email ,password});
        
      }
  

  return (
    <section>
      <TitelPages />
      {!authenticatd ? <div className=" pb-[1.5rem] pt-[2rem] contanerSighUp flex flex-col md:flex-row contaner ">
                              <div className=" pb-0 md:pb-[4rem] pt-0 md:pt-[3rem]  p-[0] md:pl-[3rem] ml-[0rem] border-[0]  md:border-l-[1px] basis-[50%] ">
                                  <h2  className=" mb-[2rem]  text-[2rem] ">{islog ?  "ثبت نام" : "ورود"}</h2>       
                                  {load ? <Spinner /> :
                                    !islog ?
                                        <form onSubmit={handleLogin}  className=" flex flex-col  ">
                                                  <label className=" pb-[.5rem] " htmlFor=""> ادرس ایمیل </label>
                                                  <input value={email} onChange={(x)=>setemail(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none pr-[1rem] mb-[1.5rem] " type="email" />

                                                  <label className=" pb-[.5rem] " htmlFor="">رمز عبور</label>
                                                  <input value={password} onChange={(x)=>setPas(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none pr-[1rem] mb-[1.5rem] " type="password" minLength={8} maxLength={8} />

                                                  <button className={`   transition ease-in delay-75 hover:bg-[#993480] mt-[2.5rem] ${isFul2 ?"bg-[#993480]" : " bg-[#33333335] "} text-white font-semibold rounded-[2rem] h-[2.8rem] pb-[.3rem]  `}> ورود </button>
                                        </form>
                                      :
                                        <form onSubmit={handleSubmit} className=" flex flex-col  ">
                                              <label className=" pb-[.5rem] " htmlFor=""> ادرس ایمیل </label>
                                              <input value={email} onChange={(x)=>setemail(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none pr-[1rem] mb-[1.5rem] " type="email" />

                                              <label className=" pb-[.5rem] " htmlFor="">نام کاربری</label>
                                              <input value={name} onChange={(x)=>setname(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none pr-[1rem] mb-[1.5rem] " type="name" />

                                              <label className=" pb-[.5rem] " htmlFor="">رمز عبور</label>
                                              <input value={password} onChange={(x)=>setPas(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none pr-[1rem] mb-[1.5rem] " type="password" minLength={8} maxLength={8} />

                                              <button className={` transition  ease-in delay-75  mt-[3rem] hover:bg-[#993480] ${isFul ?"bg-[#993480]" : " bg-[#33333335] "}  text-white font-semibold rounded-[2rem] h-[2.8rem] pb-[.3rem]  `}>ثبت نام</button>
                                        </form>
                                  }
                              </div> 
                              <div className=" pt-[3rem] basis-[50%] pr-0 md:pr-[4rem]  text-center ">
                                  <h1 className=" font-medium text-[1.4rem] ">ثبت نام</h1>
                                  <p className=" py-[1.2rem] w-[96%] text-[#33333394] ">
                                      ثبت نام در این قسمت به شما امکان می‌دهد تا به وضعیت سفارش و تاریخ سفارش خود دسترسی پیدا کنید. فقط چند قسمت ضروری را پر کنید و در کمترین زمان حساب جدیدی را برای شما ایجاد خواهیم کرد. ما فقط از شما اطلاعات اصلی را می‌خواهیم تا سریع‌تر و آسان‌تر روند خرید را انجام دهید.
                                  </p>
                                  <button onClick={handlechangPage} className=" hover:bg-[#3333331c] transition ease-in delay-75 w-[8rem] mt-[1rem] pt-[.2rem] h-[2.8rem] bg-[#993480] p-[.5rem] font-medium rounded-[3rem] ">{islog ?  "ورود" :  "ثبت نام" }</button>
                              </div>
                  </div>
                   : 
                  <div className={` bgHeadr  `}>
                        <div className={` ${pathname === "/my-account/orders" ? "lg:flex-row " : pathname === "/my-account/favarit" ? "xl:flex-row " : "md:flex-row " }  gap-[1rem] lg:gap-[2rem]  pt-[1.8rem] flex-col  contanerProudct2 flex `}> 
                          <MyAccount />
                          <AccountPage />
                        </div>
                  </div>
        }
    </section>
  )
}
