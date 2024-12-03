"use client"

import Image from "next/image";
import Link from "next/link";
import {FiGlobe } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Button } from "./ui/button";

export default function DashboardNav() {

    return (
        <nav className="flex justify-between items-center p-3 md:py-5">
            <Link href={"/dashboard"}>
                <Image src={"/images/logo.png"} alt="Travel-bud's logo" width={140} height={70} />
            </Link>


            <div className="flex justify-center items-center gap-3 md:gap-5 xl:gap-10">
                <div className="hidden sm:flex gap-3">
                    <Link href="#" className="hover:scale-110 transition-transform">
                        <FiGlobe className="w-5 h-5"/>
                        <span className="sr-only">Change Language</span>
                    </Link>
                    <Link href="#" className="hover:scale-110 transition-transform">
                        <MdOutlineNotificationsActive className="w-5 h-5"/>
                        <span className="sr-only">Notifications</span>
                    </Link>
                </div>
                <Button variant={"outline"} className="text-base hidden sm:inline-flex">
                    Contact Us
                </Button>
            </div>
        </nav>
    )
}