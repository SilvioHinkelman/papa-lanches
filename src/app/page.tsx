import Image from "next/image";
import { MockHistory } from "./MockData";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className=" flex flex-row justify-center p-4 md:x-12">
        <div className="bg-[#7bbc46] p-4 rounded-md max-w-[1420px] w-full flex justify-between items-center">
          <Image
            src="/assets/logo-papa.png"
            alt="Logo Lanches"
            width={184}
            height={184}
            priority
          />
          <div className="flex justify-center items-center bg-orange-200 rounded-full slide-in size-12 md:size-24">
            <Image
              src="/assets/papa-lanches.png"
              alt="Papa Lanches"
              width={80}
              height={8}
              priority
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-center p-4 md:x-12">
        <div className="bg-[#ffffff] p-4 rounded-md max-w-[1420px] w-full flex justify-end">
          {/*  <Image
            src="/assets/papa-lanches.png"
            alt="Imagem Exemplo"
            height={140}
            width={120}
            className="float-left w-40 h-40"
          /> */}
          <div>
            {MockHistory.map((x) => (
              <h1
                className="text text-[#ec534d] font-bold indent-8 pb-2 text-justify"
                key={x.index}
              >
                {x.text}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
