import numeral from 'numeral'

export default function formatDollar(numValue: number){
    return numeral(numValue).format('$0,0.00')
}
