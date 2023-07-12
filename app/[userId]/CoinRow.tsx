export default function CoinRow({title, value}: {title:string, value: string}){
    return (
        <div className="flex justify-between">
            <h1 className="font-semibold text-sm text-gray-700">{title}</h1>
            <h1 className="font-bold text-sm text-gray-700">{value}</h1>
        </div>
    )
}