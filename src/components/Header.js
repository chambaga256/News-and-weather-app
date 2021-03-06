import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className="">
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://greatescapepublishing.com/reports/images/bigstock.png"
            width="150"
            height="40"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type=""
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          

          <div className="link" onClick={() => router.push("/orders")}>
            
            
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
    
            </span>
           
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
       
        <p className="link">New App</p>
        <a href="/displayWeather"><p className="link ">Today's Weather</p></a>
        <p className="link hidden lg:inline-flex">Local News</p>
        <p className="link hidden lg:inline-flex">Global News</p>
        <p className="link hidden lg:inline-flex">Sports</p>
        <p className="link hidden lg:inline-flex">Cereberity</p>
        <p className="link hidden lg:inline-flex">culture</p>
        <p className="link hidden lg:inline-flex">Politics</p>
      </div>
    </header>
  );
};

export default Header;
