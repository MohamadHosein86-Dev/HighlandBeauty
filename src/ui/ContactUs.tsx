import { useEffect, useState } from "react";
import MapShop from "./MapShop";
import TitelPages from "./TitelPages";
import Spinner from "./Spinner";

export default function ContactUs() {
    const [load,setload]=useState(false);
    useEffect(() => {
      setload(true)
      setTimeout(() => {
        setload(false);
      }, 150);
      window.scrollTo(0, 0);
    }, []);
  return (
    <section>
      <TitelPages />
      {load ? <Spinner /> :<div className="  contaner  ">
        <div className=" mt-[2rem] mb-[3rem] md:mb-[3rem] ">
              <h2 className="  text-[1.6rem] sm:text-[2.6rem] font-bold mb-[1.5rem] ">ارتباط با ما</h2>

              <div className=" flex items-center mb-[1rem] gap-[.3rem] md:gap-[1.5rem] ">
                <p>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 24 24" className=" size-[1.6rem] sm:size-[2.2rem] hover:opacity-[.5]  transition ease-in delay-75 text-[#f42777]  brz-icon-svg align-[initial]" data-type="glyph" data-name="square-pin"><g className="nc-icon-wrapper" fill="currentColor"><path data-color="color-2" fill="currentColor" d="M22,24H2c-0.347,0-0.668-0.18-0.851-0.474c-0.182-0.295-0.199-0.663-0.044-0.973l3-6 c0.247-0.494,0.847-0.694,1.342-0.447c0.494,0.247,0.694,0.848,0.447,1.342L3.618,22h16.764l-2.276-4.553 c-0.247-0.494-0.047-1.095,0.447-1.342c0.495-0.247,1.095-0.046,1.342,0.447l3,6c0.155,0.31,0.138,0.678-0.044,0.973 C22.668,23.82,22.347,24,22,24z"></path> <path fill="currentColor" d="M12,0C8.067,0,4,2.992,4,8c0,4.6,6.544,11.327,7.29,12.08c0.188,0.189,0.443,0.295,0.71,0.295 s0.522-0.106,0.71-0.295C13.456,19.327,20,12.6,20,8C20,2.992,15.933,0,12,0z M12,10c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2 s2,0.895,2,2C14,9.105,13.105,10,12,10z"></path></g></svg>
                </p>
                <p className=" text-[1rem] sm:text-[1.6rem] "> <span className=" font-bold ">آدرس :</span> <span className=" text-[1rem] sm:text-[1.4rem] font-extralight ">مشهد، بلوارکوثر، میدان پژوهش، کارخانه نوآوری</span> </p>
              </div>

              <div className=" flex items-center mb-[1rem] gap-[.3rem] md:gap-[1.5rem] ">
                <p>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 24 24" className=" size-[1.6rem] sm:size-[2.2rem] hover:opacity-[.5]  transition ease-in delay-75 text-[#f42777]  brz-icon-svg align-[initial]" data-type="glyph" data-name="phone-call"><g className="nc-icon-wrapper" fill="currentColor"><path fill="currentColor" d="M16.293,14.293L13,17.586L6.414,11l3.293-3.293c0.391-0.391,0.391-1.024,0-1.414l-5-5 c-0.391-0.391-1.024-0.391-1.414,0L0,4.586C0,15.653,8.345,24,19.414,24l3.293-3.293c0.391-0.391,0.391-1.024,0-1.414l-5-5 C17.317,13.903,16.684,13.903,16.293,14.293z"></path> <path data-color="color-2" fill="currentColor" d="M24,10h-2c0-4.411-3.589-8-8-8V0C19.514,0,24,4.486,24,10z"></path> <path data-color="color-2" fill="currentColor" d="M20,10h-2c0-2.206-1.794-4-4-4V4C17.309,4,20,6.691,20,10z"></path></g></svg>
                </p>
                <p className=" text-[1rem] sm:text-[1.6rem] "> <span className=" font-bold ">  شماره تماس :  </span> <span className=" text-[1rem] sm:text-[1.4rem] font-extralight ">05138554460</span> </p>
              </div>

              <div className=" flex items-center mb-[1rem] gap-[.3rem] md:gap-[1.5rem] ">
                <p>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 24 24"  className=" size-[1.6rem] sm:size-[2.2rem] hover:opacity-[.5]  transition ease-in delay-75 text-[#f42777]  brz-icon-svg align-[initial]" data-type="glyph" data-name="at-sign"><g className="nc-icon-wrapper" fill="currentColor"> <path d="M24,10.7a10.687,10.687,0,0,1-.676,3.868c-.84,2.176-2.461,3.75-4.777,3.75a3.314,3.314,0,0,1-3.131-1.894,6.1,6.1,0,0,1-4.276,1.894,5.412,5.412,0,0,1-4.1-1.563c-2.009-2.1-2.177-6.724.47-9.269,2.152-2.069,4.968-2.124,7.929-1.652a15.284,15.284,0,0,1,2.506.58l-.338,7.178q0,2.04,1.117,2.04.94,0,1.5-1.373a9.663,9.663,0,0,0,.559-3.588A8.616,8.616,0,0,0,19.8,6.5a7.4,7.4,0,0,0-6.849-3.721A10.437,10.437,0,0,0,7.789,3.993C4.631,5.751,3.263,9.139,3.263,12.815a8.4,8.4,0,0,0,2.168,6.215c3.156,3.155,9.2,2.348,13.381.815v2.819A17.693,17.693,0,0,1,11.831,24q-5.585,0-8.708-2.936T0,12.9A12.493,12.493,0,0,1,6.136,1.681,13.453,13.453,0,0,1,12.919,0c4,0,7.726,1.6,9.7,5.079A11.208,11.208,0,0,1,24,10.7ZM8.951,12.536q0,3.1,2.528,3.1c2.146,0,2.7-1.818,2.851-3.964l.191-3.243a8.009,8.009,0,0,0-1.69-.163C10.262,8.264,8.951,10.018,8.951,12.536Z" fill="currentColor"></path> </g></svg></p>  
                <p> 
                  <span className=" text-[1rem] sm:text-[1.6rem] font-bold ">  ایمیل : </span> <span className=" text-[1rem] sm:text-[1.4rem] font-extralight ">  info@yourdomain.com  </span> 
                </p>

              </div>

              <div className=" flex gap-[.8rem] md:gap-[1.5rem] mt-[1.5rem] ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 448 512" className=" size-[1.5rem] md:size-[2.4rem]  brz-icon-svg align-[initial]" data-type="fa" data-name="telegram-plane"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 448 512" className=" size-[1.5rem] md:size-[2.4rem]  brz-icon-svg align-[initial]" data-type="fa" data-name="whatsapp"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 448 512" className=" size-[1.5rem] md:size-[2.4rem]  brz-icon-svg align-[initial]" data-type="fa" data-name="instagram"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </div>
        </div>
        <div className=" w-full mx-auto ">
          <MapShop />
        </div>
      </div>
      }
    </section>
  )
}
