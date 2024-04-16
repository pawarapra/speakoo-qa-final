import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

import headimg from '../../assets/img/imgheader/head.png';
import alphaimg from '../../assets/img/imgheader/alpha.png';
import betaimg from '../../assets/img/imgheader/beta.png';
import gammaimg from '../../assets/img/imgheader/gamma.png';
import favimg from '../../assets/img/imgheader/fav.png';

export default function Header() {
  // Hook to get current route
  const cRoute = useLocation();

  return (
    <div className='container'>
      <div className='grid'>
        <div className='col-0 col-1-sm col-2-md col-3-lg'></div>
        <div className='col-12 col-10-sm col-8-md col-6-lg contain'>
          <div className='hometop'>

          <img src={headimg} alt="Image" className="head-image" />

          </div>
          <div className='grid'>
            <div className='col-1'></div>
            <div className='homebottom container-inner col-10'>
            <div className="grid">
              <Link to="alpha" className={'homesquare col-6 alphacolor'} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="image-container">
                  <img src={alphaimg} alt="Image" className="centered-image" />

                <span className="link-text">
                  Basic <br />Conversation
                </span>
                </div>
              </Link>

              <Link to="beta" className={'homesquare col-6 betacolor'} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="image-container">
                  <img src={betaimg} alt="Beta Image" className="centered-image" />

                <span className="link-text">Emotions</span>
                </div>
              </Link>

              <Link to="gamma" className={'homesquare col-6 gammacolor'} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="image-container">
                  <img src={gammaimg} alt="Gamma Image" className="centered-image" />

                <span className="link-text">Food</span>            
                </div>
              </Link>

              <Link to="fav" className={'homesquare col-6 favcolor'} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="image-container">
                  <img src={favimg} alt="Fav Image" className="centered-image" />

                <span className="link-text">Favorites</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>

      
    </div>
  );
}
