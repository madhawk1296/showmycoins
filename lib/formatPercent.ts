import numeral from 'numeral'

export default function formatPercent(numValue: number): numeral{
    return numeral(numValue).format('%0,0.00')
}