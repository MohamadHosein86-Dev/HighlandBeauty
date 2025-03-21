import { useEffect, useState } from "react";
import TitelPages from "./TitelPages";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

export default function Blog1() {

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
                    <h1 className=" mt-[4rem] font-semibold mb-[1.5rem] text-[1.4rem] lg:text-[1.8rem] text-[#333] "> نکات استفاده از روغن پوست</h1>
                    <p className=" mb-[1rem] text-[#3333333c] flex gap-[.3rem] ">  ارسال توسط  <span className=" text-[#3333333c] flex gap-[.3rem] "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-[#33333395] mb-[-.3rem]"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg> t.ux5.ir </span> </p>
                    <div className=" relative ">
                            <img className=" w-full  " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/image-9.jpg" alt="" />
                            <div className=" text-[#333] flex items-center pb-[2rem] flex-col absolute top-[1rem] right-[1rem] bg-[#ffff] w-[3.3rem] h-[3.3rem] ">
                                <p>16</p>
                                <p>خرداد</p>
                            </div>
                    </div>
                    <p className=" mt-[2rem] text-[#33333375] ">بهترین زمان برای استفاده از روغن های پوستی چه زمانی است؟ چه میزان روغن باید استفاده کنید؟ در کنار روغن های پوستی از چه محصولات دیگری می توان استفاده کرد؟ در اینجا چند نکته مهم را آورده ایم تا بیشترین فایده از مصرف روغن پوستی نصیبتان شود.</p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] ">1- روغن های پوستی را با سرم یا مرطوب کننده تان ترکیب کنید</p>
                    <p className=" mt-[1.5rem] text-[#33333375] ">روغن های پوستی اگر با محصولات دیگر ترکیب شوند، باعث افزایش تاثیر آن ها می شوند. بهترین روش برای استفاده از روغن ها این است که برای درمان خشکی پوست آن ها را با سرم ها ترکیب کنید و برای حفظ رطوبت، با <strong>مرطوب کننده</strong> ترکیب کنید.</p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] ">2- روغن مناسب پوستتان را بیابید</p>
                    <p className=" mt-[1.5rem] text-[#33333375] " >می توانید روغن ها را بعد از استفاده از سرم های پوستی استفاده کنید و در صورت نیاز، به جای استفاده از روغن در کل صورت، روغن را فقط در نواحی خشک بزنید. بسته به نوع پوستتان می توانید روغن ها را قبل از خواب بزنید تا پوست در طول شب روغن را جذب کند و در طول روز از پوست مراقبت به عمل آید. این نکته به خصوص برای روغن هایی که حساسیت پوست در برابر نور را افزایش می دهند و روغن های سنگین که ممکن است صورت را برق بیاندازند، ضروری است. اگر پوست خشکی دارید، می توانید از روغن ها قبل از آرایش به عنوان پرایمر استفاده کنید. اجازه دهید روغن کامل جذب پوست شود و سپس آرایش را شروع کنید تا پوست جلوه ای شاداب و طبیعی داشته باشد.</p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] ">3- روغن را با حرکات ضربه ای به پوست بزنید</p>
                    <p className=" mt-[1.5rem] text-[#33333375] ">روغن را نباید مانند مرطوب کننده روی سطح پوست مالش داد. بهتر است به جای مالش روغن که فقط آن را در سطح پوست جا به جا می کند، با حرکات ضربه ای روغن را روی پوست بزنید تا از طریق منافذ جذب پوست شود. این کار باعث می شود روغن بهتر جذب پوست شده و تاثیرات آن سریع تر نمایان شود.</p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] ">4- چند قطره روغن برای کل پوست کافی است</p>
                    <p className=" mt-[1.5rem] text-[#33333375] ">از آنجا که روغن های پوستی حاوی مقادیر زیادی مواد مغذی هستند، مقدار کمی از آن ها کافی است. یک تا سه قطره از روغن انتخابی تان برای پوشاندن کل صورت کافی است و تاثیرات و فواید لازم را به پوست می رساند.</p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] ">انتخاب روغن مناسب</p>
                    <p className=" mt-[1.5rem] text-[#33333375] ">نکته کلیدی هنگام استفاده از روغن های پوستی و برای تاثیرگذاری آنها، انتخاب روغن مناسب (یا ترکیب روغن های مناسب) است. در این جا چند تا از بهترین روغن ها را برای پوست های چرب، خشک، حساس و پوست افراد میانسال آورده ایم.</p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] ">پوست خشک یا کم آب</p>
                    <p className=" mt-[1.5rem] text-[#33333375] ">فرقی ندارد که دلیل خشکی پوستتان آب و هوا باشد و یا نوع پوستتان همیشه خشک بوده، روغن های پوستی می تواند تا حد زیادی به رفع خشکی پوست کمک کنند. روغن های پوستی که سریع جذب شوند و حاوی مواد مغذی باشند پوست را عمیقا آبرسانی کرده و آن را نرم و لطیف می کنند. برای پوست های کم آب بهتر است اول از یک سرم آبرسان استفاده کنید، سپس با استفاده از یک روغن مرطوب کننده، رطوبت ایجاد شده را حفظ کنید.</p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] ">پوست چرب یا مستعد آکنه</p>
                    <p className=" mt-[1.5rem] text-[#33333375] ">تلاش بیش از حد برای از بین بردن چربی پوست چرب در واقع باعث می شود که پوست چربی بیشتری تولید کند تا چربی از دست رفته را جبران کند و این دور باطل مدام تکرار می شود. برخی روغن ها می توانند تولید چربی پوست را متعادل کنند و چربی اضافی را از برده و منافذ بزرگ پوست را بهبود ببخشند. برخی از روغن ها سبوم اضافی پوست را از بین می برند  و منافذ پوست را از آلودگی و چربی پاک می کنند که باعث می شود این منافذ کوچک تر به نظر برسند. همچنین می توانید از یک پاک کننده آرایش بر پایه چربی برای پاک کردن آرایش، آلودگی ها و سلول های مرده سطح پوست استفاده کنید. از شوینده ای استفاده کنید که غیر جوش زا باشد و برای پوست های حساس تولید شده باشد.</p>
                    <p className=" mt-[1.5rem] font-bold text-[1.2rem] text-[#333] ">پوست حساس یا آسیب دیده</p>
                    <p className=" mt-[1.5rem] text-[#33333375] ">آنتی اکسیدان ها علاوه بر اینکه با رادیکال های آزاد محیطی مقابله می کنند، از پوست نیز محافظت کرده و با جلوگیری از تخریب سلولی که یکی از عوامل پیری پوست است، از بروز آسیب در آینده نیز جلوگیری می کنند. محصولاتی که حاوی ویتامین E هستند با مقابله با رادیکال های آزاد، از پوست محافظت کرده و آسیب های که نور خورشید به پوست می زند را کاهش می دهند. ( اما از ورود اشعه های ماورابنفش به پوست جلوگیری نمی کنند.) صبح ها پس از اینکه چند قطره از روغن پوستی را به پوست زدید، حتما از ضد آفتاب استفاده کنید. روغن های پوستی دارای خواص ضد التهاب و التیام بخش هستند که پوست را آرام کرده و قرمزی و التهاب آن را کاهش می دهد.</p>
                
                    <div className=" mt-[2rem]  border-t-[2px] flex justify-end border-b-[2px] h-[6rem] ">

                        <div onClick={()=>navigate("/blog2")} className=" flex items-center cursor-pointer gap-[1rem] ">
                            <div className=" flex flex-col ">
                                <p className=" text-sm text-[#33333355] ">بلاگ بعدی</p>
                                <p className=" text-sm text-[#333] font-bold hover:text-[#f42777] transition ease-in delay-75 ">فوم اصلا چیست ؟</p>
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
