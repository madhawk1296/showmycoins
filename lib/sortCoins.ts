import getFiat from "./getFiat"

export default function sortCoins(coins: any): any{
    return coins.sort((a: any, b: any) => {
        return getFiat(b.fiat) - getFiat(a.fiat)
    })
}