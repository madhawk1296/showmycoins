export default function getFiat(fiat: any): number{
    return fiat ? fiat[0].tokenValue : 0
}