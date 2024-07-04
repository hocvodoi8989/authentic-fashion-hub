"use client";

import { useState } from "react";
import { sliders } from "@/data/meta-data";
import Link from "next/link";
import Image from "next/image";

const Slider = () => {
  const [current, setCurrent] = useState<number>(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {sliders.map((slider) => (
          <div className={`${slider.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slider.id}>
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slider.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slider.title}</h1>
              <Link href={slider.url}>SHOP NOW!</Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 relative">
              <Image
                src={slider.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
