import filterCoins from "@/lib/filterCoins"
import getTotal from "@/lib/getTotal"
import sortCoins from "@/lib/sortCoins"
import gatherCoins from "../../lib/gatherCoins"
import CoinList from "./CoinList"
import Graph from "./Graph"
import NoCoins from "./NoCoins"
import checkValidAddress from "@/lib/checkValidAddress"

export default async function Home({ params: { userId } }: { params: { userId: string }}) {
  const userValid = checkValidAddress(userId)
  
  if(userValid)
  {
    const originalCoins = await gatherCoins(userId)
    const coins = filterCoins(originalCoins)
    const sortedCoins = sortCoins(coins)
    const total = getTotal(coins)

  return coins.length > 0 ? (
      <div className="relative w-full flex flex-col gap-6 items-center">
        <Graph total={total} coins={sortedCoins}/>
        <CoinList total={total} coins={sortedCoins} />
      </div>
    ): <NoCoins/> 
  }else{
    return(
      <NoCoins/>
    )
  }
}
