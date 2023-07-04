export default async function fetchCoins(){
    return await (await fetch('https://api.n.xyz/api/v1/address/0x309BCc55Fe9cCa749cff42eb94a846823d27bce6/balances/fungibles?chainID=arbitrum&filterDust=false&filterSpam=false&apikey=b048d474-25ed-4952-ae01-138f3ec91a0c')).json();
}