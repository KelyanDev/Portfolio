import { useEffect, useState } from "react";

export default function Topbar({ SidebarToggle }) {
    const [isClicked, setIsClicked] = useState(false);
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

    function manageClick() {
        setIsClicked(true);

        const timeout = setTimeout(() => {
            SidebarToggle();
            setIsClicked(false);
        }, 100);

        return () => clearTimeout(timeout)
    }


    return (
        <div className={`topbar ${scrolled ? "scrolled" : ""}`}>
            <div className="topbarLeft">
                <i className={`bx bx-list-ul ${isClicked ? "clicked" : ""}`} onClick={manageClick}></i>
            </div>
            <div className="topbarRight">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
            </div>
        </div>
    );
}