import fetchCoins from "./lib/fetchCoins"

export default async function Home() {
  const coins = await fetchCoins()

  return (
    <main className="">

    </main>
  )
}
