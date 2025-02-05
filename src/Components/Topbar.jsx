import { useEffect, useState } from "react";

export default function Topbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className={`topbar ${scrolled ? "scrolled" : ""}`}>
            
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        </div>
    );
}