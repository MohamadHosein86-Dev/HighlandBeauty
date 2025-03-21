import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts"
import { formatCurrencyToToman } from "../helperfunction/functionHelper";
import { useEffect, useState } from "react";
import TitelPages from "../ui/TitelPages";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";



export default function ShopPage() {

  const navigate = useNavigate();
  const { products   ,data ,isLoading }=useGetProducts();

  const [searchParams , setSearchParams  ]=useSearchParams();
  const category = searchParams.get("product-category") || "";
  const orderby = searchParams.get("orderby") || "";

  const [showBox1 ,setShowBox1 ] =useState(false);
  const [showBox3 ,setShowBox3 ] =useState(false);

  const [textFilter ,setTextFilter ] = useState("");
  const [selected, setSelected] = useState<number|null>(null);
  
  const [loadForm,setloadForm]=useState(false);

  function updateParams  (key:string, value:string | number) {
    searchParams.set(key, String(value));
    setSearchParams(searchParams);
  };

  function handleSubmit(x:React.FormEvent<HTMLFormElement>) {
        x.preventDefault();
        setloadForm(true);
        
        if(textFilter !== "") updateParams("product-category",textFilter);
        setloadForm(false);
        setTimeout(() => {
      }, 300);
    
  }

  function handleFilterCatgpry(key:string, value:string | number) {
    
    setloadForm(true);
        
      setTimeout(() => {
        updateParams(key ,value);
        setloadForm(false);
      }, 300);
  }

  function handleDeletFilter() {
    if(!category){
      toast.error("شما هنوز فیلتری اعمال نکردید.")
    }
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("product-category");
    setloadForm(true);
    setTimeout(() => {
      setSearchParams(newParams);
      setloadForm(false);
    }, 300);
  }


  const [load,setload]=useState(false);
  useEffect(() => {
    setload(true)
    setTimeout(() => {
      setload(false);
    }, 150);
    window.scrollTo(0, 0);
  }, []);


 return (
  <section className=" bg-[#ffff] ">
     {load || isLoading ? <div className=" mt-[13rem] "> <Spinner /> </div>: <>
        <TitelPages shop={true} />
            {
              products?.length === 0  
                ?  <div className=" flex flex-col py-[4rem] ">
                      <img className=" mx-auto w-[14rem]  " src="https://greenskinshop.com/images/68b7acd6.png" alt="" />
                      <h1  className=" text-[#333] text-center  text-[1.6rem] font-bold ">متسفانه هیچ محصولی وجود ندارد!</h1>
                      <button onClick={()=>navigate("/")} className=" mt-[2rem] h-[3rem] w-[10rem] pb-[.3rem] font-normal rounded-[2rem] bg-[#aa3a8e] text-white mx-auto  "> بازگشت به فروشگاه </button>

                   </div>
                :  
                
                <div className="  contanerProudct ">
                  <div className="  pt-[1rem] ">
                      <div>
                          <div className=" flex mt-[2rem]  ">
                              <div className=" mb-[2rem] hidden xl:block  ml-[1rem] pb-[1rem]  border-b-[1px] basis-[22%] ">
                                  <h2 className=" font-semibold mb-[.8rem] ">دسته بندی محصولات</h2>
                                  <p onClick={(x)=>handleFilterCatgpry("product-category",(x.target as HTMLElement).innerText)} className={`text-[#777777c2] cursor-pointer hover:text-[#333333d8]  ${category === "مو"  && "text-[black] font-semibold "} font-extralight mb-[.7rem]`}>مو</p>
                                  <p onClick={(x)=>handleFilterCatgpry("product-category",(x.target as HTMLElement).innerText)} className={`text-[#777777c2] cursor-pointer  hover:text-[#333333d8]  ${category === "آرایشی"  && "text-[black] font-semibold "} font-extralight mb-[.7rem]`}>آرایشی</p>
                                  <p onClick={(x)=>handleFilterCatgpry("product-category",(x.target as HTMLElement).innerText)} className={`text-[#777777c2] cursor-pointer   hover:text-[#333333d8] ${category === "بهداشتی"  && "text-[black] hover:text-[#333] font-semibold "}  font-extralight mb-[.7rem]`}>بهداشتی</p>
                              </div>


                              <div className=" basis-[100%] xl:basis-[75%] ">
                                  <div className="  h-[3.4rem] relative border-b-[1px] pb-[6.5rem] md:w-full md:pb-[3.7rem] flex  gap-[1.5rem] md:flex-row justify-between ">
                                      <div className="  flex justify-between  ">
                                            <div className=" flex gap-[.5rem] ">
                                              <Link to={"/"}> <p className=" text-[#7777] hover:text-[black] transition-all ease-in delay-75 " >خانه</p> </Link>
                                              <span className=" text-[#7777] " >/</span>
                                              <p className=" text-[black] ">{category ? category : "فروشگاه"}</p>
                                            </div>
                                      </div>

                                      <div className=" block md:hidden absolute  top-[2.7rem] border-b-[1px] w-full "></div>
                                      
                                      <div className=" basis-[10.1rem] md:basis-[31rem] flex-col md:flex-row flex gap-[2.1rem] md:gap-[9.5rem] ">
                                          <div className=" flex mr-[1.4rem] md:mr-[.5rem] ">
                                                <h2>نمایش : </h2>
                                            
                                                <div className="text-[#7777] mr-[.5rem] flex gap-[.5rem]">
                                                        <div onClick={() => {
                                                            setloadForm(true);
                                                            setTimeout(()=>{
                                                              updateParams("per-page",4);setSelected(4);
                                                              setloadForm(false);
                                                            },300)
                                                        } } className={` ${selected === 4 ? "text-[black]" : ""} hover:text-[black] cursor-pointer transition-all ease-in delay-75 `}>4</div>
                                                        <span>/</span>
                                                        <div onClick={() => {
                                                            setloadForm(true);
                                                            setTimeout(()=>{
                                                              updateParams("per-page",8);setSelected(8);
                                                              setloadForm(false);
                                                            },300)
                                                        } } className={` ${selected === 8 ? "text-[black]" : ""} hover:text-[black] cursor-pointer transition-all ease-in delay-75 `}>8</div>
                                                        <span>/</span>
                                                        <div onClick={() => {
                                                            setloadForm(true);
                                                            setTimeout(()=>{
                                                              updateParams("per-page",12);setSelected(12);
                                                              setloadForm(false);
                                                            },300)
                                                        }  } className={` ${selected === 12 ? "text-[black]" : ""} hover:text-[black] cursor-pointer transition-all ease-in delay-75 `}>12</div>
                                                </div>

                                          </div>
                                          { <div onClick={handleDeletFilter} className=" flex md:hidden cursor-pointer top-[3.5rem] right-[.5rem] absolute  items-center gap-[.5rem] ">  <span className=" text-[#333] text-sm font-semibold "> حذف فیلتر ها </span> <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" cursor-pointer hover:text-[#333333bc] size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg></span>  </div>}
                                          <div className="  basis-[12.4rem] relative w-full ">
                                                <h2 onClick={() => { setShowBox3((prev) => !prev); setShowBox1(false); }} className=" hidden md:block cursor-pointer pb-[.4rem] border-none md:border-solid md:border-b-[1px] ">{orderby ? orderby === "price-asc" ? " گران ترین  "  : orderby ===  "menu-order" ? "پیش فرض"   : orderby === "price-desc" && "ارزان ترین"  :  "مرتب سازی پیش فرض" }</h2>
                                                <svg onClick={() => { setShowBox3((prev) => !prev); setShowBox1(false); }} xmlns="http://www.w3.org/2000/svg" className="size-6 font-bold cursor-pointer mr-auto block md:hidden  " fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                                </svg>

                                                <div className={` text-[#777777ee]  bg-[#fff] w-[100%]   md:w-[100%] border-[1px]  z-[10000] top-[1.8rem] right-[0rem]  ${!showBox3 && " hidden "} absolute `}>
                                                      <p  onClick={()=> { setShowBox3(false); updateParams("orderby","menu-order")} } className="  text-right  cursor-pointer transition ease-in delay-75 hover:bg-[#77777714] py-[.6rem] px-[.8rem] " >پیش فرض </p>
                                                      <p  onClick={()=>{ setShowBox3(false);  updateParams("orderby","price-asc")} } className="   text-right cursor-pointer transition ease-in delay-75 hover:bg-[#77777714] py-[.6rem] px-[.8rem] " >گران ترین</p>
                                                      <p  onClick={()=> { setShowBox3(false); updateParams("orderby","price-desc")} } className="  text-right  cursor-pointer transition ease-in delay-75 hover:bg-[#77777714] py-[.6rem] px-[.8rem] " >ارزان ترین</p>
                                                </div>
                                          </div>
                                      </div>
                                </div>



                                  <form onSubmit={handleSubmit} className=" relative z-[100] pb-[2rem] md:pb-[3.5rem] border-b-[1px] flex-col md:flex-row flex gap-[.5rem] mt-[1.7rem] ">
                                        {orderby ? <></> : category  && <div onClick={handleDeletFilter} className=" hidden md:flex cursor-pointer top-[3.5rem] right-[.5rem] absolute  items-center gap-[.5rem] ">  <span className=" text-[#333] text-sm font-semibold "> حذف فیلتر ها </span> <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" cursor-pointer hover:text-[#333333bc] size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg></span>  </div>}
                                        <div className=" basis-[90%] flex gap-[.5rem] ">
                                              <div onClick={() => { setShowBox1((prev) => !prev); setShowBox3(false); }} className={` h-[2.5rem]  relative cursor-pointer px-[.8rem] flex justify-between items-center w-[100%] border-[1px] border-[#33333322] rounded-[.4rem] `}>
                                                    <p className=" text-[.8rem] text-[#333] font-bold ">فیلتر دسته بندی</p>
                                                    <div className=" gap-[1rem] flex items-center">
                                                        <p className=" text-[.8rem] text-[#333] font-semibold ">
                                                          {textFilter}  
                                                        </p>
                                                        <p>
                                                          <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-[#777777d1] size-4">
                                                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                          </svg>
                                                        </p>
                                                    </div>
                                                    <div className={` ${!showBox1 && " pointer-events-none " } text-[#777777ee] bg-[#fff]  w-[100%] border-[1px]  z-[100] top-[2.4rem] right-[0rem] TransitionBox2 ${!showBox1 && " opacity-0 z-[10000]  "} absolute `}>
                                                      <p onClick={(x)=> setTextFilter((x.target as HTMLElement).innerText ) } className=" transition ease-in delay-75 hover:bg-[#77777714] py-[.6rem] px-[.8rem] " >آرایشی</p>
                                                      <p onClick={(x)=>  setTextFilter((x.target as HTMLElement).innerText )} className=" transition ease-in delay-75 hover:bg-[#77777714] py-[.6rem] px-[.8rem] " >بهداشتی</p>
                                                      <p onClick={(x)=> setTextFilter((x.target as HTMLElement).innerText )} className=" transition ease-in delay-75 hover:bg-[#77777714] py-[.6rem] px-[.8rem] " >مو</p>
                                                    </div>
                                              </div>
                                              
                                        </div>
                                        <button type="submit"   className=" mt-[1rem] md:mt-[0rem] bg-[#aa3a8e] rounded-[4rem] py-[.5rem] text-[#fff] w-[8rem] md:basis-[10%] ">فیلتر</button>
                                  </form>
                              </div>
                          </div>
                          <div className=" flex gap-[1rem] ">
                                <div className=" w-[23%]  hidden xl:block  ">             
                                    <div className=" mt-[1.4rem] ">
                                        <h2 className=" mb-[1.2rem] ">محصولات</h2>
                                        <div className=" flex gap-[1rem] flex-col">
                                          {data?.map((res)=>{
                                            const discountAmount = (res.price * res.discount) / 100;
                                            const finalPrice = res.price - discountAmount;
                                            return(
                                              <div onClick={()=>navigate(`/product/${res.id}`)} className="  cursor-pointer flex items-center border-b-[1px] pb-[1.2rem]  ">
                                                  <div className="  flex gap-[.5rem]  ">
                                                      <img className=" w-[20%] " src={res.image} alt="" />
                                                      <div className=" flex iet flex-col">
                                                          <h2 className="  hover:text-[#3333336f] transition ease-in delay-75 text-sm font-medium ">{res.name}</h2>
                                                          {res.discount !== 0 ?  
                                                          <div className=" flex  gap-[.5rem] mt-[.2rem] mr-[2.5rem] ">
                                                            <span className="  font-extralight  text-[#777777f4] text-dec ">{formatCurrencyToToman(res.price)} </span>
                                                            <span className="  text-[rgb(244,39,119)] ">{formatCurrencyToToman(finalPrice)}</span>
                                                          </div> 
                                                            :  
                                                          <p className=" mt-[.2rem]  mr-[8rem] font-medium text-[rgb(244,39,119)]   ">{formatCurrencyToToman(res.price)}</p>}
                                                      </div>
                                                  </div>
                                                  
                                              </div>
                                            )
                                          })}   
                                        </div>
                                    </div>
                                </div>
                                {loadForm ? <div className=" mb-[3rem] w-full h-full flex justify-center items-center ">
                                  <Spinner />
                                </div> :<div className=" pt-[1.8rem] sm:pb-[2rem] h-[100%] lg:justify-normal justify-center flex gap-[2rem] xl:ml-[2rem] ml-[0] flex-wrap w-full  xl:w-[77%]   ">
                                  {products?.map((res, index) => {
                                      const discountAmount = (res.price * res.discount) / 100;
                                      const finalPrice = res.price - discountAmount;

                                      return (
                                        <div key={index}   className="rounded-lg curs flex flex-col justify-between mb-[1rem] mx-auto sm:m-0  shadow3 w-[90%] sm2:w-[75%] sm:max-w-[15.4rem] bg-[#fff]" style={{ pointerEvents: "auto" }}>
                                          <Link to={`/product/${res.id}`} >
                                            
                                               <div className=" relative ">
                                                    <img className="object-cover rounded-lg w-full h-full pointer-events-none"   src={res.image}  alt={res.name}/>
                                                    { res.discount > 0 && 
                                                    <div className=" text-[#fff] gap-[2px] font-semibold top-[.5rem] right-[1rem] flex justify-center items-center absolute w-[3rem] h-[2.5rem] bggPink rounded-[50%] ">
                                                          <span className=" text-[.7rem] "> {res?.discount}% </span>  <span className="  font-medium  text-[1rem] mr-[-.1rem] ">-</span>
                                                    </div>
                                                    }
                                               </div>
                                          </Link>
                                          <div className="bg-[#fff]  px-[1rem] flex flex-col justify-between rounded-lg">
                                            <h4 className="text-center  font-bold sm:font-semibold text-[#333] pointer-events-none mb-[1.5rem] pt-[.5rem]">{res.name}</h4>
                                        
                                              {  res.discount !== 0 ? 
                                                <div className=" flex flex-col justify-center gap-[.5rem]  ">
                                                    <h3 className="text-center font-extralight text-dec text-gray-300">{res.price} تومان</h3>
                                                    <h3 className="text-[#f42777] font-medium text-center pb-[1rem]">{finalPrice} تومان</h3>
                                                </div>
                                              :  <h3 className="text-[#f42777] font-medium text-center  pb-[1rem]">{finalPrice} تومان</h3>
                                              }
                                            
                                          </div>
                                        </div>
                                      );
                                  })}
                                </div>}
                          </div>
                      </div>
                  </div>
                  </div>
            }
     </>}
  </section>
)
}
