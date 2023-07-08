export default function getLabels(coins: any): string[]{
    return coins.map((coin: any) => coin.name)
}