import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Fav.css';

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
  
  handleClick = () => {
    const { speaktext, text } = this.props;
    speakText(speaktext);
  };

  handleButtonClick = () => {
    const { id } = this.props;

    // Retrieve favorites array from localStorage
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Check if id is present in favorites array
    const idExistsInFavorites = favorites.includes(id);
    
    let clicked;

    if (idExistsInFavorites) {
        // Remove id from favorites array
        const index = favorites.indexOf(id);
        favorites.splice(index, 1);
        console.log("Removed " + id + " from favorites array");
        clicked = false;
    } else {
        // Add id to favorites array
        favorites.push(id);
        console.log("Added " + id + " to favorites array");
        clicked = true;
    }

    // Update favorites array in localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Log the updated favorites array
    console.log("Updated favorites array in localStorage:", localStorage.getItem("favorites"));

    return clicked;

  }

  render() {
    const { imageUrl, text } = this.props;
    const clicked = this.clicked;
    return (
      <div className={'square favcolor col-4'} onClick={this.handleClick}>
        <div className={'centerpic'}>
          <img src={imageUrl} alt="Pic" className="centered-image"/>
          <h1>{text}</h1>
        </div>

        <svg className="star-button" xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none" onClick={this.handleButtonClick}>
          <g filter="url(#filter0_d_1_120)">
          <rect x="4" width="29" height="28" rx="14" fill="#F8E1F7"/>
          </g>
          <path d="M17.0595 9.23778C17.6059 7.82412 17.8791 7.11728 18.323 7.01932C18.4397 6.99356 18.5603 6.99356 18.677 7.01932C19.1209 7.11728 19.3941 7.82412 19.9405 9.23778C20.2513 10.0417 20.4066 10.4437 20.6974 10.7171C20.7789 10.7938 20.8674 10.8621 20.9617 10.921C21.2977 11.1312 21.7171 11.1702 22.5561 11.2481C23.9762 11.3801 24.6863 11.4461 24.9031 11.8663C24.948 11.9533 24.9786 12.0475 24.9935 12.145C25.0653 12.6158 24.5433 13.1086 23.4993 14.0943L23.2094 14.3681C22.7213 14.8289 22.4772 15.0593 22.3361 15.3469C22.2514 15.5194 22.1946 15.7052 22.168 15.8968C22.1237 16.2162 22.1951 16.5505 22.3381 17.219L22.3891 17.4579C22.6455 18.6568 22.7736 19.2562 22.6136 19.5509C22.4699 19.8156 22.2052 19.985 21.9128 19.9995C21.5873 20.0157 21.1286 19.6278 20.2112 18.852C19.6068 18.3409 19.3046 18.0854 18.9691 17.9855C18.6626 17.8943 18.3374 17.8943 18.0309 17.9855C17.6954 18.0854 17.3932 18.3409 16.7888 18.852C15.8714 19.6278 15.4127 20.0157 15.0872 19.9995C14.7948 19.985 14.5301 19.8156 14.3864 19.5509C14.2264 19.2562 14.3545 18.6568 14.6109 17.4579L14.6619 17.219C14.8049 16.5505 14.8763 16.2162 14.832 15.8968C14.8054 15.7052 14.7486 15.5194 14.6639 15.3469C14.5228 15.0593 14.2787 14.8289 13.7906 14.3681L13.5007 14.0943C12.4567 13.1086 11.9347 12.6158 12.0065 12.145C12.0214 12.0475 12.052 11.9533 12.0969 11.8663C12.3137 11.4461 13.0238 11.3801 14.4439 11.2481C15.2829 11.1702 15.7023 11.1312 16.0383 10.921C16.1326 10.8621 16.2211 10.7938 16.3026 10.7171C16.5934 10.4437 16.7487 10.0417 17.0595 9.23778Z" fill={"#FFE48A"} stroke="white" strokeWidth="1.5"/>
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


  const data2 = [
    { imageUrl: yes, text: "Yes", speaktext: "Yes", id: 1},
    { imageUrl: no, text: "No", speaktext: "No", id: 2},
    { imageUrl: thank, text: "Thanks", speaktext: "Thank you", id: 3 },
    { imageUrl: sorry, text: "Sorry", speaktext: "I'm sorry", id: 4 },
    { imageUrl: hot, text: "Hot", speaktext: "It's hot", id: 5 },
    { imageUrl: cold, text: "Cold", speaktext: "It's cold", id: 5 },
    { imageUrl: eat, text: "Eat", speaktext: "I want to eat", id: 6 },
    { imageUrl: drink, text: "Drink", speaktext: "I want to drink", id: 7 },
    { imageUrl: bath, text: "Bath", speaktext: "I want to take a bath", id: 8 },
    { imageUrl: toilet, text: "Toilet", speaktext: "I need to use the toilet", id: 9 },
    { imageUrl: play, text: "Play", speaktext: "Let's play", id: 10 },
    { imageUrl: sleep, text: "Sleep", speaktext: "I want to sleep", id: 11 },
    { imageUrl: happy, text: "Happy", speaktext: "I feel happy", id: 12 },
    { imageUrl: sad, text: "Sad", speaktext: "I feel sad", id: 13 },
    { imageUrl: joyful, text: "Joyful", speaktext: "I feel joyful", id: 14 },
    { imageUrl: flustered, text: "Flustered", speaktext: "I feel flustered", id: 15 },
    { imageUrl: touched, text: "Touched", speaktext: "I feel touched", id: 16 },
    { imageUrl: angry, text: "Angry", speaktext: "I feel angry", id: 17 },
    { imageUrl: worried, text: "Worried", speaktext: "I feel worried", id: 18 },
    { imageUrl: delicious, text: "Delicious", speaktext: "I feel delicious", id: 19 },
    { imageUrl: ashamed, text: "Ashamed", speaktext: "I feel ashamed", id: 20 },    
    { imageUrl: afraid, text: "Afraid", speaktext: "I feel afraid", id: 21 },
    { imageUrl: desired, text: "Desired", speaktext: "I feel desired", id: 22 },
    { imageUrl: confused, text: "Confused", speaktext: "I feel confused", id: 23 },
    { imageUrl: bread, text: "Bread", speaktext: "I love bread", id: 24 },
    { imageUrl: milk, text: "Milk", speaktext: "I want some milk", id: 25 },
    { imageUrl: egg, text: "Egg", speaktext: "I like eggs", id: 26 },
    { imageUrl: tomato, text: "Tomato", speaktext: "Tomatoes are delicious", id: 27 },
    { imageUrl: salad, text: "Salad", speaktext: "I enjoy eating salad", id: 28 },
    { imageUrl: fries, text: "Fries", speaktext: "I crave some fries", id: 29 },
    { imageUrl: sandwich, text: "Sandwich", speaktext: "A sandwich sounds good", id: 30 },
    { imageUrl: rice, text: "Rice", speaktext: "I want to eat rice", id: 31 },
    { imageUrl: beef, text: "Beef", speaktext: "Beef is tasty", id: 32 },    
    { imageUrl: chicken, text: "Chicken", speaktext: "I like chicken", id: 33 },
    { imageUrl: noodle, text: "Noodle", speaktext: "Noodles are yummy", id: 34 },
    { imageUrl: pizza, text: "Pizza", speaktext: "I want pizza for dinner", id: 35 },

    ];

    // Retrieve favorites array from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Filter data2 array based on ids present in favorites
    const data = data2.filter(item => favorites.includes(item.id));

    // Display the filtered data array
    console.log("Filtered data array:", data);





  
export default function Fav() {    
    const navigate = useNavigate();

    const squares = data.map((item, index) => (
        <Square key={index} imageUrl={item.imageUrl} text={item.text} id={item.id} />
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



