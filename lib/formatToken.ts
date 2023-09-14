import numeral from 'numeral'
import { utils } from 'web3';


export default function formatToken(numValue: number){
    const ethAmount = utils.fromWei(numValue, 'ether');
    return numeral(ethAmount).format('0,0.[0000]')
}