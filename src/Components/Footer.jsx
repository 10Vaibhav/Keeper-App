import {useState, useEffect} from "react";

export function Footer(){

    const [currentYear, setCurrentYear] = useState(0);

    useEffect(()=>{
        setCurrentYear(new Date().getFullYear())
    }, [])

    return <footer>
        <p>Copyright © {currentYear}</p>
    </footer>
}

