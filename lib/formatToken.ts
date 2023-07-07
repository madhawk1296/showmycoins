import numeral from 'numeral'

export default function formatToken(numValue: number): numeral{
    return numeral(numValue).format('0,0.[0000]')
}