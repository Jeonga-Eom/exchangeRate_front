import React, { useState } from "react";
import './nav.css';
import NavAvatar from "./NavAvatar";
import NavNotice from "./NavNotice";
import Login from "../Login";
import SignUp from "../SignUp";

function Nav() {
    // useState(true) -> 로그인
    // useState(false) -> 로그아웃
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogin = () => {
        // 로그인 처리 로직
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // 로그아웃 처리 로직
        setIsLoggedIn(false);
    };

    return (
        <nav className="header-nav align-items-lg-center justify-content-between">
            <ul className="d-flex align-items-center">
                {isLoggedIn ? (
                    <>
                        <NavNotice />
                        <NavAvatar onLogout={handleLogout} />
                    </>
                ) : (
                    <>
                        <Login onLogin={handleLogin} />
                        <SignUp />
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Nav;
