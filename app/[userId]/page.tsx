import filterCoins from "@/lib/filterCoins"
import getTotal from "@/lib/getTotal"
import sortCoins from "@/lib/sortCoins"
import gatherCoins from "../../lib/gatherCoins"
import CoinList from "./CoinList"
import Graph from "./Graph"

export default async function Home({ params: { userId } }: { params: { userId: string }}) {
  const originalCoins = await gatherCoins(userId)
  const coins = filterCoins(originalCoins)
  const sortedCoins = sortCoins(coins)
  const total = getTotal(coins)

  return (
    <div className="relative w-full px-[40px] flex flex-col gap-6 items-center">
      <Graph total={total} coins={sortedCoins}/>
      <CoinList total={total} coins={sortedCoins} />
    </div>
  )
}
