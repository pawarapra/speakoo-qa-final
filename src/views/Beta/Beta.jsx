// CG: need useState and useEffect
import React, {useState, useEffect} from 'react';
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
  
  handleClick = () => {
    const { speaktext, text } = this.props;
    speakText(speaktext);
  };

  handleButtonClick = () => {
    // CG: get the getter and setter for the state
    const { id, dataGetRef, dataSetRef } = this.props;

    // Retrieve favorites array from localStorage
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // CG: make a local copy of the data array since we can't set it by ref
    let dataCopy = [...dataGetRef]; 

    // CG: then update the fav for a given id
    for(let i=0; i < dataCopy.length; i++){

      if(dataCopy[i].id === id ){
        dataCopy[i].fav = !dataCopy[i].fav;
      }
    }

    // CG: update the state data in Alpha
    dataSetRef(dataCopy);

    // Check if id is present in favorites array
    const idExistsInFavorites = favorites.includes(id);

    if (idExistsInFavorites) {
      // Remove id from favorites array
      const index = favorites.indexOf(id);
      favorites.splice(index, 1);
      console.log("Removed " + id + " from favorites array");
      window.location.reload();

  } else {
      // Add id to favorites array
      favorites.push(id);
      console.log("Added " + id + " to favorites array");
      window.location.reload();
  }

    // Update favorites array in localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Log the updated favorites array
    console.log("Updated favorites array in localStorage:", localStorage.getItem("favorites"));

  }

 render() {
    const { imageUrl, text, fav, id } = this.props;

    return (
      <div className={'square alphacolor col-4'} onClick={this.handleClick}>
        <div className={'centerpic'}>
          <img src={imageUrl} alt="Pic" className="centered-image"/>
          <h1>{text}</h1>
        </div>

        <svg className="star-button" xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none" onClick={this.handleButtonClick}>
          <g filter="url(#filter0_d_1_120)">
          <rect x="4" width="29" height="28" rx="14" fill={fav ? "#FFE48A" : "#F8E1F7"}/>
          </g>
          <path d="M17.0595 9.23778C17.6059 7.82412 17.8791 7.11728 18.323 7.01932C18.4397 6.99356 18.5603 6.99356 18.677 7.01932C19.1209 7.11728 19.3941 7.82412 19.9405 9.23778C20.2513 10.0417 20.4066 10.4437 20.6974 10.7171C20.7789 10.7938 20.8674 10.8621 20.9617 10.921C21.2977 11.1312 21.7171 11.1702 22.5561 11.2481C23.9762 11.3801 24.6863 11.4461 24.9031 11.8663C24.948 11.9533 24.9786 12.0475 24.9935 12.145C25.0653 12.6158 24.5433 13.1086 23.4993 14.0943L23.2094 14.3681C22.7213 14.8289 22.4772 15.0593 22.3361 15.3469C22.2514 15.5194 22.1946 15.7052 22.168 15.8968C22.1237 16.2162 22.1951 16.5505 22.3381 17.219L22.3891 17.4579C22.6455 18.6568 22.7736 19.2562 22.6136 19.5509C22.4699 19.8156 22.2052 19.985 21.9128 19.9995C21.5873 20.0157 21.1286 19.6278 20.2112 18.852C19.6068 18.3409 19.3046 18.0854 18.9691 17.9855C18.6626 17.8943 18.3374 17.8943 18.0309 17.9855C17.6954 18.0854 17.3932 18.3409 16.7888 18.852C15.8714 19.6278 15.4127 20.0157 15.0872 19.9995C14.7948 19.985 14.5301 19.8156 14.3864 19.5509C14.2264 19.2562 14.3545 18.6568 14.6109 17.4579L14.6619 17.219C14.8049 16.5505 14.8763 16.2162 14.832 15.8968C14.8054 15.7052 14.7486 15.5194 14.6639 15.3469C14.5228 15.0593 14.2787 14.8289 13.7906 14.3681L13.5007 14.0943C12.4567 13.1086 11.9347 12.6158 12.0065 12.145C12.0214 12.0475 12.052 11.9533 12.0969 11.8663C12.3137 11.4461 13.0238 11.3801 14.4439 11.2481C15.2829 11.1702 15.7023 11.1312 16.0383 10.921C16.1326 10.8621 16.2211 10.7938 16.3026 10.7171C16.5934 10.4437 16.7487 10.0417 17.0595 9.23778Z" fill={fav ? "#FFE48A" : "#F8E1F7"} stroke="white" strokeWidth="1.5"/>
          <defs>
          <filter id="filter0_d_1_120" x="0" y="0" width="37" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_120"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_120" result="shape"/>
          </filter>
          </defs>
        </svg>
          
      </div>
    );
  }
}

const data = [
  { imageUrl: happy, text: "Happy", speaktext: "I feel happy", id: 201, fav: false },
  { imageUrl: sad, text: "Sad", speaktext: "I feel sad", id: 202, fav: false },
  { imageUrl: joyful, text: "Joyful", speaktext: "I feel joyful", id: 203, fav: false },
  { imageUrl: flustered, text: "Flustered", speaktext: "I feel flustered", id: 204, fav: false },
  { imageUrl: touched, text: "Touched", speaktext: "I feel touched", id: 205, fav: false },
  { imageUrl: angry, text: "Angry", speaktext: "I feel angry", id: 206, fav: false },
  { imageUrl: worried, text: "Worried", speaktext: "I feel worried", id: 207, fav: false },
  { imageUrl: delicious, text: "Delicious", speaktext: "I feel delicious", id: 208, fav: false },
  { imageUrl: ashamed, text: "Ashamed", speaktext: "I feel ashamed", id: 209, fav: false },    
  { imageUrl: afraid, text: "Afraid", speaktext: "I feel afraid", id: 210, fav: false },
  { imageUrl: desired, text: "Desired", speaktext: "I feel desired", id: 211, fav: false },
  { imageUrl: confused, text: "Confused", speaktext: "I feel confused", id: 212, fav: false },
];

export default function Beta() {    
  // CG: add state for the data
  const [stData, setStData] = useState(data);
  const navigate = useNavigate();

  // CG: on first load useEffect here to sync the favs from storage with the data array above
  useEffect(() => {
    // get the favorites from local storage
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    let dataCopy = stData.map((c) => {
      if(favorites.includes(c.id)){
        c.fav = true;
      }
      return c;
    });

    setStData(dataCopy);

  }, []);


  const squares = stData.map((item, index) => (
    <Square key={index} imageUrl={item.imageUrl} text={item.text} speaktext={item.speaktext} id={item.id} fav={item.fav} dataGetRef={stData} dataSetRef={setStData}/>
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
