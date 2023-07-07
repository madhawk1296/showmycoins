export default async function fetchCoins(userId: string){
    return await (
        await fetch(`https://api.n.xyz/api/v1/address/${userId}/balances/fungibles?chainID=arbitrum&filterDust=false&filterSpam=false&apikey=${process.env.NXYZ_API}`, {next: { revalidate: 10 }})
    ).json();
}
