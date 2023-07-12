'use client'

import formatDollar from "@/lib/formatDollar";
import formatPercent from "@/lib/formatPercent";
import formatToken from "@/lib/formatToken";
import getChain from "@/lib/getChain";
import getFiat from "@/lib/getFiat";
import getPercentage from "@/lib/getPercentage";
import getUri from "@/lib/getUri";
import CoinDetail from "./CoinDetail";
import Image from "next/image";
import QuestionMark from "@/components/icons/QuestionMark";
import Plus from "@/components/icons/Plus";
import { useState } from "react";
import Minus from "@/components/icons/Minus";
import CoinRow from "./CoinRow";

export default function CoinMobile({coin, total}: {coin: any, total:number}){
    const [expanded, setExpanded] = useState(false)
    const { name, symbol, tokenValue, fiat, symbolLogos, blockchain } = coin
    const dollarValue = getFiat(fiat)
    const percentage = getPercentage(dollarValue, total)
    const uri = getUri(symbolLogos)
    const chain = getChain(blockchain)

    const toggleExpansion = () => {
        setExpanded(!expanded)
    }

    return (
        <div onClick={toggleExpansion} className={`relative w-full px-[20px] bg-white flex flex-col h-fit`}>
            <div className="relative h-[80px] flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {(
                        uri ?
                        <Image alt="Coin Logo" src={uri} width={30} height={30} className="rounded-md"/>
                        : <QuestionMark />
                    )}
                    <div className="flex flex-col">
                        <h1 className="w-fit font-bold">{name}</h1>
                        <h1 className="w-fit text-sm font-medium text-gray-700">{chain}</h1>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold text-green-700">{formatDollar(dollarValue)}</h1>
                    <div className="relative w-[25px] flex items-center justify-center">
                        {expanded ? <Minus/> : <Plus/>}
                    </div>
                </div>
            </div>
            <div className={`relative w-full transition-all duration-200 overflow-hidden flex flex-col justify-center gap-1 px-[30px] ${
                expanded ? "h-[80px]" : "h-0"}`}> 
                <CoinRow title="# of Tokens:" value={formatToken(tokenValue)}/>
                <CoinRow title="% of Portfolio:" value={formatPercent(percentage)}/>
            </div>
        </div>
    )
}