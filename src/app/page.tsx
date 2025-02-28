"use client";
import { MockHistory } from "@/DataMock/MockHistory";
import { Swiper } from "./components";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-center p-4 md:px-12">
        <Swiper />
      </div>
      <div className="flex flex-row justify-center p-4 md:px-12 pt-0">
        <div className="bg-white p-4 rounded-md max-w-[1420px] w-full flex items-center flex-col">
          {MockHistory.map((x) => (
            <h1
              className="text-base md:text-lg text-[#ec534d] font-bold indent-8 text-justify px-4 pb-2"
              key={x.id}
            >
              {x.text}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}
