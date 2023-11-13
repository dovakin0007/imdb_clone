"use client"

import {MdOutlineLightMode} from 'react-icons/md';
import {BsFillMoonFill} from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export default function DarkModeSwitch(){
    const {systemTheme, theme, setTheme} = useTheme();

    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(()=>{
        setMounted(true);
    },[])
    return (
        <>
        {
            mounted && (currentTheme === "dark" ? (
                <MdOutlineLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => {
                    setTheme("light")
                    }
                }/>
            ) : (
                <BsFillMoonFill className="text-xl cursor-pointer hover:text-amber-500" onClick={ () => {
                    setTheme("dark")
                }
                 }/>
            ))
        }
        </>
    )
}