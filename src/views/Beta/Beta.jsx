import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Beta.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import happy from '../../assets/img/emo/happy.png';
import sad from '../../assets/img/emo/sad.png';
import joyful from '../../assets/img/emo/joyful.png';
import flustered from '../../assets/img/emo/flustered.png';
import touched from '../../assets/img/emo/touched.png';
import angry from '../../assets/img/emo/angry.png';
import worried from '../../assets/img/emo/worried.png';
import delicious from '../../assets/img/emo/delicious.png';
import ashamed from '../../assets/img/emo/ashamed.png';
import afraid from '../../assets/img/emo/afraid.png';
import desired from '../../assets/img/emo/desired.png';
import confused from '../../assets/img/emo/confused.png';

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
      <div className={'square betacolor col-4'} onClick={() => speakText(speaktext)}>
        <div className={'centerpic centerpic2'}>
          <img src={imageUrl} alt="Pic" className="centered-image" />
          <h1>{text}</h1>
        </div>
      </div>
    );
  }
}

const data = [
  { imageUrl: happy, text: "Happy", speaktext: "I feel happy" },
  { imageUrl: sad, text: "Sad", speaktext: "I feel sad" },
  { imageUrl: joyful, text: "Joyful", speaktext: "I feel joyful" },
  { imageUrl: flustered, text: "Flustered", speaktext: "I feel flustered" },
  { imageUrl: touched, text: "Touched", speaktext: "I feel touched" },
  { imageUrl: angry, text: "Angry", speaktext: "I feel angry" },
  { imageUrl: worried, text: "Worried", speaktext: "I feel worried" },
  { imageUrl: delicious, text: "Delicious", speaktext: "I feel delicious" },
  { imageUrl: ashamed, text: "Ashamed", speaktext: "I feel ashamed" },    
  { imageUrl: afraid, text: "Afraid", speaktext: "I feel afraid" },
  { imageUrl: desired, text: "Desired", speaktext: "I feel desired" },
  { imageUrl: confused, text: "Confused", speaktext: "I feel confused" },
];

export default function Beta() {    
  const navigate = useNavigate();

  const squares = data.map((item, index) => (
    <Square key={index} imageUrl={item.imageUrl} text={item.text} speaktext={item.speaktext} />
  ));
    
  return (
    <div className='container'>
      <div className='betatop betacolor'>
        <div className="home-icon" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faChevronLeft} className="icon" />
        </div>
        <div className="middle-heading color-font">
          <h1>Emotions</h1>
        </div>
      </div>
          
      <div className='bottom container-inner'>
        <div className="grid">
          {squares}
        </div>

        <div className="button-wrapper">
          <div className="otherpage-icon" onClick={() => navigate('/Alpha')}>
            <div className="button-content-left button-color">
              <FontAwesomeIcon icon={faChevronLeft} className="icon" />
              <span>Basic <br  />Conversations</span>
            </div>
          </div>
          <div className="otherpage-icon" onClick={() => navigate('/Gamma')}>
            <div className="button-content-right button-color">
              <span>Food</span>
              <FontAwesomeIcon icon={faChevronRight} className="icon" /> 
            </div>
          </div>        
        </div>        
      </div>
    </div>
  );
}
