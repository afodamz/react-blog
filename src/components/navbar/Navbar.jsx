import React from 'react'
// import logo from './logo.svg'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar() {
    return (
        <NavWrapper className="main-nav">
                <ul className="navbar-nav mr-5 align-center">
                    <li className="nav-item ml-5"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item ml-5"><Link to="/Login" className="nav-link">Login</Link></li>
                    <li className="nav-item ml-5"><Link to="/Register" className="nav-link">Register</Link></li>
                </ul>
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
background: var(--skyeBlue)!important;
color: var(--mainWhite)!important;
display: flex!important;
padding: 1.2rem;
justify-content: space-between;
color: var(--mainWhite)!important;
font-size: 1.3rem;
.navbar-nav{
    dispaly: flex!important;
    justify-content: center;
    flex-direction: row;
    margin-left: 6rem;
    color: var(--mainWhite)!important;
}
.navbar-nav .nav-item .nav-link{
    color:#fff!important;
}

.navbar-nav .nav-item .nav-link:hover{
    color: #8a3d3d!important;
	margin: 0px;
	transition: all 0.4s;
	-webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
}
`;