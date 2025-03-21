import { useRef, useState } from "react";
import { Link } from "react-router-dom";



type Product = {
  image: string;
  name: string;
  price: number;
  discount: number;
  id:string
};
type DragScrollComponentProps = {
  product: Product[];
};

const DragScrollComponent: React.FC<DragScrollComponentProps> = ({ product = [] }) => {
  const scrollContainer = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const velocityRef = useRef(0);
  const filteredProducts = product.filter((item) => item.discount !== 0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainer.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainer.current.offsetLeft);
      setScrollLeft(scrollContainer.current.scrollLeft);
      scrollContainer.current.style.transition = "none"; // حذف ترنزیشن هنگام دراگ
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainer.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX) * 1; // مقدار 1 برای نرمال بودن سرعت
    scrollContainer.current.scrollLeft = scrollLeft - walk;
    velocityRef.current = walk; // ذخیره مقدار سرعت برای اینرسی بعد از دراگ
  };

  const handleMouseUp = () => {
    if (scrollContainer.current) {
      setIsDragging(false);
      smoothTransition(scrollContainer.current, velocityRef.current); // اجرای ترنزیشن نرم بعد از رها کردن موس
    }
  };

  const smoothTransition = (element: HTMLDivElement, velocity: number) => {
    let speed = velocity; // مقدار اولیه سرعت حرکت
    const friction = 0.9; // ضریب اصطکاک برای کاهش تدریجی سرعت

    const animate = () => {
      if (Math.abs(speed) > 0.5) { // اگر سرعت کافی بود، ادامه بده
        element.scrollLeft -= speed;
        speed *= friction; // کاهش تدریجی سرعت
        requestAnimationFrame(animate); // اجرای حلقه انیمیشن
      } else {
        element.style.transition = "scroll-left 0.4s ease-out"; // افزودن ترنزیشن نهایی
      }
    };

    animate();
  };
  // Drag & Transition


  return (
    <div className="w-[100%] flex flex-col">
      <div
        ref={scrollContainer}
        className="w-[100%] flex gap-[.8rem] overflow-x-scroll noScroolBar mx-auto"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
      >
        {filteredProducts.map((res, index) => {
          const discountAmount = (res.price * res.discount) / 100;
          const finalPrice = res.price - discountAmount;

          return (
            <div key={index}  className="rounded-lg bg-[#fff] relative " style={{ pointerEvents: "auto" }}>
              <Link to={`/product/${res.id}`}>
                    <img className="object-cover rounded-lg max-w-[12.3rem] pointer-events-none"   src={res.image}  alt={res.name}/>
                      { res.discount > 0 && <div className=" text-[#fff] gap-[2px] font-semibold top-[.4rem] right-[.5rem] flex justify-center items-center absolute w-[2.8em] h-[2.5rem] bggPink rounded-[50%] ">
                                <span className=" text-[.7rem] "> {res?.discount}% </span>  <span className="  font-medium  text-[1rem] mr-[-.1rem] ">-</span>
                      </div>}
              </Link>
              <div className="bg-[#fff] h-[8rem] px-[1rem] flex flex-col justify-between rounded-lg">
                <h4 className="text-center pointer-events-none pt-[.5rem]">{res.name}</h4>
                <div>
                  <h3 className="text-center font-extralight text-dec text-gray-300">{res.price} تومان</h3>
                  <h3 className="text-[#f42777] font-medium text-center pb-[1rem]">{finalPrice} تومان</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DragScrollComponent;