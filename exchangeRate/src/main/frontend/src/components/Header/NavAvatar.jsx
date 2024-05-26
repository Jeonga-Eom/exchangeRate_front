import React, {Suspense} from "react";
import profileImg from '../../image/user.jpg';
import './nav.css';
import './navavatar.css';
function NavAvatar() {
    return (
        <li className="nav-item dropdown pe-3" >
            <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown">
                <img src={profileImg} alt="Profile" className="rounded-circle profile-img" style={{ width: '28px', height: '28px' }}/>
                <span className="d-none d-md-block dropdown-toggle ps-2">User 1</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                    <h6>User name</h6>
                    <span>User information</span>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>

                <li>
                    <a
                        className="dropdown-item d-flex align-items-center"
                        href="users-profile.html"
                    >
                        <i className="bi bi-person"></i>
                        <span>User profile</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>

                <li>
                    <a
                        className="dropdown-item d-flex align-items-center"
                        href="users-profile.html"
                    >
                        <i className="bi bi-person"></i>
                        <span>Account Settings</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>

                <li>
                    <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                    >
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>
            </ul>
        </li>
    );
}

export default NavAvatar;