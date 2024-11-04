"use client";
import { Tabs, Tab } from "@nextui-org/react";
import { Key } from "react";

interface IProps {
  tab: string;
  setTab: (key: string) => void; // Mudando para string
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
        <Tab key="initial" title="Inicio" />
        <Tab key="menu" title="Cardápio" />
        <Tab key="contact" title="Contato" />
      </Tabs>
    </div>
  );
};

export default TabsComp;
