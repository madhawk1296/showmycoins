import getEthAddress from "./getEthAddress";
import getNativeToken from "./getNativeToken";

export default async function fetchNativeToken(userId: string, chain: string) {
    const res = await fetch(`https://deep-index.moralis.io/api/v2.2/${userId}/balance?chain=${chain}`, {
        headers: {
            'X-API-Key': process.env.MORALIS_API_KEY!
        }
    });

    const balance = await res.json();

    return {
        ...getNativeToken(chain),
        ...balance,
        possible_spam: false
    }
}