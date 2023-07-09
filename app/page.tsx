import Panel from "./Panel";

export default function Home(){
    return (
        <div className="relative flex items-center justify-center gap-20 pt-[70px]">
            <Panel color="blue" title="TRACK YOUR COINS ACROSS ALL ETHEREUM CHAINS" />
            <Panel color="yellow" title="SEARCH FOR ANY WALLET ON THE BLOCKCHAIN" />
            <Panel color="red" title="MANAGE YOUR PORTFOLIO WITH EASE" />
        </div>
    )
}