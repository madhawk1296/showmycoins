export default function filterCoins(coins: any): any{
    return coins.filter((coin: any) => coin.fiat)
}