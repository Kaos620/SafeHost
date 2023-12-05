import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Home() {
  return (
    <div className="flex justify-between p-4">
      <Card className="w-80 h-80 flex items-center justify-center bg-blue-500 ">
        <CardBody>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-medium"
          >
            <Link
              to="/doador"
              className="flex items-center hover:text-black transition-colors"
            >
              Doadores
            </Link>
          </Typography>
        </CardBody>
      </Card>

      <Card className="w-80 h-80 flex items-center justify-center bg-blue-500 ">
        <CardBody className="">
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-medium"
          >
            <Link
              to="/cliente"
              className="flex items-center hover:text-black transition-colors"
            >
              Clientes
            </Link>
          </Typography>
        </CardBody>
      </Card>

      <Card className="w-80 h-80 flex items-center justify-center bg-blue-500 ">
        <CardBody>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-medium"
          >
            <Link
              to="/estoque"
              className="flex items-center hover:text-black transition-colors"
            >
              Produtos
            </Link>
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
