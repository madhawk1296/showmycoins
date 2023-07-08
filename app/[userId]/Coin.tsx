import formatDollar from "@/lib/formatDollar";
import formatPercent from "@/lib/formatPercent";
import formatToken from "@/lib/formatToken";
import getFiat from "@/lib/getFiat";
import getUri from "@/lib/getUri";
import CoinDetail from "./CoinDetail";

export default function Coin({coin, total}: {coin: any, total:number}){
    const { name, symbol, tokenValue, fiat, symbolLogos } = coin
    const dollarValue = getFiat(fiat)
    const percentage = dollarValue / total
    const uri = getUri(symbolLogos)

    console.log(coin)

    return (
        <div className="relative w-full w-full h-[75px] flex items-center justify-between px-[20px] bg-white">
            <CoinDetail detail={name} image={uri} containsImage={true}/>
            <CoinDetail detail={`${symbol}`} />
            <CoinDetail detail={formatToken(tokenValue)} />
            <CoinDetail detail={formatDollar(dollarValue)} />
            <CoinDetail detail={formatPercent(percentage)} />
        </div>
    )
}