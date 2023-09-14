import QuestionMark from "@/components/icons/QuestionMark";
import formatToken from "@/lib/formatToken";
import Image from "next/image";

export default function CoinDetail({detail, image = null, containsImage=false, isGreen=false}: {detail: any, image?: string | null, containsImage?: boolean, isGreen?: boolean}){
    return (
        <div className="relative flex justify-center items-center gap-10">
            {containsImage && (
                image ?
                <Image alt="Coin Logo" src={image} width={30} height={30} className="rounded-md"/>
                : <QuestionMark />
            )}
            {isGreen ? <h1 className="text-center text-md font-semibold text-green-600">{detail}</h1>: <h1 className="text-center text-md font-semibold text-gray-800">{detail}</h1>}
        </div>
    )
}