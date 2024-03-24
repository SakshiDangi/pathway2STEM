import { useState } from "react";
import Logo from "../ui/Logo";
import {
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Button from "../ui/Button";

export default function Navbar() {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="">
    <nav className=" ">
      <div className="z-50 fixed sm:w-full lg:max-w-[84vw] lg:mx-32 px-5">
        <div className=" flex justify-between items-center h-16 lg:border rounded-2xl bg-transparent backdrop-blur-lg bg-opacity-30 ">
           {/* logo */}
          <div className=" lg:px-5">
             <Logo 
             />
          </div>
          <div className="flex items-center gap-16 my-12">
            {/* primary */}
            <div className="hidden lg:flex gap-8 text-black-300 font-semibold">
              <a href="/" className="">
                About
              </a>
              <a href="/">Networking</a>
              <a href="/resources" target="_blank">Resources</a>
              <a href="/job-board" target="_blank">Job Board</a>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            <div className=" xs:flex items-center gap-10">
              <div className="flex gap-2 lg:pr-5">
                <Button variant={"secondary"}>Login</Button>
                <Button>Donate</Button>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <Button variant={"secondary"} size={"sm"} onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full bg-transparent backdrop-blur-lg bg-opacity-30 overflow-hidden flex flex-col lg:hidden origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-fit"
        }`}
      >
        <div className="px-8 pt-9 pb-2">
          <div className="flex flex-col pt-7 gap-3 font-bold text-black-300 tracking-wider">
            <a href="/" target="_blank">
              About
            </a>
            <a href="#">Networking</a>
            <a href="#">Resources</a>
            <a href="/" target="_blank" >Job Board</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
}