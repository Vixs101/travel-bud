"use client"
import Image from "next/image";
import Link from "next/link";
import { FiGlobe } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-3  lg:px-28 md:py-8">
            <Link href={"/"}>
              <Image src={"/images/logo.png"} alt="Travel-bud's logo" width={140} height={70}/>
            </Link>
            <ul className="hidden md:flex justify-center items-center text-lg space-x-10">
                <li>
                    <Link href={"/"} className="hover:border-b-2 border-[#FFA700] duration-100">Home</Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:border-b-2 border-[#FFA700] duration-100">Services</Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:border-b-2 border-[#FFA700] duration-100">Schedules</Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:border-b-2 border-[#FFA700] duration-100">Best Prices</Link>
                </li>
            </ul>
            <div className="flex justify-center items-center gap-3 md:gap-5 xl:gap-10">
                <div className="hidden sm:flex gap-3">
                  <Link href="#">
                    <FiGlobe size={16} className="cursor-pointer hover:h-6 hover:w-6 duration-100"/>
                  </Link>
                  <Link href="#">
                    <MdOutlineNotificationsActive size={16} className="cursor-pointer hover:h-6 hover:w-6 duration-100"/>
                  </Link>
                </div>
                <Button variant={"outline"} className="text-lg">Contact Us</Button>
            </div>
        </nav>
    )
}
