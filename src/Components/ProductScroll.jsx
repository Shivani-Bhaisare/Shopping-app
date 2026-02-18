import React, { useEffect, useRef } from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    discount: "50% off",
    image:
      "https://plus.unsplash.com/premium_photo-1673757121315-e7f427f1d378?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Coats",
    name: "Trendy Brown Coat",
    rating: 4.8,
    price: 75.0,
    oldPrice: 150.0,
    timer: { days: 5, hours: 12, mins: 30, secs: 25 },
  },
  {
    id: 2,
    discount: "25% off",
    image:
      "https://images.unsplash.com/photo-1632577743431-2b2d91e5dc8a?q=80&w=469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Coats",
    name: "Classy Light Coat",
    rating: 4.9,
    price: 165.0,
    oldPrice: 220.0,
  },
  {
    id: 3,
    discount: "10% off",
    image:
      "https://images.unsplash.com/photo-1603633247906-4746fea3141a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Dress",
    name: "Modern Brown Dress",
    rating: 4.8,
    price: 90.0,
    oldPrice: 100.0,
  },
  {
    id: 4,
    discount: "22% off",
    image:
      "https://images.unsplash.com/photo-1693988100913-1d5be59d0945?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Suit",
    name: "Modern Suit Dress",
    rating: 4.9,
    price: 85.0,
    oldPrice: 187.0,
  },
  {
    id: 5,
    discount: "15% off",
    image:
      "https://plus.unsplash.com/premium_photo-1672239496412-ab605befa53f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Jacket",
    name: "Casual Men’s Jacket",
    rating: 4.8,
    price: 75.0,
    oldPrice: 130.0,
  },
  {
    id: 6,
    discount: "20% off",
    image:
      "https://images.unsplash.com/photo-1631052066165-9720608b36da?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Suit",
    name: "Formal Suit for Men",
    rating: 4.7,
    price: 75.0,
    oldPrice: 150.0,
  },
  {
    id: 7,
    discount: "30% off",
    image:
      "https://images.unsplash.com/photo-1679136341758-9341619bbb44?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "jumpsuit",
    name: "Casual Black jumpsuit",
    rating: 4.6,
    price: 165.0,
    oldPrice: 200.0,
  },
  {
    id: 8,
    discount: "25% off",
    image:
      "https://images.unsplash.com/photo-1599346821185-6860259a6db7?q=80&w=1559&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Floral Shirt with Shorts",
    name: "Casual Summer Co-ord Set",
    rating: 4.8,
    price: 70.0,
    oldPrice: 100.0,
  },
  {
    id: 9,
    discount: "18% off",
    image:
      "https://images.unsplash.com/photo-1630104481319-d3a967afa0e7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Dress",
    name: "Satin Evening Gown",
    rating: 5.0,
    price: 110.0,
    oldPrice: 300.0,
  },
  {
    id: 10,
    discount: "20% off",
    image:
      "https://images.unsplash.com/photo-1654357575967-ae63c090583c?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Formal Look",
    name: "White Shirt with Trousers",
    rating: 4.8,
    price: 75.0,
    oldPrice: 120.0,
  },
  {
    id: 11,
    discount: "10% off",
    image:
      "https://images.unsplash.com/photo-1649140338085-5161c163f66d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Floral Dress",
    name: "Boho Style Outfit",
    rating: 4.7,
    price: 100.0,
    oldPrice: 230.0,
  },
  {
    id: 12,
    discount: "25% off",
    image:
      "https://images.unsplash.com/photo-1642582512466-e8992841809e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Formal Outfit",
    name: "Blue Sweater",
    rating: 4.9,
    price: 110.0,
    oldPrice: 190.0,
  },
  {
    id: 13,
    discount: "30% off",
    image:
      "https://images.unsplash.com/photo-1635776825612-8f8189c6a99c?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Casual Look",
    name: "White Casual",
    rating: 4.8,
    price: 60.0,
    oldPrice: 100.0,
  },
  {
    id: 14,
    discount: "10% off",
    image:
      "https://images.unsplash.com/photo-1663015851006-369db26b5ff9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Elegant Streetwear",
    name: "Red Skirt",
    rating: 4.7,
    price: 70.0,
    oldPrice: 100.0,
  },
  {
    id: 15,
    discount: "40% off",
    image:
      "https://images.unsplash.com/photo-1710431841620-503e763dc8a4?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Outdoor Look",
    name: "Black Outfit",
    rating: 4.9,
    price: 95.0,
    oldPrice: 160.0,
  },
];

const ProductScroll = () => {
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const startScroll = () => {
      autoScrollRef.current = setInterval(() => {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
      }, 20);
    };
    const stopScroll = () => clearInterval(autoScrollRef.current);
    startScroll();

    scrollContainer.addEventListener("mouseenter", stopScroll);
    scrollContainer.addEventListener("mouseleave", startScroll);
    return () => {
      stopScroll();
      scrollContainer.removeEventListener("mouseenter", stopScroll);
      scrollContainer.removeEventListener("mouseleave", startScroll);
    };
  }, []);
  return (
    <div ref={scrollRef} className="w-full overflow-x-hidden scroll-smooth ">
      <div className="flex gap-8 min-w-max px-28 py-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#f6f6f6] shadow-2xl border w-64 flex-shrink-0 transition-transform duration-500 hover:scale-105"
          >
            {/* Image & Discount */}
            <div className="relative">
              <img
                src={product.image}
                alt=""
                className="w-full h-72 object-cover object-top "
              />
              <span className="absolute top-3 left-3 bg-white text-[#32A775] px-3 py-1 text-lg font-semibold">
                {product.discount}
              </span>
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full">
                <FaRegHeart className="text-gray-800 text-lg" />
              </button>
            </div>

            {/* Countdown (if available) */}
            {product.timer && (
              <div className="grid grid-cols-4 text-center text-white text-lg font-[Helvetica] bg-[#f5bd63]">
                <div>
                  <p>{String(product.timer.days).padStart(2, "0")}</p>
                  <span className="text-[15px] font-normal">Days</span>
                </div>
                <div>
                  <p>{String(product.timer.hours).padStart(2, "0")}</p>
                  <span className="text-[15px] font-normal">Hours</span>
                </div>
                <div>
                  <p>{String(product.timer.mins).padStart(2, "0")}</p>
                  <span className="text-[15px] font-normal">Mins</span>
                </div>
                <div>
                  <p>{String(product.timer.secs).padStart(2, "0")}</p>
                  <span className="text-[15px] font-normal">Sec</span>
                </div>
              </div>
            )}

            {/* Product Info */}
            <div className="p-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-base">{product.category}</p>
                <div className="flex items-center text-yellow-500">
                  <FaStar className="mr-1" />
                  <span className="text-gray-700 text-base font-medium">
                    {product.rating}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl font-medium text-gray-700">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-gray-500 text-xl font-medium line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductScroll;
