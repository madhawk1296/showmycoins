import gatherCoinsByChain from "./gatherCoinsbyChain";

export default async function gatherCoins(userId: string){
    const chains = ['eth', 'polygon', 'arbitrum'];

    const promises = chains.map(chain => gatherCoinsByChain(userId, chain));

    const results = await Promise.all(promises);

    return results.flat();
}
