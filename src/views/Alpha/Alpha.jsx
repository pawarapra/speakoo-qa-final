import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Alpha.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import yes from '../../assets/img/conver/yes.png';
import no from '../../assets/img/conver/no.png';
import thank from '../../assets/img/conver/thank.png';
import sorry from '../../assets/img/conver/sorry.png';
import hot from '../../assets/img/conver/hot.png';
import cold from '../../assets/img/conver/cold.png';
import eat from '../../assets/img/conver/eat.png';
import drink from '../../assets/img/conver/drink.png';
import bath from '../../assets/img/conver/bath.png';
import toilet from '../../assets/img/conver/toilet.png';
import play from '../../assets/img/conver/play.png';
import sleep from '../../assets/img/conver/sleep.png';

const favorites = [];

// Function to speak the text using Web Speech API
const speakText = (text) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
};

class Square extends React.Component {
  handleClick = () => {
    const { speaktext, text, id } = this.props;
    speakText(speaktext);

    favorites.push(id);
    console.log(favorites);
  };

  render() {
    const { imageUrl, text } = this.props;
    return (
      <div className={'square alphacolor col-4'} onClick={this.handleClick}>
        <div className={'centerpic'}>
          <img src={imageUrl} alt="Pic" className="centered-image"/>
          <h1>{text}</h1>
        </div>
      </div>
    );
  }
}



const data = [
  { imageUrl: yes, text: "Yes", speaktext: "Yes", id: 1},
  { imageUrl: no, text: "No", speaktext: "No", id: 2},
  { imageUrl: thank, text: "Thanks", speaktext: "Thank you" },
  { imageUrl: sorry, text: "Sorry", speaktext: "I'm sorry" },
  { imageUrl: hot, text: "Hot", speaktext: "It's hot" },
  { imageUrl: cold, text: "Cold", speaktext: "It's cold" },
  { imageUrl: eat, text: "Eat", speaktext: "I want to eat" },
  { imageUrl: drink, text: "Drink", speaktext: "I want to drink" },
  { imageUrl: bath, text: "Bath", speaktext: "I want to take a bath" },
  { imageUrl: toilet, text: "Toilet", speaktext: "I need to use the toilet" },
  { imageUrl: play, text: "Play", speaktext: "Let's play" },
  { imageUrl: sleep, text: "Sleep", speaktext: "I want to sleep" },
];

export default function Alpha() {
  const navigate = useNavigate();

  const squares = data.map((item, index) => (
    <Square key={index} imageUrl={item.imageUrl} text={item.text} speaktext={item.speaktext} id={item.id}/>
  ));

  return (
    <div className='container'>
      <div className='alphatop alphacolor'>
        <div className="home-icon" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faChevronLeft} className="icon" />
        </div>
        <div className="middle-heading color-font">
          <h1>Basic <br />Conversation</h1>
        </div>
      </div>

      <div className='bottom container-inner'>
        <div className="grid">
          {squares}
        </div>

        <div className="button-wrapper">
          <div className="otherpage-icon" onClick={() => navigate('/Gamma')}>
            <div className="button-content-left button-color">
              <FontAwesomeIcon icon={faChevronLeft} className="icon" />
              <span>Food</span>
            </div>
          </div>
          <div className="otherpage-icon" onClick={() => navigate('/Beta')}>
            <div className="button-content-right button-color">
              <span>Emotions</span>
              <FontAwesomeIcon icon={faChevronRight} className="icon" /> 
            </div>
          </div>        
        </div>        
      </div>
    </div>
  );
}
