export default async function fetchChainCoins(userId: string, chainId: string, repeat=false) {
    const res = await fetch(`https://api.n.xyz/api/v1/address/${userId}/balances/fungibles?chainID=${chainId}&filterDust=false&filterSpam=false&apikey=${process.env.NXYZ_API}`, {next: { revalidate: 10 }})

    if (res.status === 429) {
        if(repeat) {
            // Wait for 1 second
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Retry the request
            return fetchChainCoins(userId, chainId, false);
            } else {
            return []
            }
    }

    return res.json()
}