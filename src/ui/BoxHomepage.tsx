
interface typeInputBoxHomepage{
    image:string;
    titel:string;
    discription:string;
}
export default function BoxHomepage({image , titel ,discription}:typeInputBoxHomepage) {

  return (
    <div className=" shadow3 w-full rounded-lg px-[.8rem] gap-[1rem] items-center py-[1rem] sm:max-w-[18.2rem] justify-between flex border-[.5px] border-solid border-[#bcbbbb]   ">
      <div>
        <h2  className=" text-[.9rem] sm1:text-[1rem] font-medium mb-[.4rem]  " >{titel}</h2>
        <p  className="  font-extralight sm1:text-[1rem] text-[.9rem] text-[#565656] " >{discription}</p>
      </div>
      <img className=" w-[15%] sm:w-[19%] " src={image} alt="" />
    </div>
  )
}
