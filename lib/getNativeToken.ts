export default function getNativeToken(chain: string) {
    switch(chain) {
        case 'arbitrum':
            return {
                logo: '/ethereum.webp',
                address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
                name: "Eth",
                symbol: "AETH"
            };
        case 'polygon':
            return {
                logo: '/polygon.webp',
                address: '0x0000000000000000000000000000000000001010',
                name: "Polygon",
                symbol: "MATIC"
            };
        default:
            return {
                logo: '/ethereum.webp',
                address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                name: "Eth",
                symbol: "ETH"
            };
    }
}