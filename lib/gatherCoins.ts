import fetchChainCoins from "./fetchChainCoins"

export default async function gatherCoins(userId: string){
    const chains = ["arbitrum","ethereum","optimism","polygon"]
    const chainCalls = chains.map(chain => fetchChainCoins(userId, chain))
    const coinsArray = await Promise.all(chainCalls)
    
    return coinsArray.flat()
}
