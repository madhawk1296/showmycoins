"use client";

import React, { useState } from "react"
import { useRouter } from 'next/navigation'
import Logo from "@/components/icons/Logo";
import Link from "next/link";

export default function Header(){
    const [address, setAddress] = useState<string>("")
    const router = useRouter()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value)
    } 

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/${address}`)
    }

    return(
        <div className="relative w-full h-full pt-[15px] md:pt-[40px] pb-[25px] px-[10px] md:px-[30px] flex justify-between items-center flex-col gap-5 md:flex-row">
            <Link href="/">
                <div className="relative flex  gap-3 items-center py-[10px] px-[5px] transition-all duration-200 rounded-xl   hover:bg-gray-200 md:hover:bg-gray-200 hover:shadow-md">
                    <div className="relative w-[60px]">
                        <Logo />
                    </div>
                    <h1 className="w-full whitespace-nowrap	text-lg font-bold text-gray-800">Show Your Coins</h1>
                </div>
            </Link>
            <form onSubmit={handleSubmit} className="relative w-full h-full flex flex-col md:flex-row justify-center items-center gap-2">
                <input onChange={handleChange} value={address} type="text" placeholder="Paste Your Wallet Address" className="relative border-2 w-full md:w-[650px] px-[10px] py-[10px] outline-gray-500 border-gray-400 rounded-xl"/>
                <button type="submit" className="relative w-full md:w-fit flex-grow-0 h-[48px] px-[20px] bg-blue-500 rounded-xl text-white shadow-sm transition-all duration-200 hover:shadow-md">
                    Enter
                </button>
            </form>
            <div className="w-[217px] hidden md:block">

            </div>
        </div>
    )
}