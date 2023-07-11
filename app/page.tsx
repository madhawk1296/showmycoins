import Panel from "./Panel";

export default function Home(){
    return (
        <div className="relative px-[10px] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 md:pt-[70px]">
            <Panel color="blue" title="TRACK YOUR COINS ACROSS ALL ETHEREUM CHAINS" />
            <Panel color="yellow" title="SEARCH FOR ANY WALLET ON THE BLOCKCHAIN" />
            <Panel color="red" title="MANAGE YOUR PORTFOLIO WITH EASE" />
        </div>
    )
}