import React, { useState } from "react";
import { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { DataContext } from "./data/DataProvider";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuNav() {
  const { carrito, handlerLeft, show } = useContext(DataContext);

  const longitud_carrito = carrito?.length;

  return (
    <div className=" relative w-full  h-full  ">
      <div className="  py-2 px-2 w-full flex items-center just justify-between bg-gray-600  z-50 fixed">
        <div>
          <h3 className="text-2xl text-rose-500 font-black">
            {" "}
            <Link to="/" className="links hover:text-rose-700">
              Marlon
            </Link>
          </h3>
        </div>

        <ul className="menu flex gap-10 text-gray-50">
          <li>
            <Link
              to="/"
              className="links hover:text-rose-700"
              onClick={() => handlerLeft()}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/productos"
              className="links hover:text-rose-700"
              onClick={() => handlerLeft()}
            >
              Products
            </Link>
          </li>

          {/* <li>
            <Link
              to="/team"
              className="links hover:text-rose-700"
              onClick={() => handlerLeft()}
            >
              team
            </Link>
          </li> */}
        </ul>

        <div className="icons_nav flex gap-4 justify-center items-center relative mr-2 p-2">
          <BiSearch className="text-2xl text-gray-50  hover:cursor-pointer hover:text-rose-700" />
          <div className="relative flex justify-center items-center">
            <Link to="/carrito">
              <HiOutlineShoppingBag className="icon_store text-2xl text-gray-50 hover:cursor-pointer hover:text-rose-700 z-50" />
            </Link>
            <span className="flex justify-center items-center absolute -right-2 -bottom-3 p-3 bg-red-900 text-white  rounded-full w-4 h-4 z-20">
              {longitud_carrito}
            </span>
          </div>
          {show ? (
            <RxHamburgerMenu
              className="lg:hidden md:hidden text-3xl  text-gray-50 z-50"
              onClick={() => handlerLeft()}
            />
          ) : (
            <IoMdClose
              className="lg:hidden md:hidden text-3xl  text-gray-50 z-50"
              onClick={() => handlerLeft()}
            />
          )}
        </div>
      </div>
    </div>
  );
}
