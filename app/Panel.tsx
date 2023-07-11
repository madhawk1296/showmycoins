export default function Panel({color, title}: {color: string, title: string}){
    const colorBackground: {[key: string]: string} = {
        blue: "bg-gradient-to-b from-blue-600 to-blue-400",
        yellow: "bg-gradient-to-b from-green-600 to-green-400",
        red: "bg-gradient-to-b from-red-600 to-red-400"
    }
    const colorBorder : { [key: string]: string } = {
        blue: "border-blue-400",
        yellow: "border-green-400",
        red: "border-red-400"
    }


    return(
        <div className={`w-full md:w-[300px] h-[120px] md:h-[500px] border-2 rounded-xl ${colorBackground[color]} ${colorBorder[color]} py-[20px] px-[5px] flex flex-col items-center justify-center transition-all duration-200 shadow-sm hover:shadow-lg`}>
            <h1 className="text-white font-semibold text-xl text-center tracking-widest leading-loose">
                {title}
            </h1>
        </div>
    )
}