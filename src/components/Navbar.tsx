"use client"
import Image from "next/image";
import Link from "next/link";
import { FiGlobe } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <Image src={"/images/logo.png"} alt="Travel-bud's logo" height={18} width={20} />
            <ul className="hidden md:flex space-x-5">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"#"}>Services</Link>
                </li>
                <li>
                    <Link href={"#"}>Schedules</Link>
                </li>
                <li>
                    <Link href={"#"}>Best Prices</Link>
                </li>
            </ul>
            <div>
                <div className="flex gap-2">
                    <FiGlobe />
                    <MdOutlineNotificationsActive />
                </div>
                <Button>Contact Us</Button>
            </div>
        </nav>
    )
}