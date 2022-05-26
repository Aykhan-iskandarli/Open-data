import React from 'react';
import HeaderNavbarComponent from '../header-navbar/header-navbar.component';
import './header.component.scss';

const HeaderComponent = ()=> {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-0">
                            <HeaderNavbarComponent/>
                        </div>
                    </div>
                </div>
            </div>
        );
}


export default HeaderComponent;
