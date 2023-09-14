import { Coin } from "@/types/Coin";
import fetchPrices from "./fetchPrices";

export default async function gatherPrices(coins: Coin[], chain: string) {
    // Split coins into batches of 25
    const coinBatches: Coin[][] = [];
    for (let i = 0; i < coins.length; i += 25) {
        coinBatches.push(coins.slice(i, i + 25));
    }

    // Fetch prices for all batches using Promise.all
    const pricesPromises = coinBatches.map(batch => fetchPrices(batch, chain));

    // Wait for all promises to resolve and return the combined results
    const results = await Promise.all(pricesPromises);

    return results.flat();
}