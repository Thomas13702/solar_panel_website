import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/logo1.svg";

function NavLink({ to, children }) {
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-gray-800 h-20">
        {/*logo container*/}
        <Link className="text-xl font-semibold text-gray-100" href="/">
          <Image alt="Logo" src={logo} width={100} height={100} />
        </Link>
      </div>
      <div className="flex flex-col ml-4 ">
        <Link
          className="text-xl  font-normal my-4 text-gray-900"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About Us
        </Link>
        <Link
          className="text-xl font-normal my-4 text-gray-900"
          href="/product"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Products
        </Link>

        <Link
          className="text-xl font-normal my-4 text-gray-900"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact Us
        </Link>
        <Link
          className="text-xl font-normal my-4 text-gray-900"
          href="/cart"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Cart
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-gray-800 px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link className="text-2xl font-semibold text-gray-100" href="/">
          <Image alt="Logo" src={logo} width={100} height={100} />
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex text-gray-100 items-center">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/product">Products</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </div>
      </div>
    </nav>
  );
}
