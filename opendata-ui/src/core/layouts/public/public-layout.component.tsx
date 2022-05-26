import React from 'react';
import './public-layout.component.scss';
import HeaderComponent from './components/header/header.component';
import { PublicRoutes } from '../../../router/router';
import FooterComponent from './components/footer/footer.component';
const PublicLayoutComponent = () => {


    return (
        <div className='public'>
            <HeaderComponent />
            <div className="container-fluid p-0">
                <div className={`public__content active`}>
                    <PublicRoutes from={'app'} to={'home'} />
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}


export default PublicLayoutComponent;

