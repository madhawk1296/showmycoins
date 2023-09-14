import { Coin } from "@/types/Coin";

export default async function fetchPrices(coins: Coin[], chain: string) {
    const addresses = coins.map(coin => {
        return {
            "token_address": coin.address
        }
    });

    const res = await fetch(`https://deep-index.moralis.io/api/v2.2/erc20/prices?chain=${chain}&include=percent_change`, {
        method: "POST",
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'X-API-Key': process.env.MORALIS_API_KEY!
        },
        body: JSON.stringify({
            "tokens": addresses
          })
    })

    return await res.json();
}