import { Coin } from "@/types/Coin";
import getFiat from "./getFiat";

export default function getDollarValues(coins: Coin[]): number[]{
    return coins.map((coin: any) => coin.value)
}