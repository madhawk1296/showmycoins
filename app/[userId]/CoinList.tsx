'use client'

import filterCoins from "@/lib/filterCoins";
import TitleName from "./TitleName";
import { useContext } from "react";
import MobileContext from "@/components/hooks/MobileContext";
import CoinListMobile from "./CoinListMobile";
import CoinListDesktop from "./CoinListDesktop";
import { Coin } from "@/types/Coin";

export default function CoinList({coins, total}: {coins: Coin[], total: number}){
    const { isMobile } = useContext(MobileContext)
    return isMobile ? <CoinListMobile coins={coins} total={total}/> : <CoinListDesktop coins={coins} total={total}/>
}