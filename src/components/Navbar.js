import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';


export default class Navbar extends Component {

    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <span className="navbar-logo">Logo</span>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Smartphones
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <span className="mr-2 nav-btn">
                        <i className="fas fa-cart-plus" />
                    </span>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--darkBlue);
    
    .nav-btn {
        font-size: 24px;
        color: var(--mainGrey);
    }
    
    .nav-btn:hover {
        color: var(--mainWhite);
    }
    
    .navbar-logo {
        color: var(--mainYellow);
        font-size: 30px;
    }
    
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    
    }
`;