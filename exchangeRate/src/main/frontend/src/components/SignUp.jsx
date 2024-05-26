import React from 'react';
import { FaUser, FaLock } from "react-icons/fa"
// import './signup.css';

function SignUp() {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Exchange Rate</h1>
                <div className="box">
                    <input type="text" placeholder="이름" required/>
                    <FaUser className='icon'/>
                </div>
                <div className="box">
                    <input type="text" placeholder="이메일" required/>
                    <FaUser className='icon'/>
                </div>
                <div className="box">
                    <input type="passwoord" placeholder="비밀번호" required/>
                    <FaLock className='icon'/>
                </div>
                <div className="box">
                    <input type="passwoord" placeholder="비밀번호 확인" required/>
                    <FaLock className='icon'/>
                </div>

                <button className="login" type="submit">회원가입</button>
                <div className="line">
                    <span className="line-text">또는</span>
                </div>
                {/*}
                <div className="social">
                    <button className="google" type="button" onClick={handleGoogleSingup}>
                        <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"/> 구글로 가입
                    </button>
                    <button className="kakao" type="button" onClick={handleKakaoSingup}>
                        <img className="social-img"
                             src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Kakao_Corp._symbol_-_2012.svg"/> 카카오로
                        가입
                    </button>
                </div>
                {*/}

                <div className="signUp">
                    <p>계정이 있으신가요? <a href="#">로그인</a></p>
                </div>
            </form>
        </div>
    );
}

export default SignUp;