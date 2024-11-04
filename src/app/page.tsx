"use client";
import { MockHistory } from "@/DataMock/MockData";
import Image from "next/image";
import TabsComp from "./components/Tabs";
import { useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [tab, setTab] = useState<string>("initial");
  console.log("TCL: Home -> tab", tab);
  return (
    <div className="min-h-screen bg-black ">
      <div className=" flex flex-row justify-center p-4 pb-0 md:x-12">
        <div className="bg-[#7bbc46] p-4 rounded-md max-w-[1420px] w-full flex justify-between items-center gap-4 flex-col md:flex-row">
          <Image
            src="/assets/logo-papa.png"
            alt="Logo Papa Lanches"
            width={184}
            height={24}
            priority
          />
          <div className="flex items-center gap-5">
            <div className="bg-orange-200 rounded-full slide-in hidden md:block">
              <Image
                src="/assets/papa-lanches.png"
                alt="Papa Lanches"
                width={80}
                height={8}
                priority
              />
            </div>
            <TabsComp setTab={setTab} tab={tab} />
          </div>
        </div>
      </div>
      {/*       <div className=" flex flex-row justify-center px-4 md:x-12">
        <div className="px-4 rounded-md max-w-[1420px] w-full flex justify-end">
          <div className="bg-orange-200 rounded-full slide-in">
            <Image
              src="/assets/papa-lanches.png"
              alt="Papa Lanches"
              width={80}
              height={8}
              priority
            />
          </div>
        </div>
      </div> */}
      <div className=" flex flex-row justify-center mt-4 p-4 pt-0 md:x-12">
        <div className="bg-[#ffffff] p-4 rounded-md max-w-[1420px] w-full flex items-center flex-col">
          {tab === "initial" ? (
            MockHistory.map((x) => (
              <h1
                className="text-base md:text-lg text-[#ec534d] max-w-[1200px] font-bold indent-8 pb-2 text-justify  px-8"
                key={x.id}
              >
                {x.text}
              </h1>
            ))
          ) : (
            <h1>OI</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
