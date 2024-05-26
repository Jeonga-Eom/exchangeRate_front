import React from 'react';
import './logo.css';

function Logo() {
    return (
        <div className="d-flex align-items-lg-center justify-content-between">
            <a href="/frontend/public" className="logo d-flex align-items-lg-center">
                {/* <img src="" alt=""/> */}
                <span className="d-none d-lg-block">Exchange Rate</span>
            </a>
        </div>
    );
}

export default Logo;