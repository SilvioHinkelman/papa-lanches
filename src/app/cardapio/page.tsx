"use client";

import { CardsMenu } from "../components";
import {
  MockMenu,
  MockMenuTwo,
  MockMenuMobile,
} from "../components/Menu/MockMenu/MockCards";

const Menu: React.FC = () => {
  return (
    <div className="flex flex-row justify-center p-4 md:px-12">
      <div className="bg-bla rounded-md max-w-[1420px] w-full flex items-center flex-wrap gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
          <div className="flex flex-col gap-5 items-center lg:hidden">
            {MockMenuMobile.map((menu) => {
              return <CardsMenu key={menu.id} menu={menu} />;
            })}
          </div>
          <div className="lg:flex flex-col gap-5 items-center hidden">
            {MockMenu.map((menu) => {
              return <CardsMenu key={menu.id} menu={menu} />;
            })}
          </div>
          <div>
            <div className="lg:flex flex-col gap-5 items-center hidden">
              {MockMenuTwo.map((menu) => {
                return <CardsMenu key={menu.id} menu={menu} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
