export default function getEthAddress(chain: string) {
    switch(chain) {
        case 'arbitrum':
            return '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1';
        case 'polygon':
            return '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619';
        default:
            return '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
    }
}