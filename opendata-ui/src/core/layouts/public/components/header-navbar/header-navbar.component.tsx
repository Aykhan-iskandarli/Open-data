import React from 'react';
import logo from '../../../../../assets/images/opd-logo.svg';
import './header-navbar.component.scss';
import HeaderRightComponent from '../header-right/header-right.component';
import { Link  } from 'react-router-dom';

const HeaderNavbarComponent = () => {
    return (
        <div className='container header-navbar py-26'>
            <div className='row'>
                <div className='col-lg-2'>
                    <div className='header-navbar__left'>
                        <Link to={'/'} > <img src={logo} alt='deed' /></Link>
                    </div>
                </div>
                <div className='col-lg-10 ml-auto'>
                    <div className='header-navbar__right'>
                        <HeaderRightComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderNavbarComponent;
