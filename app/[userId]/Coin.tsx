import formatDollar from "@/lib/formatDollar";
import formatPercent from "@/lib/formatPercent";
import formatToken from "@/lib/formatToken";
import getFiat from "@/lib/getFiat";
import CoinDetail from "./CoinDetail";

export default function Coin({coin, total}: {coin: any, total:number}){
    const { name, symbol, tokenValue, fiat } = coin
    const dollarValue = getFiat(fiat)
    const percentage = dollarValue / total

    return (
        <div className="relative w-full w-full h-[75px] flex items-center justify-between px-[20px] bg-white">
            <CoinDetail detail={name} />
            <CoinDetail detail={`${symbol}`} />
            <CoinDetail detail={formatToken(tokenValue)} />
            <CoinDetail detail={formatDollar(dollarValue)} />
            <CoinDetail detail={formatPercent(percentage)} />
        </div>
    )
}