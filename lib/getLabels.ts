import { Coin } from "@/types/Coin";

export default function getLabels(coins: Coin[]): string[]{
    return coins.map((coin: any) => coin.name)
}