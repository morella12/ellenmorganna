'use client'

import "./style.scss";
import { NavbarPros } from "./interface";
import Image from "next/image";
import navBar from "../../../public/images/navbar.png";

export const Navbar: React.FC<NavbarPros> = ({
  className = ''
}) => {
  const classButton = 'uppercase border-r-2 border-white text-lg hover:text-light-gray';

  return (
    <nav
      id="nav-fullscreen"
      className={className + " flex flex-col items-center justify-center w-full"}
    >
      <Image src={navBar} alt="Navbar" className="icon z-50 fixed right-4 top-9 transform -translate-y-1/2" width={50} height={50} />
      <ul className="menu flex flex-row justify-center items-center gap-6">
        <li>
          <button className={classButton} type="button">
            Home
          </button>
        </li>
        <li>
          <button className={classButton} type="button">
            About
          </button>
        </li>
        <li>
          <button className={classButton} type="button">
            Services
          </button>
        </li>
        <li>
          <button className={classButton} type="button">
            Portfolio
          </button>
        </li>
        <li>
          <button className={classButton} type="button">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};