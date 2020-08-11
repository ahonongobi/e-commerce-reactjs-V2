import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import {ButtonContainer} from './Button';
import "./navbar.css";
import img from '../logo2.png';


class navbar extends Component {
    render() {
        return (
        <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      <Link to="/">
          <img src={img} alt="store" height="60px" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
            Products
              </Link>
          </li>
      </ul>
      <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
              
           <p className="contactez">Contact:<img alt="contact"  src="phone.png" width="10" height="10" />abyssiniea@gmail.com</p> 
              
          </li>
      </ul>
      <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
              
           <p  className="contactez">programming by:Gobi abyssinie</p> 
              
          </li>
      </ul>
      <Link to="/cart" className="ml-auto">
          <ButtonContainer>
              <span className="mr-2">
              <img alt="cart" src="shopping.png" width="50" height="50" className="fas fa-cart-plus" />
              </span>
              my cart
          </ButtonContainer>
      </Link>
        </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{ 
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize;
    display:flex;
    justify-content:space-between;
}
@media (max-width: 767px) {
    .contactez {
        margin-right: 20px;

        
    }
}
`;


export default navbar;