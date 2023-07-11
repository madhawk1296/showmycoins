'use client'

import MobileContext from "@/components/hooks/MobileContext";
import isMobileSize from "@/lib/isMobileSize"
import { useEffect, useState } from "react"

export default function Providers({children}: {children: any}){
    const [isMobile, setIsMobile] = useState(false)
    
    const handleResize = () => {
        setIsMobile(isMobileSize());
    };

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <MobileContext.Provider value={{isMobile}}>
            {children}
        </MobileContext.Provider>
    )
}