import Coin from "./Coin";
import CoinMobile from "./CoinMobile";
import TitleName from "./TitleName";

export default function CoinListMobile({coins, total}: {coins:any, total:number}){
    return (
        <div className="relative w-full md:w-[1100px] flex flex-col gap-2 items-center">
            <div className="relative w-full flex flex-col items-center border-2 rounded-lg overflow-hidden gap-0.5 bg-gray-200">
                {coins.map((coin: any, index: number) => <CoinMobile key={index} coin={coin} total={total} />)}
            </div>
        </div>
    )
}