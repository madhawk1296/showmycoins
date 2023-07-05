"use client";

import React, { useState } from "react"
import { useRouter } from 'next/navigation'

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
        <form onSubmit={handleSubmit} className="relative w-full h-full py-[50px] flex justify-center items-stretch gap-2">
            <input onChange={handleChange} value={address} type="text" placeholder="Paste Your Wallet Address" className="relative border-2 w-[800px] px-[10px] py-[10px] outline-none border-gray-400 rounded-xl"/>
            <button type="submit" className="relative flex-grow-0 h-[48px] px-[20px] bg-blue-500 rounded-xl text-white shadow-sm transition-all duration-200 hover:shadow-md">
                Enter
            </button>
        </form>
    )
}