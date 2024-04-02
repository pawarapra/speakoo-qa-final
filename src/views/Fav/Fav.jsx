import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Fav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';




class Square extends React.Component {
    render() {
      return (
        <div className={'square favcolor col-4'}>
          <img src={this.props.imageUrl} alt="Pic" />
          <h1>{this.props.text}</h1>
        </div>
      );
    }
  }
  
  const data = [
    { imageUrl: "image1.jpg", text: "Text 1" },
  ];






  
export default function Fav() {    
    const navigate = useNavigate();

    const squares = data.map((item, index) => (
        <Square key={index} imageUrl={item.imageUrl} text={item.text} />
      ));
    
    return (
        <div className='container'>
          <div className='favtop favcolor'>

                <div className="home-icon" onClick={() => navigate('/')}>

                    <FontAwesomeIcon icon={faChevronLeft} className="icon" />
                </div>
                <div className="middle-heading color-font">
                    <h1>Favorite</h1>
                </div>
            </div>
           

            <div className='bottom container-inner'>
                <div className="grid">
                    
                    {squares}
 
                </div>
      
            </div>

                
        </div>

    );
}



