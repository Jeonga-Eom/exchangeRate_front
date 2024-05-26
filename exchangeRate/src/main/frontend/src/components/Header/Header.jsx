import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
    const [active, setActive] = useState("nav-menu");
    const [icon, setIcon] = useState("nav-toggler");
    const navigate = useNavigate();

    const navToggle = () => {
        if (active === "nav-menu") {
            setActive("nav-menu nav-active");
        } else setActive("nav-menu");

        // Icon Toggler
        if (icon === "nav-toggler") {
            setIcon("nav-toggler toggle");
        } else setIcon("nav-toggler");
    };

    const handleLoginClick = () => {
        navigate("/login"); // 로그인 페이지로 이동합니다.
    };

    return (
        <nav className="nav">
            <a href="#" className="nav-logo">Exchange Rate</a>
            <ul className={active}>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        목표 환율
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        환율 계산
                    </a>
                </li>
                <li className="nav-item">
                    <li>
                        <Link to={"/login"} className="nav-contact">로그인</Link>
                    </li>
                </li>
                <li className="nav-item">
                    <li>
                        <Link to={"/signup"} className="nav-contact">회원가입</Link>
                    </li>
                </li>

                {/*<li className="nav-item">*/}
                {/*    <button onClick={handleLoginClick} className="nav-contact">로그인</button>*/}
                {/*</li>*/}
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <div className="line4"></div>
            </div>
        </nav>
    );
}

export default Header;