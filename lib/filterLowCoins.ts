import { Coin } from "@/types/Coin";
import getFiat from "./getFiat"
import getPercentage from "./getPercentage"

export default function filterLowCoins(total: number, coins: Coin[]): any{
    const {finalArray, otherTotal} = coins.reduce((acc: any, coin: any) => {
        const { dollarValue } = coin;
        const percentage = getPercentage(dollarValue, total)
        const passedThreshold = percentage > .005

        if(passedThreshold){
            acc.finalArray.push({
                name: coin.name, 
                value: dollarValue
            })
        }else{
            acc.otherTotal += dollarValue
        }

        return acc

    }, {finalArray: [], otherTotal: 0})

    otherTotal && finalArray.push({
        name: "Other",
        value: otherTotal
    })

    return finalArray

}