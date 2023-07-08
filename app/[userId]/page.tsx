import filterCoins from "@/lib/filterCoins"
import formatDollar from "@/lib/formatDollar"
import getTotal from "@/lib/getTotal"
import fetchCoins from "../../lib/fetchCoins"
import CoinList from "./CoinList"
import Graph from "./Graph"

export default async function Home({ params: { userId } }: { params: { userId: string }}) {
  const originalCoins = await fetchCoins(userId)
  const coins = filterCoins(originalCoins)
  const total = getTotal(coins)

  return (
    <div className="relative w-full px-[40px] flex flex-col gap-6 items-center">
      <Graph total={total} coins={coins}/>
      <CoinList total={total} coins={coins} />
    </div>
  )
}
