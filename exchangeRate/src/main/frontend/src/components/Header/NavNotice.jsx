import React, { useState } from "react";
import './nav.css';
import './navnotice.css';

function NavNotice() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <li className="nav-item dropdown" onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
            <a className="nav-link nav-icon" href="#" onClick={handleMenuToggle}>
                <i className="bi bi-bell" style={{ width: '28px', height: '28px' }}></i>
                {/* 알림 개수*/}
                <span className="badge bg-primary badge-number">2</span>
            </a>

            <ul className={"dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications" + (isMenuOpen ? " show" : "")}>
                <li className="dropdown-header">
                    You have 2 new notifications
                    <a href="#">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            View all
                        </span>
                    </a>
                </li>
                {/* 알림 메뉴 내의 아이템 추가 divider, item */}
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Item example 1</h4>
                        <p>example 1 contents</p>
                        <p>example 1 time</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Item example 2</h4>
                        <p>example 2 contents</p>
                        <p>example 2 time</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                </li>
            </ul>
        </li>
    );
}

export default NavNotice;