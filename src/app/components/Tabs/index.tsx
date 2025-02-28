"use client";
import { tabItens } from "@/DataMock/MockTabs";
import { Tabs, Tab } from "@nextui-org/react";
import Link from "next/link";
import { Key } from "react";

interface IProps {
  tab: string;
  setTab: (key: string) => void;
}

const TabsComp: React.FC<IProps> = ({ setTab, tab }) => {
  const handleSelectionChange = (key: Key) => {
    setTab(key as string);
  };

  return (
    <div className="flex flex-row">
      <Tabs
        color="warning"
        aria-label="Options"
        radius="full"
        variant="bordered"
        selectedKey={tab}
        onSelectionChange={handleSelectionChange}
        classNames={{
          tabList: "bg-[#7bbc46] border-2 border-[#f5a524] text-black",
          tabContent: "group-data-[selected=true]:text-[#ffffff] text-black",
        }}
      >
        {tabItens.map((item) => (
          <Tab
            key={item.key}
            title={
              <Link
                href={item.href}
                className="w-full h-full flex items-center justify-center"
              >
                {item.key}
              </Link>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

export default TabsComp;
