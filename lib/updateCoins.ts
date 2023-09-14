import { Coin } from "@/types/Coin";
import fromWei from "./fromWei";

export default function updateCoins(coins: Coin[], prices: any[]): Coin[] {
    return coins.map(coin => {
        const { address, balance } = coin;

        const price = prices.find(price => {
            return price?.tokenAddress.toLowerCase() == address.toLowerCase()
        })?.usdPrice || 0;

        const dollarValue = price * Number(fromWei(balance));

        return {...coin, price, dollarValue}
    })
}