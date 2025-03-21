import { useEffect, useState } from "react";
import TitelPages from "../ui/TitelPages";
import Spinner from "../ui/Spinner";

export default function AboutUsPage() {

        const [load,setload]=useState(false);
        useEffect(() => {
          setload(true)
          setTimeout(() => {
            setload(false);
          }, 150);
          window.scrollTo(0, 0);
        }, []);
    
  return (
    <section className=" h-full bg-[#ffff] ">
      <TitelPages />
            {load ? <Spinner /> : <div className=" flex-col lg:flex-row flex pt-[6rem] pb-[1rem] gap-[8rem] contaner  ">
               
                <div className=" flex justify-center  ">
                      <img
                        className=" max-w-[30rem]  lg:max-w-[23rem] rounded-t-[50%] overflow-hidden relative z-[10]"
                        src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/image-12.jpg"
                        alt=""
                      />
                </div>
               
                <div className="  lg:mt-[2rem] w-full  lg:px-[0] text-center lg:text-right mt-[-3rem] mx-auto " >
                    <h1 className=" text-[2rem] lg:text-[2.4rem]  font-bold  "> معرفی هایلند بیوتی </h1>
                    <p className=" mt-[1.6rem] font-normal mb-[.5rem] text-[#333] text-[1rem] lg:text-[1.2rem] "> به فروشگاه اینترنتی هایلند بیوتی خوش آمدی .</p>
                    <p className=" w-full lg:w-[90%] mt-[1.4rem] text-center lg:text-right text-[1rem] lg:text-[1.2rem] leading-[1.5] font-extralight ">هایلند بیوتی با تنوعی بالغ بر 20 هزار کالای آرایشی بهداشتی امکان انتخاب بهترین محصولات از مجموعه کاملی از برترین برندهای ایرانی و بین‌المللی فراهم آورده است و با ارائه تصویر و توضیحات تخصصی و دقیق درباره هر کالا، ثبت نظرات کاربران و امکان بازگشت کالا، انتخاب را برای مشتری آسان نموده است و روزانه محصولات در بسته‌بندی‌های جذاب و زیبا در زمان درخواست شده، برای مشتریان سراسر کشور ارسال می‌شود. ما در تمامی قدم‌های انتخاب درست کالا و خرید تا اطمینان از صحت کالای دریافت شده و کسب رضایت مشتری، در کنار شما هستیم و امور مشتریان ما همواره آماده پاسخگویی و رفع مشکلات همراهان خود است.</p>
                </div>
            </div>}
    </section>
  )
}
