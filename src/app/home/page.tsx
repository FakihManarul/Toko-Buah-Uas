import Navbar from "@/components/Navbar";
import React from "react";

export default function Hero() {
  return (
    <div className="">
      <Navbar />
      <img src="/img/hero.jpg" alt="Example" className="w-full h-full" />
      <div className="absolute pl-28 w-1/2 inset-0 flex flex-col items-start justify-center ">
        <p className="text-white text-5xl font-bold">
          Kini, Toko Buah Nusantara Lebih Dekat Denganmu
        </p>
        <p className="text-white text-md mt-5">
          Kami berkomitmen dalam menyediakan segala kebutuhan kamu. Mulai dari
          Sayuran segar setiap hari, sampai buah-buahan yang memiliki kualitas
          terjamin. Hingga sampai ke pelukanmu!
        </p>
        <button className="px-12 py-2 mt-3 rounded-full bg-[#81B03F]">
          Shop Now
        </button>
      </div>
    </div>
  );
}
