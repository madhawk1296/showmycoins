import fetchCoins from "./fetchCoins";
import fetchPrices from "./fetchPrices";
import gatherPrices from "./gatherPrices";
import updateCoins from "./updateCoins";

export default async function gatherCoinsByChain(userId: string, chain: string){
    const coins = await fetchCoins(userId, chain);
    const prices = await gatherPrices(coins, chain);

    return updateCoins(coins, prices); 
}
