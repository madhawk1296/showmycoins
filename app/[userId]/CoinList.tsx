'use client'

import filterCoins from "@/lib/filterCoins";
import Coin from "./Coin";
import TitleName from "./TitleName";
import { useContext } from "react";
import MobileContext from "@/components/hooks/MobileContext";
import CoinListMobile from "./CoinListMobile";
import CoinListDesktop from "./CoinListDesktop";

export default function CoinList({coins, total}: {coins: any, total: number}){
    const { isMobile } = useContext(MobileContext)


    console.log(isMobile)
    return isMobile ? <CoinListMobile coins={coins} total={total}/> : <CoinListDesktop coins={coins} total={total}/>
}