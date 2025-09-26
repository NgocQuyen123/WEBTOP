"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiX, FiMenu } from "react-icons/fi";

export default function Header() {
    const pathname = usePathname();
    const navItems = [
        { href: "/", label: "Home" },
        { href: "/theLe", label: "Thể lệ" },
        { href: "/giaiThuong", label: "Giải Thưởng" },
    ];
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 left-0 w-full z-1000  bg-[#ffffff] p-2">
            <header className="h-full text-gray-700 my-6 w-full max-w-[1290px] mx-auto">
                <div className="container w-full  mx-auto flex items-center justify-between px-4">
                    <div className="flex items-center">
                        <Image
                            src="/assets/unnamed.webp"
                            alt="Logo"
                            width={100}
                            height={40}
                        />
                    </div>

                    <div className="relative">
                        <button
                            className="md:hidden w-8 h-8 relative flex justify-center items-center rounded cursor-pointer z-50"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <FiMenu
                                size={24}
                                style={{ color: "rgba(77,74,201,1)" }}
                                className={`absolute transition-all duration-500 ease-in-out transform ${menuOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
                                    }`}
                            />

                            <FiX
                                size={24}
                                style={{ color: "rgba(77,74,201,1)" }}
                                className={`absolute transition-all duration-500 ease-in-out transform ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
                                    }`}
                            />
                        </button>




                        <nav
                            className={`
                                ${menuOpen ? "flex mt-12 mr-5 bg-[#ffffff]  sm:mt-1" : "hidden"} 
                                fixed top-5 right-0 w-full sm:bg-[#ffffff] sm:static sm:flex sm:w-auto
                                flex-col sm:flex-row sm:items-center
                                items-end z-50 
                            `}
                        >

                            {navItems.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={`hover:underline hover:text-tertiary underline-offset-2 font-bold ml-5 p-2 text-secondary text-base ${isActive ? "text-tertiary" : "font-bold text-secondary"
                                            }`}
                                        style={{ fontFamily: "var(--font-sans)" }}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </header >
        </div >

    );
}
