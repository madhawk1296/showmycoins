import filterCoins from "@/lib/filterCoins"
import getTotal from "@/lib/getTotal"
import sortCoins from "@/lib/sortCoins"
import gatherCoins from "../../lib/gatherCoins"
import CoinList from "./CoinList"
import Graph from "./Graph"
import NoCoins from "./NoCoins"
import checkValidAddress from "@/lib/checkValidAddress"
import Moralis from "moralis";
import fetchPrices from "@/lib/fetchPrices"
import updateCoins from "@/lib/updateCoins"

export const revalidate = false;

export default async function Home({ params: { userId } }: { params: { userId: string }}) {
  const userValid = checkValidAddress(userId);
  
  if(userValid) {
    const coins = await gatherCoins(userId);
    const sortedCoins = sortCoins(coins)
    const total = getTotal(coins);

    return coins.length > 0 ? (
      <div className="relative w-full flex flex-col gap-6 items-center">
        <Graph total={total} coins={sortedCoins}/>
        <CoinList total={total} coins={sortedCoins} />
      </div>
    ): <NoCoins/> 
  } else {
    return(
      <NoCoins/>
    )
  }
}
