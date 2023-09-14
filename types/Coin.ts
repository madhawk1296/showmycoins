export type Coin = {
    address: string,
    symbol: string,
    name: string,
    logo: string | null,
    thumbnail: string | null,
    decimals: number,
    balance: string,
    possible_spam: boolean,
    chain: string,
    dollarValue: number,
    price: number
}