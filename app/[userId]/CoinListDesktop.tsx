import Coin from "./Coin";
import TitleName from "./TitleName";

export default function CoinListDesktop({coins, total}: {coins:any, total:number}){
    return (
        <div className="relative w-full md:w-[1100px] flex flex-col gap-2 items-center">
            <div className="relative w-full md:flex justify-between">
                <TitleName name="Name" />
                <TitleName name="Chain" />
                <TitleName name="Symbol" />
                <TitleName name="Token Value" />
                <TitleName name="Dollar Value" />
                <TitleName name="Percentage" />
            </div>
            <div className="relative w-full flex flex-col items-center border-2 rounded-lg overflow-hidden gap-0.5 bg-gray-200">
                {coins.map((coin: any, index: number) => <Coin key={index} coin={coin} total={total} />)}
            </div>
        </div>
    )
}