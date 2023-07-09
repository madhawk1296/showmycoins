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
        <div className="relative w-full h-full pt-[40px] pb-[25px] px-[30px] flex justify-between items-center">
            <Link href="/">
                <div className="relative flex  gap-3 items-center py-[10px] px-[5px] transition-all duration-200 rounded-xl hover:bg-gray-50 hover:shadow-md">
                    <div className="relative w-[60px]">
                        <Logo />
                    </div>
                    <h1 className="w-full whitespace-nowrap	text-lg font-bold text-gray-800">Show Your Coins</h1>
                </div>
            </Link>
            <form onSubmit={handleSubmit} className="relative h-full flex justify-center items-center gap-2">
                <input onChange={handleChange} value={address} type="text" placeholder="Paste Your Wallet Address" className="relative border-2 w-[650px] px-[10px] py-[10px] outline-gray-500 border-gray-400 rounded-xl"/>
                <button type="submit" className="relative flex-grow-0 h-[48px] px-[20px] bg-blue-500 rounded-xl text-white shadow-sm transition-all duration-200 hover:shadow-md">
                    Enter
                </button>
            </form>
            <div className="w-[217px]">
    
            </div>
        </div>
    )
}