import { useEffect, useState } from "react";
import useGetProducts from "../hooks/useGetProducts";
import BoxHomepage from "../ui/BoxHomepage";
import { Link, useNavigate } from "react-router-dom";
import { formatCurrencyToToman } from "../helperfunction/functionHelper";


export default function Homepage() {
  
  const [transition ,setTransition]=useState(false);
  const {products = []}=useGetProducts();
  const navigate =useNavigate();

  const filteredProducts = products.filter((item) => item.discount !== 0);
  useEffect(()=>{
        const startTransition = setTimeout(()=>{
          setTransition(true);
        },50);
        window.scrollTo(0,0)
        return ()=> clearTimeout(startTransition);
  },[])

  return (
    <section className={`bgHeadr mt-[rem]  ${ transition ? "visable" :""} TransitionBox `}  >
      <div className=" contaner pt-[1.5rem] ">
         <div className=" flex flex-col ">
          

          <div className={`  flex-wrap lg:flex-nowrap   justify-center  flex mb-[.5rem] gap-[.5rem] w-[100%]`} >
              <div  className="flex-wrap md:flex-nowrap justify-center relative xl:basis-[43.9rem] md:justify-between basis-[60rem] flex items-center bgPink2 p-[1.2rem]  rounded-[1rem] ">
                    <div className=" z-[10] text-center basis-[20rem] md:mr-[1.5rem] mr-[0]  ">
                        <h3 className="  sm:text-[2rem]md:mb-[1.8rem] mb-[.8rem] md:text-[2.6rem] text-[2.4rem] font-bold  ">هایلنــــد بیوتــــی</h3>
                        <p className="  md:text-[1.2rem] font- text-[1.2rem] md:mb-[1.6rem] sm:mb-[1.2rem] mb-[.8rem] ">فروش انـــواع لوازم آرایشی و بهداشتی</p>
                        <button onClick={()=>navigate("/shop")} className=" h-[1.8rem] w-[4rem] pr-[.2rem] rounded-[.5rem] mx-auto bg-[#fff] flex  items-center justify-center ">
                              <p className=" text-sm font-semibold  ">خرید</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[14px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                              </svg>
                          </button>
                    </div>
                    <div className="relative flex mt-[-2rem] sm:mt-0 ">
                          <div className="z-[1] max-w-[20rem] sm:max-w-[24rem] mt-[18rem]">
                              <img className="w-full h-auto object-cover" src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/img-3.png" alt="" />
                          </div>
                          <img className="z-[1] w-[11rem] sm:w-[16rem] sm:top-[1.3rem] md:left-[2.5rem] absolute left-[3.5rem] sm:left-[4.5rem] top-[6.5rem]  h-auto object-cover" src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/img-1.png" />
                    </div>
              </div>
        
              <div className=" items-center w-[100%] lg:w-[38.3%]  flex flex-col gap-[.5rem] ">
                  <div  className={`  pr-[2.5rem]  lg:w-[100%]   w-[100%]  flex gap-[1.5rem] justify-between items-center bgPink2 p-[1.2rem] rounded-[1rem]`} >
                    <div>
                          <h3 className=" mb-[.3rem] text-[.9rem] sm:text-[1.1rem] text-[rgb(255, 77, 109)] font-semibold  ">محصولاتــــــ صورتــــــــ </h3>
                          <p className=" font- text-[.8rem] sm:text-[1rem] textred mb-[.6rem] ">راز داشتن پوســت لطیفــــ</p>
                          <button onClick={()=>navigate("/shop")} className=" h-[1.8rem] w-[4rem] pr-[.2rem] rounded-[.5rem] mx-auto bg-[#fff] flex  items-center justify-center ">
                              <p className=" text-sm font-normal  ">خرید</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[14px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                              </svg>
                          </button>
                    </div>
                    <div className=" max-w-[10rem] sm:max-w-[12rem]">
                        <img  src={"https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/img-10.png"} alt="" />
                    </div>
                  </div>
                  <div  className={` pr-[2.5rem] lg:w-[100%] w-[100%]  flex gap-[1.5rem] justify-between items-center bgPink2 p-[1.2rem] rounded-[1rem]`}>
                    <div>
                    <h3 className=" text-[.9rem] sm:text-[1.2rem] mb-[.3rem] text-[rgb(255, 77, 109)] font-semibold  "> محصولاتـــــــــــ مــــــــــو  </h3>
                    <p className="  font- text-[.8rem] sm:text-[1rem] textred mb-[.6rem] "> موهایی نرم و خوش حالت  </p>
                    <button onClick={()=>navigate("/shop")} className=" h-[1.8rem] w-[4rem] pr-[.2rem] rounded-[.5rem] mx-auto bg-[#fff] flex  items-center justify-center ">
                              <p className=" text-sm font-normal  ">خرید</p>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="  size-[14px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                              </svg>
                          </button>
                    </div>
                    <div className=" max-w-[10rem] sm:max-w-[12rem]">
                        <img  src={"https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/img-9.png"} alt="" />
                    </div>
                  </div>
              </div>      
          </div>
          
          <div className=" mt-[1rem] flex-col flex gap-[1rem] bg-[#ff6f6f] py-[1.5rem] px-[.5rem]  rounded-[1.5rem] ">
            <div className="  mx-auto pb-[1.5rem]  flex flex-col   ">
                  <h3 className=" font-medium text-[1.8rem] text-[#ffff] text-center">پیشنهاد شگفت انگیز</h3>
                  <img className=" max-w-[30rem]" src="https://de3193820.t.ux5.ir/files/de3193820/brizy/imgs/rtry-min-254x155x0x17x254x121x1726741606.png" alt="" />
                  <div className="  flex  gap-[1rem] justify-center ">
                      <div className="  flex flex-col text-sm font-medium justify-center items-center  px-[.5rem]  py-[.5rem] rounded-lg w-[20%] bg-[#ffff] ">
                        <div className="brz-countdown2__number">00</div>
                        <div className="brz-countdown2__label"><span className="brz-span brz-text__editor">روز</span></div>
                      </div>
                      <div className="  flex flex-col text-sm font-medium justify-center items-center px-[.5rem]  py-[.5rem] rounded-lg w-[20%] bg-[#ffff] ">
                        <div className="brz-countdown2__number">00</div>
                        <div className="brz-countdown2__label">
                          <span className="brz-span brz-text__editor">ساعت</span>
                        </div>
                      </div>
                      <div className="brz  flex flex-col text-sm font-medium justify-center items-center px-[.5rem]  py-[.5rem] rounded-lg w-[20%] bg-[#ffff] ">
                        <div className="brz-countdown2__number">00</div>
                        <div className="brz-countdown2__label">
                            <span className="brz-span brz-text__editor">دقیقه</span>
                        </div>
                      </div>
                      <div className="brz  flex flex-col text-sm font-medium justify-center items-center px-[.5rem]  py-[.5rem] rounded-lg w-[20%] bg-[#ffff] ">
                          <div className="brz-countdown2__number">00</div>
                          <div className="brz-countdown2__label">
                            <span className="brz-span brz-text__editor">ثانیه</span>
                          </div>
                      </div>
                  </div>
            </div>
             <div className="  ">
                    <div className=" flex flex-col  mx-auto">
                      <div className=" flex flex-wrap   gap-[.5rem] justify-center ">
                         {filteredProducts.map((res, index) => {
                                  const discountAmount = (res.price * res.discount) / 100;
                                  const finalPrice = res.price - discountAmount;
                        
                                  return (
                                    <div key={index}  className="rounded-lg w-[80%] sm2:max-w-[12.3rem] bg-[#fff] relative " >
                                      <Link to={`/product/${res.id}`}>
                                            <img className="object-cover rounded-lg w-full sm2:max-w-[12.3rem] pointer-events-none"   src={res.image}  alt={res.name}/>
                                              { res.discount > 0 && <div className=" text-[#fff] gap-[2px] font-semibold top-[.4rem] right-[.5rem] flex justify-center items-center absolute w-[2.8em] h-[2.5rem] bggPink rounded-[50%] ">
                                                        <span className=" text-[.7rem] "> {res?.discount}% </span>  <span className="  font-medium  text-[1rem] mr-[-.1rem] ">-</span>
                                              </div>}
                                      </Link>
                                      <div className="bg-[#fff] h-[8rem] px-[1rem] flex flex-col justify-between rounded-lg">
                                        <h4 className="text-center text-[1.2rem] sm2:text-[1rem] font-normal pointer-events-none pt-[.5rem]">{res.name}</h4>
                                        <div>
                                          <h3 className="text-center font text-[1.2rem] sm2:text-[1rem] text-dec text-gray-300">{formatCurrencyToToman(res.price)}</h3>
                                          <h3 className="text-[#f42777] text-[1.2rem] sm2:text-[1rem]   font- text-center pb-[1rem]">{formatCurrencyToToman(finalPrice)}</h3>
                                        </div>
                                      </div>
                                    </div>
                                  );
                          })}
                      </div>
                    </div>
             </div>
          </div>

          <div className=" pt-[3rem] flex-wrap lg:flex-nowrap pb-[1rem] flex md:gap-[1rem] gap-[1.5rem] ">
                <div className=" flex  px-[1rem] bgPink  rounded-[1.5rem] h-[11.5rem]  relative xl:w-[37%] w-[100%]  ">
                    <img className=" absolute md:left-[0rem] left-[1rem] top-[2.5rem] sm:top-[2.2rem] w-[50%] max-w-[10rem]  " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/img-6.png" alt="" />
                    <div className=" sm:basis-[12rem] basis-[7rem]  mt-[1.8rem]">
                      <p className=" sm:text-[1.6rem] text-[1.2rem] font-extralight mb-[.2rem] ">انواع</p>
                      <h3 className=" sm:text-[1.4rem] text-[1rem] font-medium " >محصولات بهداشتی</h3>
                      <button onClick={()=>{
                        setTimeout(() => {
                          navigate("/shop?product-category=بهداشتی");
                        }, 150);
                      }} className=" mt-[.8rem] w-[4rem] pr-[.2rem] rounded-[.5rem]  bg-[#fff] flex  items-center justify-center ">
                        <p className=" text-sm font-bold pb-[.3rem] ">خرید</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[14px]"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                      </button>
                    </div>
                </div>                
                <div className=" flex px-[1rem] bgPink2 rounded-[1.5rem] h-[11.5rem]  relative xl:w-[37%] w-[100%]  ">
                    <img className=" absolute md:left-[0] left-[1rem] top-[2rem] sm:top-[1.6rem] w-[60%] max-w-[11rem]  " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/img-4.png" alt="" />
                    <div className=" sm:basis-[12rem] basis-[7rem] mt-[1.8rem]">
                      <p className=" sm:text-[1.6rem] text-[1.2rem] font-extralight mb-[.2rem] ">انواع</p>
                      <h3 className=" sm:text-[1.4rem] text-[1rem] font-medium " >محصولات ارایشی</h3>
                      <button onClick={()=>{
                        setTimeout(() => {
                          navigate("/shop?product-category=آرایشی");
                        }, 150);
                      }} className=" mt-[.8rem] w-[4rem] pr-[.2rem] rounded-[.5rem]  bg-[#fff] flex  items-center justify-center ">
                        <p className=" text-sm font-bold pb-[.3rem] ">خرید</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[14px]"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                      </button>
                    </div>
                </div>
                <div className=" flex px-[1rem] bg-[#98e0f7] rounded-[1.5rem] h-[11.5rem]  relative xl:w-[37%] w-[100%]  ">
                    <img className=" absolute md:left-[0] left-[1rem] top-[2rem] sm:top-[1.6rem] w-[60%]  max-w-[11rem]  " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/img-5.png" alt="" />
                    <div className=" sm:basis-[12rem] basis-[5rem] mt-[1.8rem]">
                      <p className=" sm:text-[1.6rem] text-[1.2rem] font-extralight mb-[.2rem] ">انواع</p>
                      <h3 className=" sm:text-[1.4rem] text-[1rem] font-medium " >محصولات مو</h3>
                      <button onClick={()=>{
                        setTimeout(() => {
                          navigate("/shop?product-category=مو");
                        }, 150);
                      }} className=" mt-[.8rem] w-[4rem] pr-[.2rem] rounded-[.5rem]  bg-[#fff] flex  items-center justify-center ">
                        <p className=" text-sm font-bold pb-[.3rem] ">خرید</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[14px]"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                      </button>
                    </div>
                </div>
          </div>
         
          <div className=" flex flex-col gap-[2rem] mt-[2rem] ">
                <div className=" flex items-center gap-[.5rem]">
                  <div className=" pink1 shadow1 font-medium text-[#fff] rounded-lg bg-[#dc3545] w-[6rem] h-[2.5rem] flex justify-center items-center">Brands</div>
                  <h4 className=" text-xl font-bold pinkText ">برترین برند ها</h4>
                </div>
                <div className=" flex gap-[.5rem] flex-wrap justify-center xl:flex-nowrap ">
                  <div className=" flex items-center rounded-lg justify-center md:w-[9rem] sm:w-[11rem] w-[14rem] h-[3rem] border-[1px] shadow2 ">
                      <img className=" max-w-[7rem] " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/garnier-logo.png" alt="" />
                  </div>
                  <div className=" flex items-center rounded-lg justify-center md:w-[9rem] sm:w-[11rem] w-[14rem] h-[3rem] border-[1px] shadow2 ">
                      <img className=" max-w-[7rem] " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/deborah-logo.png" alt="" />
                  </div>
                  <div className=" flex items-center rounded-lg justify-center md:w-[9rem] sm:w-[11rem] w-[14rem] h-[3rem] border-[1px] shadow2 ">
                      <img className=" max-w-[7rem] " src="	https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/yves-roocher-logo.png" alt="" />
                  </div>
                  <div className=" flex items-center rounded-lg justify-center md:w-[9rem] sm:w-[11rem] w-[14rem] h-[3rem] border-[1px] shadow2 ">
                      <img className=" max-w-[7rem] " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/bourjois.png" alt="" />
                  </div>
                  <div className=" flex items-center rounded-lg justify-center md:w-[9rem] sm:w-[11rem] w-[14rem] h-[3rem] border-[1px] shadow2 ">
                      <img className=" max-w-[7rem] " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/essence.png" alt="" />
                  </div>
                  <div className=" flex items-center rounded-lg justify-center md:w-[9rem] sm:w-[11rem] w-[14rem] h-[3rem] border-[1px] shadow2 ">
                      <img className=" max-w-[7rem] " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/farmasi.png" alt="" />
                  </div>
                  <div className=" flex items-center rounded-lg justify-center md:w-[9rem] sm:w-[11rem] w-[14rem] h-[3rem] border-[1px] shadow2 ">
                      <img className=" max-w-[7rem] " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/inlay-logo.png" alt="" />
                  </div>
                  <div className=" flex items-center rounded-lg justify-center md:w-[9rem] sm:w-[11rem] w-[14rem] h-[3rem] border-[1px] shadow2 ">
                      <img className=" max-w-[7rem] " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/eternity.png" alt="" />
                  </div>
                </div>
          </div>

          <div className=" pt-[4rem] flex-wrap justify-center xl:flex-nowrap flex gap-[1.4rem]  ">
            <div className=" w-[100%]  pr-[3rem] pl-[2rem] justify-between flex items-center rounded-[1.4rem] h-[11rem]  bg-[#98e0f7] sm:px-[3rem] py-[1rem] xl:w-[50%] ">
              <div className=" flex   justify-center  basis-[45%] flex-col ">
                <h2 className=" text-[1.1rem] sm:text-[1.6rem] font-medium  mb-[.4rem] ">مام و دئودورانت </h2>
                <p className=" font-extralight text-[1rem] sm:text-[1.4rem] ">با رایحه های مختلف</p>
                <button onClick={()=>{
                        setTimeout(() => {
                          navigate("/shop?product-category=بهداشتی");
                        }, 150);
                      }} className=" mt-[.6rem] w-[4rem] pr-[.2rem] rounded-[.5rem]  bg-[#fff] flex  items-center justify-center ">
                        <p className=" text-sm font-bold pb-[.3rem] ">خرید</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[14px]"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                </button>
              </div>
              <div className=" relative">
                    <img className=" w-[8rem] h-[6rem]  sm:w-[12rem] sm:h-[9rem] " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/img-8.png" alt="" />
                    <div className=" bg1 mr-[3rem] mt-[-8rem] rounded-full w-[8rem] h-[8rem]  "></div>
              </div>
            </div>

            <div className=" sm:px-[3rem] w-[100%] items-center xl:w-[50%] justify-between flex rounded-[1.4rem] h-[11rem]  bg-[#fce1a6] pr-[3rem] pl-[2rem] py-[1rem]  ">
                <div className=" flex  justify-center  basis-[45%] flex-col ">
                    <h2 className="  text-[1rem] sm:text-[1.6rem] font-medium  mb-[.4rem] "> کرم های ضدافتاب </h2>
                    <p className=" text-[.9rem] sm:text-[1.4rem] font-normal sm:font-extralight ">با رایحه های مختلف</p>
                    <button onClick={()=>{
                        setTimeout(() => {
                          navigate("/shop?product-category=بهداشتی");
                        }, 150);
                      }} className=" mt-[.6rem] w-[4rem]  pr-[.2rem] rounded-[.5rem]  bg-[#fff] flex  items-center justify-center ">
                        <p className=" text-sm font-bold pb-[.3rem] ">خرید</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-[14px]"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                    </button>
                </div>
                 <div className=" relative">
                    <img className="  w-[8rem] h-[6rem]  sm:w-[12rem] sm:h-[9rem] " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/img-7.png" alt="" />
                    <div className=" bg1 mr-[3rem] mt-[-8rem] rounded-full w-[8rem] h-[8rem]  "></div>
                 </div>
            </div>
          </div>

          <div className=" flex flex-col gap-[2.5rem] mt-[4rem] ">
                <div className=" flex items-center gap-[.5rem]">
                    <div className=" pink1 shadow1 font-medium text-[#fff] rounded-lg bg-[#dc3545] w-[6rem] h-[2.5rem] flex justify-center items-center">Blog</div>
                    <h4 className=" text-xl font-bold pinkText ">جدید ترین مقالات</h4>
                </div>
                <div className=" flex gap-[1rem] flex-wrap justify-center  ">	
                      <div onClick={()=> navigate("/blog3") } className=" w-[100%] cursor-pointer sm:w-[23.2rem] shadow3 rounded-2xl p-[.6rem]">
                          <img className=" rounded-2xl  " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/blog2-R1.jpg" alt="" />
                          <div className="  mt-[.5rem] ">
                            <h2 className=" text-center font-medium text-[1.1rem] ">اهمیت استفاده از ضدافتاب</h2>
                            <p className=" pinkText text-center font-medium mt-[1.4rem] mb-[.9rem]">مطالعه بیشتر ….</p>
                          </div>
                      </div>
                      <div onClick={()=> navigate("/blog2") }  className=" w-[100%] sm:w-[23.2rem] cursor-pointer shadow3 rounded-2xl p-[.6rem]">
                          <img className=" rounded-2xl w-[100%]  " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/image-10.jpg" alt="" />
                          <div className="  mt-[.5rem] ">
                            <h2 className=" text-center font-medium text-[1.1rem] "> فوم اصلا چیست؟؟</h2>
                            <p className=" pinkText text-center font-medium mt-[1.4rem] mb-[.9rem]">مطالعه بیشتر ….</p>
                          </div>
                      </div>
                      <div onClick={()=> navigate("/blog1") }   className=" cursor-pointer w-[100%] sm:w-[23.2rem] shadow3 rounded-2xl p-[.6rem]">
                          <img className=" rounded-2xl w-[100%]  " src="https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/image-9.jpg" alt="" />
                          <div className="  mt-[.5rem] ">
                            <h2 className=" text-center font-medium text-[1.1rem] ">نکات استفاده از روغن</h2>
                            <p className=" pinkText text-center font-medium mt-[1.4rem] mb-[.9rem]">مطالعه بیشتر ….</p>
                          </div>
                      </div>
                </div>
          </div>

          <div className=" mt-[4rem] w-full flex-wrap xl:flex-nowrap gap-[.6rem] flex items-center justify-center ">
              <BoxHomepage image="		https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/ic.png" titel="گارانتی 4 گانه محصولات" discription="اصالت انقضا کالای سالم"  />
              <BoxHomepage image="		https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/ic-1.png" titel="20 روز ضمانت مرجوعی" discription="حتی سلیقه‌ای"  />
              <BoxHomepage image="		https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/ic-002.png" titel="مشاوره تخصصی رایگان" discription="هفت روز هفته تا ساعت 24"  />
              <BoxHomepage image="	https://de3193820.t.ux5.ir/themes-files/bz_sh_template05/ic-3.png" titel="پرداخت ایمن" discription="از طریق درگاه‌های معتبر"  />
          </div>
         

         </div>
      </div>
    </section>
  )
}
