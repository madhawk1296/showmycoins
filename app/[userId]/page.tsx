import formatDollar from "@/lib/formatDollar"
import getTotal from "@/lib/getTotal"
import fetchCoins from "../../lib/fetchCoins"
import CoinList from "./CoinList"

export default async function Home({ params: { userId } }: { params: { userId: string }}) {
  const coins = await fetchCoins(userId)
  const total = getTotal(coins)

  return (
    <div className="relative w-full min-h-[200px] px-[40px] flex flex-col gap-6 items-center">
      <div className="relative w-full h-[100px] flex flex-col gap-2 justify-center">
        <h1 className="text-center text-lg font-semibold text-gray-500">Portfolio Value</h1>
        <h1 className="text-center text-3xl font-bold">{formatDollar(total)}</h1>
      </div>
      <CoinList total={total} coins={coins} />
    </div>
  )
}
