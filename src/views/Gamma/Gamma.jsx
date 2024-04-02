import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Gamma.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import bread from '../../assets/img/food/bread.png';
import milk from '../../assets/img/food/milk.png';
import egg from '../../assets/img/food/egg.png';
import tomato from '../../assets/img/food/tomato.png';
import salad from '../../assets/img/food/salad.png';
import fries from '../../assets/img/food/fries.png';
import sandwich from '../../assets/img/food/sandwich.png';
import rice from '../../assets/img/food/rice.png';
import beef from '../../assets/img/food/beef.png';
import chicken from '../../assets/img/food/chicken.png';
import noodle from '../../assets/img/food/noodle.png';
import pizza from '../../assets/img/food/pizza.png';

// Function to speak the text using Web Speech API
const speakText = (text) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
};

class Square extends React.Component {
  render() {
    const { imageUrl, text, speaktext } = this.props;
    return (
      <div className={'square gammacolor col-4'} onClick={() => speakText(speaktext)}>
        <div className={'centerpic'}>
          <img src={imageUrl} alt="Pic" className="centered-image"/>
          <h1>{text}</h1>
        </div>
      </div>
    );
  }
}
  
const data = [
  { imageUrl: bread, text: "Bread", speaktext: "I love bread" },
  { imageUrl: milk, text: "Milk", speaktext: "I want some milk" },
  { imageUrl: egg, text: "Egg", speaktext: "I like eggs" },
  { imageUrl: tomato, text: "Tomato", speaktext: "Tomatoes are delicious" },
  { imageUrl: salad, text: "Salad", speaktext: "I enjoy eating salad" },
  { imageUrl: fries, text: "Fries", speaktext: "I crave some fries" },
  { imageUrl: sandwich, text: "Sandwich", speaktext: "A sandwich sounds good" },
  { imageUrl: rice, text: "Rice", speaktext: "I want to eat rice" },
  { imageUrl: beef, text: "Beef", speaktext: "Beef is tasty" },    
  { imageUrl: chicken, text: "Chicken", speaktext: "I like chicken" },
  { imageUrl: noodle, text: "Noodle", speaktext: "Noodles are yummy" },
  { imageUrl: pizza, text: "Pizza", speaktext: "I want pizza for dinner" },
];

export default function Gamma() {    
  const navigate = useNavigate();

  const squares = data.map((item, index) => (
    <Square key={index} imageUrl={item.imageUrl} text={item.text} speaktext={item.speaktext} />
  ));
    
  return (
    <div className='container'>
      <div className='gammatop gammacolor'>
        <div className="home-icon" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faChevronLeft} className="icon" />
        </div>
        <div className="middle-heading color-font">
          <h1>Food</h1>
        </div>
      </div>
          
      <div className='bottom container-inner'>
        <div className="grid">
          {squares}
        </div>

        <div className="button-wrapper">
          <div className="otherpage-icon" onClick={() => navigate('/Beta')}>
            <div className="button-content-left button-color">
              <FontAwesomeIcon icon={faChevronLeft} className="icon" />
              <span>Emotions</span>
            </div>
          </div>
          <div className="otherpage-icon" onClick={() => navigate('/Alpha')}>
            <div className="button-content-right button-color">
              <span>Basic <br  />Conversations</span>
              <FontAwesomeIcon icon={faChevronRight} className="icon" /> 
            </div>
          </div>        
        </div>        
      </div>
    </div>
  );
}
