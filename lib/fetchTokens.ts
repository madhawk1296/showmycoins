import { EvmChain } from "@moralisweb3/common-evm-utils";

export default async function fetchTokens(userId: string, chain: string) {
    const res = await fetch(`https://deep-index.moralis.io/api/v2.2/${userId}/erc20?chain=${chain}`, {
        headers: {
            'X-API-Key': process.env.MORALIS_API_KEY!
        }
    })

    return await res.json();
}