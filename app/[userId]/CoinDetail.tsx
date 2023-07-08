import QuestionMark from "@/components/icons/QuestionMark";
import formatToken from "@/lib/formatToken";
import Image from "next/image";

export default function CoinDetail({detail, image = null, containsImage=false}: {detail: any, image?: string | null, containsImage?: boolean}){
    return (
        <div className="relative w-[140px] flex justify-center items-center">
            {containsImage && (
                image ?
                <Image alt="Coin Logo" src={image} width={30} height={30} className="rounded-md"/>
                : <QuestionMark />
            )}
            <h1 className="text-center w-[140px] text-lg font-semibold text-gray-800">{detail}</h1>
        </div>
    )
}