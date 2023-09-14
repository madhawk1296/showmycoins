import { Coin } from "@/types/Coin";
import fetchNativeToken from "./fetchNativeToken";
import fetchTokens from "./fetchTokens";

export default async function fetchCoins(userId: string, chain: string): Promise<Coin[]> {
    const coins = await fetchTokens(userId, chain);
    const eth = await fetchNativeToken(userId, chain);
    
    return [...coins, eth]
    .filter((coin: any) => coin.possible_spam == false && !coin.token_address)
    .map((coin: any) => {
        return {address: coin.token_address ,chain, ...coin}
    }); 
}