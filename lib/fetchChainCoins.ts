export default async function fetchChainCoins(userId: string, chainId: string): Promise<JSON>{
    const res = await fetch(`https://api.n.xyz/api/v1/address/${userId}/balances/fungibles?chainID=${chainId}&filterDust=false&filterSpam=false&apikey=${process.env.NXYZ_API}`, {next: { revalidate: 10 }})

    if (res.status === 429) {
        // Wait for 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Retry the request
        return fetchChainCoins(userId, chainId);
    }

    return res.json()
}