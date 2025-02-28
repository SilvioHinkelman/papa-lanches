"use client";

import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { TypeMenu } from "./MockMenu/MockCards";

interface IProps {
  menu: TypeMenu;
}

const CardMenu: React.FC<IProps> = ({ menu }) => {
  return (
    <Card className="w-full bg-green-200">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-red-700">{menu?.title}</p>
          <p className="text-small text-default-500">{menu?.ingredient}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex flex-col gap-6">
          {menu?.menus.map((menu) => {
            return (
              <h5 className="text-red-400 bg-gray-200" key={menu.id}>
                {menu.subtitleCard}
                {menu.types.map((sabores) => {
                  return (
                    <h1 key={sabores?.id}>
                      {sabores?.title}
                      {sabores?.ingredient ? ` - ${sabores?.ingredient}` : ""}
                    </h1>
                  );
                })}
                {/* <span className="text-black">
                  {type.ingredient ? ` - ${type.ingredient}` : ""}
                </span> */}
              </h5>
            );
          })}
        </div>
      </CardBody>
      <Divider />
    </Card>
  );
};
export default CardMenu;
