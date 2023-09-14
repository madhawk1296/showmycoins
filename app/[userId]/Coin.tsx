import formatDollar from "@/lib/formatDollar";
import formatPercent from "@/lib/formatPercent";
import formatToken from "@/lib/formatToken";
import getChain from "@/lib/getChain";
import getFiat from "@/lib/getFiat";
import getPercentage from "@/lib/getPercentage";
import getUri from "@/lib/getUri";
import CoinDetail from "./CoinDetail";

export default function Coin({coin, total}: {coin: any, total:number}){
    const { name, symbol, balance, logo, symbolLogos, dollarValue, chain, price } = coin
    const percentage = getPercentage(dollarValue, total)

    return (
        <div className="relative w-full flex-wrap md:h-[75px] flex items-center justify-between px-[20px] bg-white">
            <div className="relative flex items-center gap-2">
                <CoinDetail detail={name} image={logo} containsImage={true}/>
                <h1 className="text-gray-500 text-sm font-bold"> ({chain})</h1>
            </div>
            <div className="relative flex flex-row md:w-[750px] flex items-center justify-between">
                <div className="w-[80px]">
                    <CoinDetail detail={formatDollar(price)} /> 
                </div>
                <div className="w-[80px]">
                    <CoinDetail detail={formatToken(balance)} /> 
                </div>
                <div className="w-[80px]">
                    <CoinDetail detail={formatDollar(dollarValue)} isGreen={true} />
                </div>
                <div className="w-[80px]">
                    <CoinDetail detail={formatPercent(percentage)} />
                </div>
             </div>
        </div>
    )
}