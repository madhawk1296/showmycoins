import { Coin } from "@/types/Coin";
import fromWei from "./fromWei";

export default function getTotal(coins: Coin[]): number{
    return coins.reduce((totalVal: number, coin: any) => {
        const { price, balance } = coin;

        totalVal += price * Number(fromWei(balance));
        return totalVal
    }, 0 )
}