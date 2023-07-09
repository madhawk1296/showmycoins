export default function NoCoins(){
    return(
        <div className="relative w-full h-[500px] flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-semibold tracking-wider text-gray-800">
                Sorry! It looks like this wallet doesn't have any coins :(
            </h1>
            <h1 className="text-2xl font-semibold tracking-wider text-gray-600">
                Try another address!!
            </h1>
        </div>
    )
}