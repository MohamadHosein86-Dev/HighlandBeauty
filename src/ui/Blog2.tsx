import { useEffect, useState } from "react";
import TitelPages from "./TitelPages";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

export default function Blog2() {
    const [load, setload]=useState(false);
      const navigate =useNavigate();

    useEffect(()=>{
        setload(true);
        setTimeout(() => {
            setload(false);
        }, 150);
        window.scrollTo(0 , 0);   
    },[]);

  return (
    <section className=" bg-[#ffff] ">
        <TitelPages blog={true} />
        {load ? <Spinner /> :<div className=" px-[1rem]  contanerProudct2 flex-col lg:flex-row flex gap-[1rem] pb-[4rem] ">
                <div className=" basis-[75%] "> 
                    <h1 className=" mt-[4rem] font-semibold mb-[1.5rem] text-[1.4rem] lg:text-[2rem] text-[#333] ">  
فوم اصلاح چیست؟  </h1>
                    <p className=" mb-[1rem] text-[#3333333c] flex gap-[.3rem] ">  ارسال توسط  <span className=" text-[#3333333c] flex gap-[.3rem] "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-[#33333395] mb-[-.3rem]"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg> t.ux5.ir </span> </p>
                    <div className=" relative ">
                            <img className=" w-full  " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/image-10.jpg" alt="" />
                            <div className=" text-[#333] flex items-center pb-[2rem] flex-col absolute top-[1rem] right-[1rem] bg-[#ffff] w-[3.3rem] h-[3.3rem] ">
                                <p>16</p>
                                <p>خرداد</p>
                            </div>
                    </div>
                    <p className=" mt-[2rem] text-[#33333375] ">اصلاح صورت به عنوان یکی از عملیات مهم در زیبایی‌شناسی، همواره برای اکثر افراد اهمیت داشته است. در گذشته، روش‌های سنتی اصلاح صورت مانند ریش تراش و ماشین اصلاح صورت، برای اصلاح خطوط و تراش‌های غیرمنظم صورت مورد استفاده بود. با پیشرفت فناوری و ظهور روش‌های جدید، فوم اصلاح صورت به عنوان یک روش مدرن و موثر برای اصلاح صورت به بازار عرضه شد.</p>
                    <p className=" mt-[1.5rem] text-[#33333375] ">ین روش با ترکیبات آن برای رطوبت‌دهی پوست و کاهش جوش‌های پوستی مفید است و با کمک تکنولوژی فوم، به راحتی صورت شما را اصلاح می‌کند. در این مطالعه ،    <strong> به بررسی مزایا و معایب فوم اصلاح صورت، نحوه استفاده و نحوه استفاده آن برای پوست حساس، مقایسه با روش‌های سنتی اصلاح صورت و نحوه کارکرد فوم اصلاح صورت پرداخته خواهد شد </strong>.</p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] ">فوم اصلاح چیست؟</p>
                    <p className=" mt-[1.5rem] text-[#33333375] ">فوم اصلاح، نوعی محصول اصلاح صورت است که به طور خاص برای کاهش تحریک پوست در هنگام اصلاح ساخته شده است. این محصول عمدتاً شامل موادی مانند پنتنول، گلیسرین و آلانتوئین است که به عنوان یک ترکیب پوستی مهار کننده عمل می‌کنند و به پوست کمک می‌کنند تا به شکل صحیحی اصلاح شود.</p>
                    <p className=" mt-[1.5rem] text-[#33333375] "> <p className=" mt-[1.5rem] text-[#33333375] ">فوم اصلاح، نوعی محصول اصلاح صورت است که به طور خاص برای کاهش تحریک پوست در هنگام اصلاح ساخته شده است. این محصول عمدتاً شامل موادی مانند پنتنول، گلیسرین و آلانتوئین است که به عنوان یک ترکیب پوستی مهار کننده عمل می‌کنند و به پوست کمک می‌کنند تا به شکل صحیحی اصلاح شود.</p></p>
                    <p className=" mt-[1.5rem] text-[#33333375] "> در کل، فوم اصلاح به عنوان یک روش موثر و آسان برای اصلاح صورت با کمترین تحریک پوست، در بازار محصولات آرایشی و بهداشتی به عنوان یک جایگزین عالی برای محصولات اصلاح صورت دیگر، مورد توجه و استفاده قرار گرفته است. </p>
              


                    <div onClick={()=>{navigate("/blog3")}} className=" mt-[2rem]  border-t-[2px] flex justify-end border-b-[2px] h-[6rem] ">

                        <div className=" flex items-center cursor-pointer gap-[1rem] ">
                            <div className=" flex flex-col ">
                                <p className=" text-sm text-[#33333355] ">بلاگ بعدی</p>
                                <p className=" text-sm text-[#333] font-bold hover:text-[#f42777] transition ease-in delay-75 ">  اهمیت استفاده از ضد آفتاب </p>
                            </div>
                            <div className=" w-[3rem] h-[3rem] flex justify-center items-center border-[1px] rounded-[2rem] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" transition ease-in delay-75 hover:text-[#33333368] size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" basis-[25%] lg:mt-[9rem] mt-[4rem]  ">
                    <h2 className=" mt-[1.5rem] font-bold text-[1.1rem] text-[#333] ">آخرین نوشته ها</h2>
                    <div className=" mt-[1.8rem] ">

                        <div onClick={()=>{navigate("/blog1")}} className=" cursor-pointer flex gap-[1rem] border-b-[1px] pb-[1.5rem] ">
                            <img className=" max-w-[4rem] " src="	https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/image-9.jpg" alt="" />
                            <div className="  ">
                                <p className=" hover:text-[#33333358] transition ease-in delay-75 text-[#333] font-semibold mb-[.5rem] ">نکات استفاده از روغن پوست</p>
                                <p className=" text-[#33333362] ">خرداد 16, 1403 بدون دیدگاه</p>
                            </div>
                        </div>
                        <div onClick={()=>navigate("/blog2")} className=" cursor-pointer flex gap-[1rem] mt-[1rem]  border-b-[1px] pb-[1.5rem] ">
                            <img className=" max-w-[4rem] " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/image-10.jpg" alt="" />
                            <div className="  ">
                                <p className=" hover:text-[#33333358] transition ease-in delay-75 text-[#333] font-semibold mb-[.5rem] ">فوم اصلاح چیست؟</p>
                                <p className=" text-[#33333362] ">خرداد 13, 1403 بدون دیدگاه</p>
                            </div>
                        </div>
                        <div onClick={()=>{navigate("/blog3")}} className=" cursor-pointer flex gap-[1rem] mt-[1rem]  pb-[1.5rem] ">
                            <img className=" max-w-[4rem] " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/blog2-R1.jpg" alt="" />
                            <div className="  ">
                                <p className=" hover:text-[#33333358] transition ease-in delay-75  text-[#333] font-semibold mb-[.5rem] "> اهمیت استفاده از ضد آفتاب</p>
                                <p className=" text-[#33333362] ">اردیبهشت 25, 1403 بدون دیدگاه</p>
                            </div>
                        </div>

                    </div>
                </div>
        </div>}
    </section>
  )
}
