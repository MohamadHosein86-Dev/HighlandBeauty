import { useDispatch, useSelector } from "react-redux";
import { formatCurrencyToToman } from "../helperfunction/functionHelper";
import TitelPages from "./TitelPages";
import { ProductType } from "../servises/getProdcts";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { addToId, deleteAllProduct } from "../featchers/CartCustomerReducer";
import { getPersianDate } from "../helperfunction/getDatePersian";
import useAddOrder from "../hooks/usePostOrder";
import toast from "react-hot-toast";


interface TypeSelctor{
  cartCustomer:{
    cartProducts:ProductType[],
    IDorder:null,
    totalPrice:number,
    ProductLength:number
  }
}
export default function Checkout() {

  const navigate =useNavigate();

  const {addOrder}=useAddOrder();
  const {user }=useUser();
  const id = user?.id as string;
  const products =useSelector((res:TypeSelctor)=>res.cartCustomer.cartProducts)  ;
  const totalPrice = useSelector((res:TypeSelctor)=>res.cartCustomer.totalPrice) ; 
  const quantity = useSelector((res:TypeSelctor)=>res.cartCustomer.ProductLength) ;  
 
  const dispatch =useDispatch();
  
  
  
  const [cheaked ,setCheakd]=useState<string | null>(localStorage.getItem("defalt") || "option1" );
  const [cheaked1 ,setCheakd1]=useState<string | null>(localStorage.getItem("defalt2") || "option20" );
  const [,setoption1]=useState<boolean>(false);
  const [,setoption2]=useState<boolean>(false);
  const [option10,setoption10]=useState<boolean>(true);
  const [option20 ,setoption20]=useState<boolean>(false);
  const [loading ,setloading]=useState<boolean>(false);
  const [name ,setname]=useState("");
  const [city ,setcity]=useState("");
  const [ostsan ,setostan]=useState("");
  const [lastname ,setlastname]=useState<string>("");
  const [street ,setstreet]=useState<string>("");
  const [phone ,setphone]=useState<string>("");
  const [numberpost ,setnumberpost]=useState<string>("");
  const [ note,setnote]=useState<string>("");
  const [error , setError]=useState("");

  function creatId() {
    return Math.floor(Math.random() * 1000000);
  }
  const idOrder = creatId();

  const postOfPrice = cheaked === "option1" ?  40000 : cheaked === "option2" &&  20000  ;
  const postOfname = cheaked === "option1" ?  "پست پیشتاز" : cheaked === "پست سفارشی" &&  20000  ;
  const totalPricePost = cheaked === "option1" ? totalPrice + 40000 : cheaked === "option2" && totalPrice + 20000  ; 
  const typeOfPost = cheaked1 === "option10" ? "پرداخت درب منزل" : cheaked1 === "option20" && "پرداخت شده";
  const now = getPersianDate();
  const statusOrder = "در حال انجام";

  
  
  function handleSubmit(x:React.FormEvent<HTMLFormElement>) {
      x.preventDefault();
    
      if(name.trim() === "" || lastname.trim() === "" || ostsan.trim() === "" || city.trim() === "" || street.trim() === "" || phone.trim() === "" || numberpost.trim() === ""  ){
        toast.error(" لطفا تمام فیلد هارو پر کنید  ");
        setError("لطفا فیلد را پر کنید . ")
        return;
      }


      const order = {
        name ,
        lastname,
        phone,
        ostsan,
        city,
        street,
        totalPricePost,
        postOfPrice,
        orderDate:now,
        statusOrder,
        postOfname,
        toPay:typeOfPost,
        numberpost,
        numberOfProduct:quantity,
        products,
        idOrder
      };
      addOrder({id , order});
      setname("");
      setcity("");
      setostan("");
      setlastname("");
      setstreet("");
      setphone("");
      setnumberpost("");
      setnote("");

      
      setTimeout(()=>{     
        dispatch(addToId(idOrder));
      },100);
      dispatch(deleteAllProduct());
      navigate("/order-received");
  }

  function handlePost() {
    setloading(true);
    setTimeout(()=>{     
      setloading(false);
    },300);
  }

  useEffect(()=>{
    localStorage.setItem("defalt" ,String(cheaked));
    localStorage.setItem("defalt2" ,String(cheaked1));
  },[cheaked ,cheaked1]);


  return (
    <section className=" bgHeadr ">
        <TitelPages />
        {products.length === 0 ?  
          <div className=" flex flex-col py-[4rem] ">
              <img className=" mx-auto w-[14rem]  "  src="	https://greenskinshop.com/images/68b7acd6.png" alt="" />
              <h1  className=" text-[#333] text-center  text-[1.6rem] font-bold ">متسفانه هیچ محصولی وجود ندارد!</h1>
              <button onClick={()=>navigate("/shop")} className=" mt-[2rem] mx-auto bg-[#aa3a8e] rounded-[4rem] py-[.8rem] font-semibold  text-[#fff] w-[9rem] ">رفتن به فروشگاه</button>
          </div>
              :
          <form onSubmit={handleSubmit}  className=" flex-col lg:flex-row flex gap-[4rem] contanerProudct2 ">
              <div className=" basis-[55%]  ">
                      <h2 className=" font-medium text-[1.4rem]  mt-[2.5rem] "> جزئیات صورتحساب </h2>
                      <div  className=" pt-[1.5rem] flex flex-col  ">
                                <label className=" text-[#333333b8] text-[1.2rem] pb-[.5rem] " htmlFor=""> نام   <span className=" mr-[.5rem] font-normal text-[red] ">{name.trim() == "" &&  error}</span>  </label>
                                <input placeholder="مثال : محمد" value={name} onChange={(x)=>setname(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none pr-[1rem] mb-[1.5rem] " type="text" />

                                <label className=" text-[#333333b8]  pb-[.5rem] " htmlFor="">نام خانوادگی   <span className=" mr-[.5rem] font-normal text-[red] ">{lastname.trim() == "" &&  error}</span>  </label>
                                <input placeholder="مثال : احمدی" value={lastname} onChange={(x)=>setlastname(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none px-[1rem] mb-[1.5rem] " type="text" />

                                <label className=" text-[#333333b8]  pb-[.5rem] " htmlFor=""> استان  <span className=" mr-[.5rem] font-normal text-[red] ">{ostsan.trim() == "" &&  error}</span>  </label>
                                <input placeholder="مثال :  تهران" value={ostsan} onChange={(x)=>setostan(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none px-[1rem] mb-[1.5rem] " type="text" />

                                <label className=" text-[#333333b8]  pb-[.5rem] " htmlFor=""> شهر  <span className=" mr-[.5rem] font-normal text-[red] ">{city.trim() == "" &&  error}</span>  </label>
                                <input placeholder="مثال : تهران " value={city} onChange={(x)=>setcity(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none px-[1rem] mb-[1.5rem] " type="text" />

                                <label className=" text-[#333333b8]  pb-[.5rem] " htmlFor=""> ادرس دقیق  <span className=" mr-[.5rem] font-normal text-[red] ">{street.trim() == "" &&  error}</span>  </label>
                                <input placeholder="مثال : خیابان جمهوری" value={street} onChange={(x)=>setstreet(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none px-[1rem] mb-[1.5rem] " type="text" />

                                <label className=" text-[#333333b8]  pb-[.5rem] " htmlFor="">   کد پستی   <span className=" mr-[.5rem] font-normal text-[red] ">{numberpost.trim() == "" &&  error}</span>  </label>
                                <input placeholder="مثال : 37844570" value={numberpost} onChange={(x)=>setnumberpost(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none px-[1rem] mb-[1.5rem] " type="text" />

                                <label className=" text-[#333333b8]  pb-[.5rem] " htmlFor="">  تلفن همراه   <span className=" mr-[.5rem] font-normal text-[red] ">{phone.trim() == "" &&  error}</span> </label>
                                <input placeholder="مثال : 09397997864" value={phone} onChange={(x)=>setphone(x.target.value)} className=" border-[1px] h-[3rem] rounded-[.3rem] outline-none px-[1rem] mb-[1.5rem] " type="text" />

                                <label className=" text-[#333333b8]  pb-[.5rem] " htmlFor=""> یادداشت سفارشی (اختیاری)  </label>
                                <input value={note}  onChange={(x)=>setnote(x.target.value)} placeholder="یادداشت ها درباره سفارش شما ، برای مثال نکات مهم برای تحویل بار ." className=" border-[1px] h-[13rem] pb-[9rem] rounded-[.3rem] outline-none px-[1.5rem] mb-[1.5rem] " type="text"  />

                      </div>
              </div>
              <div className=" basis-[45%]">
                    <h2 className=" font-medium text-[1.4rem] text-center mt-[2rem] ">سفارش شما</h2>
                    <div className={` relative ${loading && " opacity-5 "} transition ease-in delay-75 `} >
                          <div className=" bg-[#ffff] border-[1px] px-[1.8rem] py-[1.5rem] mt-[1rem]  ">
                            {loading && <div className=" absolute top-[15%] left-[45%] ">
                              <Spinner />
                            </div> }
                                    <div className=" pb-[1.2rem] border-b-[2px]  flex w-full justify-between ">
                                      <p className=" font-semibold text-[1.2rem] ">  محصول </p>
                                      <p className=" font-semibold text-[1.2rem] ">  جمع جزء </p>
                                    </div>
                                    {products.map((res)=>{
                                        const discountAmount = (res?.price * res?.discount) / 100 ;
                                        const finalPrice = res?.price - discountAmount;
                                        return(
                                              <div className=" pb-[1.2rem] border-b-[1px] mt-[2rem] flex w-full justify-between ">
                                                  <span className="  text-[#33333373] ">  {res.name} <strong>×{res.quantity}</strong> </span>
                                                  <span className=" text-[#33333373] ">{formatCurrencyToToman(finalPrice)}</span>
                                              </div>
                                        )
                                    }
                                    )}
                                    <div className=" mt-[1.6rem] pb-[1.2rem] border-b-[1px] flex w-full justify-between ">
                                        <p className="  font-semibold ">  جمع جز </p>
                                        <p className="  font-semibold text-[#f42777] ">{formatCurrencyToToman(totalPrice)}</p>
                                    </div>
                                    
                                    <div className=" flex-col sm:flex-row flex pb-[1.2rem] items-start gap-[.5rem] sm:gap-0 sm:items-center w-full border-b-[1px] mt-[1rem]   ">
                                          <h2 className=" w-full sm:w-[25%] font-semibold text-[1.2rem] ">  حمل و نقل </h2>   
                                          <div className="flex gap-[.5rem] flex-col justify-between w-full">
                                              
                                              <div className="w-full flex justify-between">
                                                  <label className="flex gap-[.4rem] text-[#333333b1]" htmlFor="">
                                                      پست پیشتاز :
                                                      <strong className="text-[#f42777]">40,000 تومان</strong>
                                                  </label>
                                                  <input
                                                      type="checkbox"
                                                      checked={cheaked === "option1"}
                                                      onChange={() => {
                                                          if (cheaked !== "option1") {
                                                              handlePost();
                                                              setoption1(true);
                                                              setoption2(false);
                                                              setCheakd("option1");
                                                          }
                                                      }}
                                                  />
                                              </div>

                                              <div className="w-full flex justify-between">
                                                  <label className="flex gap-[.4rem] text-[#333333b1]" htmlFor="">
                                                      پست سفارشی :
                                                      <strong className="text-[#f42777]">20,000 تومان</strong>
                                                  </label>
                                                  <input
                                                      type="checkbox"
                                                      checked={cheaked === "option2"}
                                                      onChange={() => {
                                                          if (cheaked !== "option2") {
                                                              handlePost();
                                                              setoption2(true);
                                                              setoption1(false);
                                                              setCheakd("option2");
                                                          }
                                                      }}
                                                  />
                                              </div>
                                        
                                          </div>
                                    </div>
                                    <div className=" mt-[2.5rem] flex w-full justify-between ">
                                      <p className=" text-[1.4rem] font-semibold ">  مجموع </p>
                                      <p className=" text-[1.4rem] font-semibold text-[#f42777] ">{formatCurrencyToToman(Number(totalPricePost))}</p>
                                    </div>
                                    
                          </div>  
                              <div className=" flex gap-[1rem] mt-[1rem] flex-col justify-between w-full ">
                                              <div className=" w-full flex flex-col ">
                                                    <div className=" w-full flex gap-[.75rem] ">
                                                          <input   checked={cheaked1 === "option10"} onChange={()=>{  if(cheaked1 !== "option10"){
                                                            setoption10(true); setoption20(false); setCheakd1("option10");
                                                          }}} type="checkbox" />
                                                          <label className=" flex gap-[.4rem] text-[#333333b1] " htmlFor="">   پرداخت هنگام دریافت  </label>

                                                    </div>
                                                    <div className={` ${!option10 ? " opacity-5 h-[0] " : " opacity-[1] h-[4rem] " } transition ease-in delay-100 flex items-center rounded-[.25rem] mt-[.8rem] w-full bg-[#ffff] shadow2   `}>
                                                          <h3 className={` ${!option10 && "hidden"} mb-[.5rem] px-[1rem] text-[#3333337e] `}>پرداخت نقدی پس از تحویل</h3>
                                                    </div>
                                              </div> 
                                              <div className=" w-full flex flex-col "> 
                                                    <div className="  w-full flex gap-[.75rem] ">
                                                            <input  checked={cheaked1 === "option20"} onChange={()=>{   
                                                              if(cheaked1 !== "option20"){
                                                                  setoption20(true); setoption10(false); setCheakd1("option20");
                                                              }
                                                              }} type="checkbox" />   
                                                            <label className=" flex gap-[.4rem] text-[#333333b1] " htmlFor="">  پرداخت از طریق seepay  <img className=" w-[3rem] " src="https://de3193820.t.ux5.ir/wp-content/mu-plugins/seepay//assets/images/logo.png" alt="" />  </label>

                                                    </div>
                                                    <div className={` ${!option20 ? " opacity-5 h-[0] " : " opacity-[1] h-[4rem] " } transition ease-in delay-100 flex items-center rounded-[.25rem] mt-[.8rem] w-full bg-[#ffff] shadow2   `}>
                                                          <h3 className={` ${!option20 && "hidden"} mb-[.5rem] px-[1rem] text-[#3333337e] `}>  پرداخت به وسیله کلیه کارت های عضو شتاب از طریق درگاه seepay  </h3>
                                                    </div>                                         
                                              </div>                                 
                              </div>
                          <p className=" mt-[1.5rem] pt-[1.5rem] border-t-[2px] text-[#3333338c] ">از داده های شخصی شما برای پردازش سفارش شما ، پشتیبانی از تجربه خود در سراسر این وب سایت و اهداف دیگری که در ما شرح داده شده استفاده می شود  <strong className=" text-[#f42777] "> سیاست حفظ حریم خصوص</strong> .</p>
                          <button type="submit"  className=" pb-[-.2rem] mt-[2rem] bg-[#aa3a8e] rounded-[4rem] py-[.8rem] font-semibold  text-[#fff] w-[100%] "> ثبت سفارش </button>
                    
                    
                    </div>  
              </div>
          </form>
        }
    </section>
  )
}
