import fetchCoins from "../../lib/fetchCoins"

export default async function Home({ params: { userId } }: { params: { userId: string }}) {
  const coins = await fetchCoins(userId)

  return (
    <main className="">

    </main>
  )
}
