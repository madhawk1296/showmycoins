import { Coin } from "@/types/Coin";

export default function filterCoins(coins: Coin[]): Coin[]{
    return coins.filter((coin: any) => true);
}