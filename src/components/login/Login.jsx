import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../images/bglg.jpg';

export default function Login(props) {
    const [enteredEmail, setEmail] = useState('');
    const [enteredpassword, setPassword] = useState('');
    
    const handleEmailInput = (evt)=>{
        const value = evt.target.value;
        setEmail(value);
    }
    const handlePasswordInput =(evt)=>{
        const value = evt.target.value;
        setPassword(value);
        document.getElementById("Button").disabled = false;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log({enteredEmail});
        console.log({enteredpassword});
        if (enteredEmail !== "munna@gmail.com" && enteredpassword.value !== "whatsoever"){
            alert("email and password incorrect");
        }else{
            return props.history.push('/Main');
        }
        
    }



    return (
        <Section className="limiter">
                <div className="container-login100">
                    {/* <Link to="/Main">
                        <button className="btn btn-success" id="mainbtn">
                            Main Page
                        </button>
                    </Link> */}
                    <div className="wrap-login100">
                        <form className="login100-form validate-form" action={handleSubmit}>
                            <span className="login100-form-title p-b-43">
                                Login
                            </span>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input onChange={handleEmailInput} value={enteredEmail} className="input100" type="text" name="email" required/>
                                    <span className="focus-input100"></span>
                                    <span className="label-input100">Email</span>
                                </div>
                                
                                
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <input className="input100" value={enteredpassword} onChange={handlePasswordInput} type="password" name="pass" required/>
                                    <span className="focus-input100"></span>
                                    <span className="label-input100">Password</span>
                                </div>

                                <div className="flex-sb-m w-full p-t-3 p-b-32">
                                    <div className="contact100-form-checkbox">
                                        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                                        <label className="label-checkbox100" for="ckb1">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                        
                                
                                <div className="container-login100-form-btn">
                                    <button id="Button" className="login100-form-btn" typeof="submit">
                                    Login
                                    </button>
                                </div>
                                
                            </form>
                            <div className="text-center p-t-46 p-b-20">
                                <Link to="/register">
                                    <span className="txt2">
                                        or sign up
                                    </span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
        </Section>
        
    )
}


const Section = styled.div`
.container-login100{
    background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${Background});
    background-size: cover;
    background-position: left top;
    height: 100%;
`;

