import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Background from '../../images/bg.jpg';
import { connect } from 'react-redux';


const Register=(props)=> {
    return (
        <Section className="limiter">
                    <div class="container-login100">
                        <div class="wrap-login100">
                        
                            <form class="login100-form-register validate-form">
                                <span class="login100-form-title p-b-43">
                                    Register
                                </span>
                                <form action="" method="post">
                                <div className="row">
                                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                        <input class="input100" type="text" name="fname"/>
                                        <span class="focus-input100"></span>
                                        <span class="label-input100">FirstName</span>
                                    </div>
                                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                        <input class="input100" type="text" name="lname"/>
                                        <span class="focus-input100"></span>
                                        <span class="label-input100">LastName</span>
                                    </div>
                                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                        <input class="input100" type="email" name="email"/>
                                        <span class="focus-input100"></span>
                                        <span class="label-input100">Email</span>
                                    </div>
                                        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                            <input class="input100" type="text" name="phone"/>
                                            <span class="focus-input100"></span>
                                            <span class="label-input100">Phone Number</span>
                                        </div>
                                    
                                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                                        <input class="input100" type="password" name="pass"/>
                                        <span class="focus-input100"></span>
                                        <span class="label-input100">Password</span>
                                    </div>
                                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                                        <input class="input100" type="password" name="pass"/>
                                        <span class="focus-input100"></span>
                                        <span class="label-input100">Confirm Password</span>
                                    </div>

                                </div>
                                </form>

                        
                        

                                <div class="container-login100-form-btn">
                                    <button class="login100-form-btn">
                                        Register
                                    </button>
                                </div>
                                
                                
                                    <div class="text-center p-t-46 p-b-20">
                                        <Link to="/login">
                                            <span class="txt2">
                                                or Login
                                            </span>
                                        </Link>
                                    </div>
                            </form>
                        </div>
                    </div>
            </Section>

    )
}
// function mapDispatchToProps(dispatch){
//     return {
//         onSumit: ()=>{
//             dispatch({
//                 type: 'REGISTER',
//                 name, email, password, phonenumber
//             })
//         } 
//     }
// }

// export default connect(null, mapDispatchToProps)(Register);

export default Register;
const Section = styled.div`
.container-login100{
    background-image: url(${Background});
    background-size: cover;
    background-position: left top;
    height: 100%;
}
`;