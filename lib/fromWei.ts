import { utils } from 'web3';

export default function fromWei(value: string) {
    return utils.fromWei(value, 'ether');
}