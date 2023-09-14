import { Coin } from "@/types/Coin"
import getFiat from "./getFiat"

export default function sortCoins(coins: Coin[]): Coin[] {
    return coins.sort((a: any, b: any) => {
        return b.dollarValue - a.dollarValue
    })
}