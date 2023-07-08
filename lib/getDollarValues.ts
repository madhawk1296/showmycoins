import getFiat from "./getFiat";

export default function getDollarValues(coins: any): number[]{
    return coins.map((coin: any) => getFiat(coin.fiat))
}