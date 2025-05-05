"use client";

import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { TypeMenu } from "./MockMenu/MockCards";

interface IProps {
  menu: TypeMenu;
}

const CardMenu: React.FC<IProps> = ({ menu }) => {
  return (
    <Card className="w-full bg-green-200">
      <CardHeader className="flex flex-col bg-purple-200 gap-3">
        <p className="text-md text-red-700 bg-purple-400 mr-auto">
          {menu?.title}
        </p>
        {!!menu.img && (
          <Image
            alt={menu.title}
            radius="sm"
            src={menu.img.src}
           /*  height={340}
            width={420} */
            className="object-contain bg-red-500 mx-auto"
          />
        )}
        <p className="text-small mr-auto text-default-500">
          {menu?.ingredient}
        </p>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex flex-col gap-6">
          {menu?.menus.map((menu) => {
            return (
              <div className="text-red-400 bg-gray-200" key={menu.id}>
                {menu.subtitleCard}
                <h1 className="text-pink-700">{menu.description}</h1>
                {menu.types.map((sabores) => (
                  <h1 key={sabores?.id} className="text-blue-600">
                    {sabores?.title}
                    {sabores?.ingredient ? ` - ${sabores?.ingredient}` : ""}
                  </h1>
                ))}
              </div>
            );
          })}
        </div>
      </CardBody>
      <Divider />
    </Card>
  );
};
export default CardMenu;
