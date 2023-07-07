import filterCoins from "@/lib/filterCoins";
import Coin from "./Coin";
import TitleName from "./TitleName";

export default function CoinList({coins, total}: {coins: any, total: number}){
    const filteredCoins = filterCoins(coins)
    return( 
        <div className="relative w-[900px] flex flex-col gap-2 items-center">
            <div className="relative w-full flex justify-between">
                <TitleName name="Name" />
                <TitleName name="Symbol" />
                <TitleName name="Token Value" />
                <TitleName name="Dollar Value" />
                <TitleName name="Percentage" />
            </div>
            <div className="relative w-full flex flex-col items-center border-2 rounded-lg overflow-hidden gap-0.5 bg-gray-200">
                {filteredCoins.map((coin: any, index: number) => <Coin key={index} coin={coin} total={total} />)}
            </div>
        </div>
    )
}