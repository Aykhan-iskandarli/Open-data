import MHM_src from '../../assets/images/mhm.png';
import not_found from '../../assets/images/notfound.svg';
import './not_found.component.scss';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <>
        <div
          className='error-page'
          style={{
            backgroundImage: `url("${not_found}")`,
          }}
        >
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-4 mr-auto mt-5 text-md-left text-center'>
                <Link to='/' className=''>
                  <img alt='logo' src={MHM_src} className='theme-logo' />
                </Link>
              </div>
            </div>
          </div>
          <div className='container-fluid error-content'>
            <div className=''>
              <h1 className='error-content__number'>404</h1>
              <p className='error-content__mini-text mb-0 mt-0'>Ooops!</p>
              <p className='error-content__error-text'>
                The page you requested was not found!
              </p>
              <Link to='/' className='btn btn--primary'>
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default NotFound;
