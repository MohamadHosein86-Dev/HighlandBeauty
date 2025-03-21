import { useEffect, useState } from "react";
import TitelPages from "./TitelPages";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

export default function Blog3() {
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
                    اهمیت استفاده از ضد آفتاب </h1>
                    <p className=" mb-[1rem] text-[#3333333c] flex gap-[.3rem] ">  ارسال توسط  <span className=" text-[#3333333c] flex gap-[.3rem] "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-[#33333395] mb-[-.3rem]"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg> t.ux5.ir </span> </p>
                    <div className=" relative ">
                            <img className=" w-full  " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/blog2-R1.jpg" alt="" />
                            <div className=" text-[#333] flex items-center pb-[2rem] flex-col absolute top-[1rem] right-[1rem] bg-[#ffff] w-[3.3rem] h-[3.3rem] ">
                                <p>16</p>
                                <p>خرداد</p>
                            </div>
                    </div>
                    <p className=" mt-[2rem] text-[#33333375] "> داشتن پوستی سالم و جوان نیازمند مراقبت بوده و برای انجام اینکار باید وقت کافی داشته باشید. برای مراقبت از پوست صورت خود می‌توانید از روش‌ها و محصولات مختلفی که مناسب نوع پوست شما هستند استفاده کنید. پوست صورت به دلیل ظرافت و حساسیتی که دارد بیشتر مورد آسیب قرار گرفته و عوامل مختلفی موجب بروز بیماری‌های پوستی می‌شوند. </p>
                    <p className=" mt-[2rem] text-[#33333375] "> یکی از این عوامل مخرب پوست، تابش مستقیم نور خورشید روی پوست می‌باشد. در تمامی فصول سال نور خوشید می‌تواند آسیب‌های جدی به پوست رسانده و باعث بیماری‌های پوستی شود ولی این آسیب‌ها در تابستان چند برابر شده و افراد باید در این فصل بیشتر مراقب پوست خود باشند. </p>
                    <p className=" mt-[2rem] text-[#33333375] "> از جمله محصولات مراقبتی پوست، کرم ضد آفتاب می‌باشد که باید همه‌ی افراد در تمامی روزهای سال هنگام بیرون رفتن از منزل از آن استفاده کنند. تاثیری که آن بر روی جوانی و سالم ماندن پوست می‌گذارد انکار ناپذیر است پس به همین دلیل اگر می‌خواهید پوستتان جوان بماند استفاده از این کرم را فراموش نکنید. </p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] "> چرا باید از ضد آفتاب استفاده کرد؟  </p>
                    <p className=" mt-[2rem] text-[#33333375] "> ضدآفتاب نوعی کرم و محصول مراقبت از پوست می‌باشد که برای جلوگیری از اشعه‌های مضر خورشید کاربرد دارد. استفاده از این کرم مراقبتی در روزهای آفتابی مخصوصاً در فصل تابستان که شدت نور خورشید بیشتر می‌شود ضروری است. نور خورشید دارای اشعه‌ی فرابنفش بوده که این اشعه‌ها در هنگام برخورد مستقیم با پوست سبب ایجاد جوش و آکنه، کک و مک، چین و چروک، پیری پوست و … می‌شود. برای اینکه از پوست خود در مقابل این آسیب‌ها جلوگیری کنید استفاده از ضدآفتاب مخصوص نوع پوست خود را فراموش نکنید.</p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] "> فواید استفاده از ضد آفتاب </p>
                    <p className=" mt-[2rem] text-[#33333375] "> ضد آفتاب از جمله کرم‌های مراقبتی است که برای پوست فواید بسیاری دارد. استفاده از یک ضد آفتاب خوب و مناسب پوست، از ضررهای ناشی از تابش نور خورشید پیشگیری کرده و می‌تواند از پیری پوست زود رس نیز جلوگیری کند. در اینجا برخی از مهم‌ترین فواید این کرم  را بررسی می‌کنیم. </p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] "> مقابله با  اشعه‌های نور خورشید </p>
                    <p className=" mt-[2rem] text-[#33333375] "> با تضعیف شدن لایه‌ی اوزون و ورود اشعه‌های خطرناک نور خورشید به زمین، آسیب‌های ناشی از این اشعه‌ها نیز بیشتر شده و باید به فکر مقابله با این مشکل باشیم. این اشعه‌ها اگر مدت زمان طولانی به پوست برخورد کنند، موجب بروز آسیب‌های جدی و جبران ناپذیری به پوست خواهند شد. تنها راه مقابله با این مشکل استفاده از ضد آفتاب می‌باشد. </p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] "> کاهش خطر ابتلا به سرطان پوست  </p>
                    <p className=" mt-[2rem] text-[#33333375] "> یکی از مهم‌ترین فواید ضد آفتاب و دلیل مهم استفاده از آن، پیشگیری از سرطان پوست می‌باشد. اشعه‌ی فرابنفش خورشید از آنچه که شما فکر می‌کنید خطرناکتر بوده و به مرور زمان با استفاده نکردن از آن، ممکن است دچار بیماری سرطان پوست شوید. پس اگر به سلامتی خود اهمیت می‌دهید حتماً در طول روز از ضد آفتاب مخصوص پوست خود استفاده کنید. </p>

                    <div onClick={()=>{navigate("/blog1")}} className=" mt-[2rem]  border-t-[2px] flex justify-end border-b-[2px] h-[6rem] ">
                        <div className=" flex items-center cursor-pointer gap-[1rem] ">
                            <div className=" flex flex-col ">
                                <p className=" text-sm text-[#33333355] ">بلاگ بعدی</p>
                                <p className=" text-sm text-[#333] font-bold hover:text-[#f42777] transition ease-in delay-75 "> نکات استفاده از روغن پوست </p>
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
