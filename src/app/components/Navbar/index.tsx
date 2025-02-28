"use client";
import Image from "next/image";
import TabsComp from "../Tabs";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [tab, setTab] = useState<string>("Início");
  return (
    <div className="flex flex-row justify-center p-4 pb-0 md:px-12">
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
  );
};

export default Navbar;
