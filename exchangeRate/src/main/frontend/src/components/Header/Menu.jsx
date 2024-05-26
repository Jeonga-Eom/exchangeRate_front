import React from "react";
import './menu.css';

function Menu() {
    return (
        <div className="menu d-flex align-items-lg-center">
            <a href="#" className="menu-item d-flex align-items-lg-center">
                {/* <img src="" alt=""/> */}
                <span className="d-none d-lg-block">환율 계산</span>
            </a>
            <a href="#" className="menu-item d-flex align-items-lg-center">
                {/* <img src="" alt=""/> */}
                <span className="d-none d-lg-block">목표 환율</span>
            </a>
        </div>
    );
}

export default Menu;