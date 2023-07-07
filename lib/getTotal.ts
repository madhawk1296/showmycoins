export default function getTotal(coins: any): number{
    return coins.reduce((totalVal: number, coin: any) => {
        const { fiat } = coin;

        if(fiat) {
            totalVal += fiat[0].tokenValue
        } 
        return totalVal
    }, 0 )
}