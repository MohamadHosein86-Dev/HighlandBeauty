import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatCurrencyToToman } from "../helperfunction/functionHelper";
import useGetProudct from "../hooks/useGetProudct"
import useGetProducts from "../hooks/useGetProducts";
import { ProductType } from "../servises/getProdcts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteProduct, munesquantity, updatequantity } from "../featchers/CartCustomerReducer";
import toast from "react-hot-toast";
import SpinnerMini from "../ui/SpinerMini";
import useUser from "../hooks/useUser";
import useGetOrdersUser from "../hooks/useGetOrdersUser";
import useAddfavarit from "../hooks/useAddfavarit";
import useRemovfavarit from "../hooks/useRemovfavarit";
import Spinner from "../ui/Spinner";


interface TypeSelctor{
  cartCustomer:{
    cartProducts:ProductType[]
  }
}
export default function ProudctPage() {
  
  const navigate =useNavigate();
  const {removfavarit} =useRemovfavarit();
  const {addfavarit}=useAddfavarit();
  const {data}=useGetOrdersUser();
  const {user }=useUser();
  const {proudct , isLoading} =useGetProudct();
  const {products} =useGetProducts();

  const {authenticatd}= useUser();

  const {pathname}=useLocation();
  const dispatch = useDispatch();

  const [transition ,setTransition]=useState(false);
  const [loading,setLoading] = useState(false);
  const productSelctor = useSelector((res:TypeSelctor)=>res.cartCustomer.cartProducts) as ProductType[];

  const productReducer = productSelctor.find((res)=> res.id === proudct?.id);
  const discountAmount = (Number(proudct?.price) * Number(proudct?.discount)) / 100 ;
  const finalPrice = Number(proudct?.price) - discountAmount;
  const filteredProducts = products?.filter((res)=> res.category == proudct?.category ) as ProductType[]; 
  const idProductOffavarit = data?.favarits && data?.favarits.some((res)=>res.id === proudct?.id) ;
  

  function  handleAddtoCart(proudct:ProductType) {

    if(authenticatd){
      setLoading(true);
      setTimeout(() => {
          dispatch(addToCart(proudct));
          toast.success(" محصول به سبد خرید اضافه شد ");
          setLoading(false);      
      },250);
    }
    if(!authenticatd){
      toast.error(" لطفا اول وارد سایت شوید . ");
    }
  }
  function  handleDeleteToCart(proudct:ProductType) {
    setLoading(true);

    setTimeout(() => {
        dispatch(deleteProduct(proudct));
        toast.success(" محصول به سبد خرید اضافه شد ");
        setLoading(false);      
    },250);
  }
  function handleAddtoFavarit() {
    const id = user?.id as string;
    if (!proudct) {
      console.error("Product is undefined");
      return;
    }
    addfavarit({id ,proudct})
  }
  function handleDelettoFavarit() {
    const id = user?.id as string;
    if (!proudct) {
      console.error("Product is undefined");
      return;
    }
    removfavarit({id , proudct});
  }

  useEffect(()=>{
    window.scrollTo(0, 0); 
        const startTransition = setTimeout(()=>{
          setTransition(true);
        },50);

        return ()=> clearTimeout(startTransition);
  },[pathname]);

  if(isLoading) return <div className=" py-[14rem] "><Spinner /></div>;

  return (
    <div className={`  pt-[.5rem]  ${  transition ? "visable" :""} TransitionBox `}  >
      <div className=" bgHeadr ">
        <div className="flex gap-[2.5rem]  pt-[6rem] pb-[4rem] flex-col  md:flex-row  contanerProudct100 ">
           <div className=" relative   ">
              <img className="   object-cover w-[30rem]  "  src={proudct?.image} alt="" />
                { Number(proudct?.discount) > 0 && 
                <div className=" text-[#fff] font-normal top-[.8rem] right-[1rem] flex justify-center items-center absolute w-[3.5rem] h-[3rem] bggPink rounded-[50%] ">
                    {proudct?.discount}%<span className="  font-medium  text-[1.4rem] mr-[-.1rem] ">-</span>
                </div>
                }
           </div>
            <div className=" flex gap-[1.5rem] flex-col w-full md:w-[65.2%] ">
                <div className=" flex gap-[.5rem] text-sm text-[#777777]  ">
                 <Link to={"/"}> <p>خانه</p></Link>
                  <span>/</span>
                  <p> {proudct?.category} </p>
                  <span>/</span>
                  <p className=" text-[#333] font-medium "> {proudct?.name} </p>
                </div>
                <h1 className=" font-semibold text-xl mb-[-.8rem] md:mb-[0]  ">{proudct?.name}</h1>
                <div className=" flex gap-[.5rem] ">
                  <h2 className="  text-[1.3rem] md:text-[1.5rem] text-[#33333348] decoration text-dec  ">{formatCurrencyToToman(Number(proudct?.price))}</h2>
                  <h2 className=" font-medium text-[1.3rem] md:text-[1.5rem] textPink ">{formatCurrencyToToman(Number(finalPrice))}</h2>
                </div>
                <p className=" text-[#33333396] text-[1.1rem] md:text-[1.3rem] ">{proudct?.description}</p>
                <div className=" mb-[-.5rem]  md:mt-[1.3rem] ">
                  
                        <div className=" flex items-center gap-[1rem] ">
                            {Number(productReducer?.quantity) > 0 && 
                                <div>
                                      <button onClick={()=> proudct && dispatch(munesquantity(proudct))} className="px-[.8rem] py-[.5rem] bg-gray-200 rounded hover:bg-gray-300">
                                            -
                                      </button>
                                          <span className="px-4 text-center">{productReducer?.quantity}</span>
                                      <button onClick={()=> proudct && dispatch(updatequantity(proudct))}  className="px-[.8rem] py-[.5rem] bg-gray-200 rounded hover:bg-gray-300">
                                            +
                                      </button>
                                </div>
                            }
                            {Number(productReducer?.quantity) > 0 ?  <button onClick={()=> proudct && handleDeleteToCart(proudct) } className=" text-[#fff] font-semibold h-[2.8rem] flex justify-center text-sm  sm:text-[1rem] items-center sm:h-[3rem] max-w-[10rem] px-[1.2rem] pb-[.2rem] rounded-[2rem] bg-[red] "> {loading ? <SpinnerMini /> : " حذف از سبد خرید "} </button> 
                            : 
                             <button onClick={()=> proudct && handleAddtoCart(proudct) } className="  text-[#fff] font-semibold px-[1.2rem] text-sm sm:text-[1rem] h-[2.8rem]  max-w-[10rem] items-center sm:h-[3rem] pb-[.2rem] flex justify-center sm:max-w-[12rem] rounded-[2rem] bg-[#aa3a8e] "> {loading ? <SpinnerMini /> : " افزودن به سبد خرید "}</button>   
                            }    
                        </div>
                            
                  <div className=" cursor-pointer mt-[1rem] flex gap-[.2rem] ">
                      {idProductOffavarit ? 
                          <svg onClick={handleDelettoFavarit} xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                          </svg> 
                        :
                          <svg onClick={handleAddtoFavarit} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                          </svg>
                      }
                      <p>افزودن به علاقه مندی ها</p>
                  </div>
                </div>
                <div className=" mt-[0rem]  border-t-[1.8px] pt-[1rem] ">
                    <div> شناسه محصول : <span className=" text-[#777777] ">{proudct?.productCode}</span> </div>
                    <div>  دسته : <span className=" text-[#777777] ">{proudct?.category}</span> </div>
                </div>
            </div>
        </div>
      </div>

      <div className=" bg-[#fff]  border-t-[1.8px] ">
          <div className=" contanerProudct100 pb-[6rem] ">
              <h2 className=" pt-[2rem] text-center font-semibold text-lg pb-[4.5rem] ">توضیحات</h2>
              <div className=" flex gap-[1rem] flex-col">
                  <div className="  border-b-[1.8px] pb-[.7rem]  ">
                     <div className=" flex justify-between pr-[.5rem]  w-full  md:w-[60%] ">
                        <p className=" text-[.9rem] sm2:text-[1rem] w-full  font-semibold   text-[#33333368] ">  برند  </p>
                        <p  className=" text-[.9rem] sm2:text-[1rem]  w-full  font-semibold  text-[#33333368] "> {proudct?.brand} </p>
                     </div>
                  </div>
                  <div className="  border-b-[1.8px] pb-[.7rem]  ">
                     <div className=" flex justify-between pr-[.5rem]  w-full  md:w-[60%] ">
                        <p className=" texfont-semibold font-semibold  w-full text-[#33333368] ">  کد محصول (sku)  </p>
                        <p  className=" text-[.9rem] sm2:text-[1rem] w-full m   font-semibold  text-[#33333368] "> {proudct?.productCode} </p>
                     </div>
                  </div>
                  <div className="  border-b-[1.8px] pb-[.7rem]  ">
                     <div className=" flex justify-between pr-[.5rem]  w-full  md:w-[60%] ">
                        <p className=" text-[.9rem] sm2:text-[1rem] w-full  font-semibold   text-[#33333368] ">  عنوان مرجع  </p>
                        <p  className=" text-[.9rem] sm2:text-[1rem] w-full    font-semibold  text-[#33333368] "> {proudct?.description} </p>
                     </div>
                  </div>                
                  <div className="  border-b-[1.8px] pb-[.7rem]  ">
                     <div className=" flex justify-between pr-[.5rem]  w-full  md:w-[60%] ">
                        <p className=" text-[.9rem] sm2:text-[1rem] w-full  font-semibold   text-[#33333368] ">  دسته ها  </p>
                        <p  className=" text-[.9rem] sm2:text-[1rem] w-full     font-semibold  text-[#33333368] "> {proudct?.category} </p>
                     </div>
                  </div>
                  <div className="  border-b-[1.8px] pb-[.7rem]  ">
                     <div className=" flex justify-between pr-[.5rem]  w-full  md:w-[60%] ">
                        <p className=" text-[.9rem] sm2:text-[1rem] w-full  font-semibold   text-[#33333368] ">  GTIN </p>
                        <p  className=" text-[.9rem] sm2:text-[1rem] w-full   font-semibold  text-[#33333368] "> 654780014588 </p>
                     </div>
                  </div>
                  <div className="  border-b-[1.8px] pb-[.7rem]  ">
                     <div className=" flex justify-between pr-[.5rem]  w-full  md:w-[60%] ">
                        <p className=" text-[.9rem] sm2:text-[1rem] w-full  font-semibold   text-[#33333368] ">  ویژگی </p>
                        <p  className=" text-[.9rem] sm2:text-[1rem] w-full m   font-semibold  text-[#33333368] "> ماندگاری بالا </p>
                     </div>
                  </div>
              </div>
          </div>
                          
          <section className=" bgHeadr ">
              <div className=" border-t-[1.5px] contanerProudct100">
                  <h2 className=" text-2xl font-medium pb-[1rem] pt-[4rem] ">محصولات مرتبط</h2>
                  <div className="w-[80.5%] flex flex-col mx-auto">
                      <div className=" flex  gap-[.5rem] justify-center ">
                      <div className=" pt-[1.8rem] border-t-[1px]  h-[100%] sm:justify-normal justify-center flex gap-[2rem] xl:ml-[2rem] ml-[0] flex-wrap w-full  xl:w-[77%]   ">
                                  {filteredProducts?.map((res, index) => {
                                      const discountAmount = (res.price * res.discount) / 100;
                                      const finalPrice = res.price - discountAmount;

                                      return (
                                        <div key={index}   className="rounded-lg curs flex flex-col justify-between mb-[1rem] mx-auto sm:m-0  shadow3 w-[80%] sm:max-w-[15.4rem] bg-[#fff]" style={{ pointerEvents: "auto" }}>
                                          
                                            
                                               <div onClick={()=>navigate(`/product/${res.id}`)} className=" cursor-pointer relative ">
                                                    <img className="object-cover rounded-lg w-full h-full pointer-events-none"   src={res.image}  alt={res.name}/>
                                                    { res.discount > 0 && 
                                                    <div className=" text-[#fff] gap-[2px] font-semibold top-[.5rem] right-[1rem] flex justify-center items-center absolute w-[3rem] h-[2.5rem] bggPink rounded-[50%] ">
                                                          <span className=" text-[.7rem] "> {res?.discount}% </span>  <span className="  font-medium  text-[1rem] mr-[-.1rem] ">-</span>
                                                    </div>
                                                    }
                                               </div>
                                          
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
                      </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    </div>
  )
}
