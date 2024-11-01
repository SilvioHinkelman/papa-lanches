import { IHistory, MockHistory } from "@/DataMock/MockData";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className=" flex flex-row justify-center p-4 md:x-12">
        <div className="bg-[#7bbc46] p-4 rounded-md max-w-[1420px] w-full flex justify-end">
          <div className="bg-orange-200 rounded-full slide-in">
            <Image
              src="/assets/logo-papa.png"
              alt="Papa Lanches"
              width={80}
              height={8}
              priority
              className="max-w-full w-12 md:w-24 "
            />
            <Image
              src="/assets/papa-lanches.png"
              alt="Papa Lanches"
              width={80}
              height={8}
              priority
              className="max-w-full w-12 md:w-24 "
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
            {MockHistory.map((x: IHistory) => (
              <h1
                className="text text-[#ec534d] font-bold indent-8 pb-2 text-justify"
                key={x.id}
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
