import React from "react";
import SafeHostLogo from "../assets/SafeHost-Logo.svg";
import { Link } from 'react-router-dom'

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <Link to="/" className="flex items-center hover:text-black transition-colors">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <Link to="/cliente" className="flex items-center hover:text-black transition-colors">
          Clientes
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <Link to="/doador" className="flex items-center hover:text-black transition-colors">
          Doadores
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <Link to="/estoque" className="flex items-center hover:text-black transition-colors">
          Produtos
        </Link>
      </Typography>
    </ul>
  );
}
 
export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-full px-6 py-5 bg-blue-900 border-0">
      <div className=" items-center inline-flex px-4">
      <img src = {SafeHostLogo} alt = 'Logo do SafeHost' className="w-10 h-8"/>
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          SafeHost
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>   
      </div>
    </Navbar>
  );
}