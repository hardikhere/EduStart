import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/edustart-logo.png";
import SearchByText from "@/components/SearchPage/SearchByText";
import LoginModal from "@/components/Auth/LoginModal";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="bg-white rounded-bl-xl shadow-sm rounded-br-xl w-100 h-20 
      flex items-center pr-10 pl-10 justify-between"
    >
      <Link href={"/"}>
        <div className="flex items-center">
          <Image src={Logo} className="h-16 w-16" alt="edustart logo" />
          <h1 className="pl-4 text-4xl text-sky-600">edustart</h1>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <SearchByText />
        <LoginModal />
        <button className="text-slate-500">For schools</button>
      </div>
    </div>
  );
};

export default Navbar;
