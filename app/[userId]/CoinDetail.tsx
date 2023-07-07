import formatToken from "@/lib/formatToken";

export default function CoinDetail({detail}: {detail: any}){
    return (
        <h1 className="text-center w-[140px] text-lg font-semibold text-gray-800">
            {detail}
        </h1>
    )
}