import React from 'react';
import { FaUser, FaLock } from "react-icons/fa"
import './login.css';

function Login() {
    return(
        <div className="wrapper">
            <form action="">
                <h1>Exchange Rate</h1>
                <div className="box">
                    <input type="text" placeholder="아이디" required/>
                    <FaUser className='icon'/>
                </div>
                <div className="box">
                    <input type="passwoord" placeholder="비밀번호" required/>
                    <FaLock className='icon'/>
                </div>

                <button className="login" type="submit">로그인</button>
                <div className="line">
                    <span className="line-text">또는</span>
                </div>
                {/*}
                <div className="social">
                    <button className="google" type="button" onClick={handleGoogleLogin}>
                        <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"/> 구글 로그인
                    </button>
                    <button className="kakao" type="button" onClick={handleKakaoLogin}>
                        <img className="social-img"
                             src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Kakao_Corp._symbol_-_2012.svg"/> 카카오
                        로그인
                    </button>
                </div>
                {*/}
                <div className="signUp">
                    <p>계정이 없으신가요? <li><a href="/signup">회원가입</a></li></p>
                    <p>비밀번호를 잊으셨나요? <a href="#">비밀번호 찾기</a></p>
                </div>
            </form>
        </div>
);
}
export default Login;