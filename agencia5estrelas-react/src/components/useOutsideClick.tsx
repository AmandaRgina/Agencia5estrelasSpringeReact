import { useState, useEffect } from "react";
import React from 'react'

export const useOutsideClick = (el: { current: { contains: (arg0: any) => any; } | null; }, initialState: any) => {

    const [isActive, setIsActive] = useState(initialState)

    useEffect(() => {

        const onClick = (e: { target: any; }) =>{

            if(el.current !== null && !el.current.contains(e.target)){

                setIsActive(!isActive);
            }
        }
    
    if(isActive){

        window.addEventListener("click", onClick);
    }

    return () => {


        window.removeEventListener("click", onClick);
    }


    }, [isActive, el])

    return [isActive, setIsActive]

}