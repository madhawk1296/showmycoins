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

export default function CoinMobile({coin, total}: {coin: any, total:number}){
    const { name, symbol, tokenValue, fiat, symbolLogos, blockchain } = coin
    const dollarValue = getFiat(fiat)
    const percentage = getPercentage(dollarValue, total)
    const uri = getUri(symbolLogos)
    const chain = getChain(blockchain)

    return (
        <div className="relative w-full px-[20px] h-[80px] bg-white flex justify-between items-center">
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
                <Plus/>
            </div>
        </div>
    )
}