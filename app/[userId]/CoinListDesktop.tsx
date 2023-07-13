import Coin from "./Coin";
import TitleName from "./TitleName";

export default function CoinListDesktop({coins, total}: {coins:any, total:number}){
    return (
        <div className="relative w-full md:w-[1100px] flex flex-col gap-2 items-center justify-center ">
                <div className="relative w-full flex flex-row justify-between px-[20px]">
                    <div className="relative flex items-center pl-[75px]">
                    <TitleName name="Coin Type" />
                    </div>
                    <div className="relative flex flex-row w-[500px] flex items-center justify-between ">
                        <div className="w-[80px]">
                            <TitleName name="Token Value" />
                        </div>
                        <div className="w-[80px]">
                            <TitleName name="Dollar Value" />
                        </div>
                        <div className="w-[80px]">
                            <TitleName name="Portfolio %" />
                    </div>
                </div>
                </div>
                
            <div className="relative w-full flex flex-col items-center border-2 rounded-lg overflow-hidden gap-0.5 bg-gray-200">
                {coins.map((coin: any, index: number) => <Coin key={index} coin={coin} total={total} />)}
            </div>
        </div>
    )
}