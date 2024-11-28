"use client"

import Image from "next/image"
import Link from "next/link"
import { FiGlobe, FiMenu } from "react-icons/fi"
import { MdOutlineNotificationsActive } from "react-icons/md"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "#", label: "Services" },
        { href: "#", label: "Schedules" },
        { href: "#", label: "Best Prices" },
    ]

    return (
        <nav className="flex justify-between items-center p-3 md:py-5">
            <Link href={"/"}>
                <Image src={"/images/logo.png"} alt="Travel-bud's logo" width={140} height={70} />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex justify-center items-center text-base space-x-10">
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className="hover:border-b-2 border-[#FFA700] duration-200 "
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="flex justify-center items-center gap-3 md:gap-5 xl:gap-10">
                <div className="hidden sm:flex gap-3">
                    <Link href="#" className="hover:scale-110 transition-transform">
                        <FiGlobe className="w-5 h-5" />
                        <span className="sr-only">Change language</span>
                    </Link>
                    <Link href="#" className="hover:scale-110 transition-transform">
                        <MdOutlineNotificationsActive className="w-5 h-5" />
                        <span className="sr-only">Notifications</span>
                    </Link>
                </div>
                <Button variant={"outline"} className="text-base hidden sm:inline-flex">
                    Contact Us
                </Button>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="h-fit w-fit">
                        <Button variant="ghost" size="icon" className="md:hidden font-bold">
                            <FiMenu className="w-20 h-20"/>
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[250px] sm:w-[400px]">
                        <SheetTitle>
                            <Image src={"/images/logo.png"} alt="Travel-bud's logo" width={140} height={70} />
                        </SheetTitle>
                        <div className="flex flex-col gap-4 mt-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-lg font-medium hover:text-[#FFA700] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="sm:hidden flex flex-col gap-4 mt-4">
                                <div className="flex gap-4">
                                    <Link href="#" className="hover:scale-110 transition-transform">
                                        <FiGlobe className="w-5 h-5" />
                                        <span className="sr-only">Change language</span>
                                    </Link>
                                    <Link href="#" className="hover:scale-110 transition-transform">
                                        <MdOutlineNotificationsActive className="w-5 h-5" />
                                        <span className="sr-only">Notifications</span>
                                    </Link>
                                </div>
                                <Button variant={"outline"} className="text-base w-full border-2 border-[#FFA700]">
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

