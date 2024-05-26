import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="copyright">
                Copyright{' '} &copy;
                <strong>
                    <span> 2024 IBK TeamFive. </span>
                </strong>
                All rights reserved.
            </div>

            <div className="credits">
                Designed by <a href="#">TeamFive</a>
            </div>
        </footer>
    );
}
export default Footer;