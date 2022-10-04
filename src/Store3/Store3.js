import React from 'react';
import './Store3.css';
import Chicken from './Chicken.webp';
import Mutton from './Mutton.webp';
import Fish from './Fish.jpg';
import Faham from './Faham.jpg';
import Fryed from './Fryed.jfif';

const Store3 = () => {
  return (
    <div className='Container'>
    <div className='Box'>
    <img className='Img' src={Chicken} alt='Fry'/>
    <h4>1. Chicken Mandi</h4>
    <p>1.Preparing rice.<br></br>
    2.Heat oil in a large nonstick pot. Add onion and sauté until soft.<br></br>
    3.Gently remove chicken and place on an oven tray with skin-side up.<br></br>
    4.To assemble the dish, gently fluff the rice and pour into a large serving plate.<br></br>
    5.Pickles and hot sauce are a great accompaniment to Chicken Mandi.</p>
    </div>   
    <div className='Box'>
    <img className='Img' src={Mutton} alt='Fry'/>
    <h4>2. Mutton Mandi</h4>
    <p>1.Preparing rice.<br></br>
    2.Heat oil in a large nonstick pot. Add onion and sauté until soft.<br></br>
    3.Gently remove chicken and place on an oven tray with skin-side up.<br></br>
    4.To assemble the dish, gently fluff the rice and pour into a large serving plate.<br></br>
    5.Pickles and hot sauce are a great accompaniment to Chicken Mandi.</p>   
     </div> 
    <div className='Box'>
    <img className='Img' src={Fish} alt='Fry'/>
    <h4>3. Fish Mandi</h4>
    <p>1.Preparing rice.<br></br>
    2.Heat oil in a large nonstick pot. Add onion and sauté until soft.<br></br>
    3.Gently remove chicken and place on an oven tray with skin-side up.<br></br>
    4.To assemble the dish, gently fluff the rice and pour into a large serving plate.<br></br>
    5.Pickles and hot sauce are a great accompaniment to Chicken Mandi.</p>
    </div> 
    <div className='Box'>
    <img className='Img' src={Faham} alt='Fry'/>
    <h4>4. Chicken Al Faham Mandi</h4>
    <p>1.Preparing rice.<br></br>
    2.Heat oil in a large nonstick pot. Add onion and sauté until soft.<br></br>
    3.Gently remove chicken and place on an oven tray with skin-side up.<br></br>
    4.To assemble the dish, gently fluff the rice and pour into a large serving plate.<br></br>
    5.Pickles and hot sauce are a great accompaniment to Chicken Mandi.</p>
     </div>
    <div className='Box'>
    <img className='Img' src={Fryed} alt='Fry'/>
    <h4>5. Chicken Fryed Mandi</h4>
    <p>1.Preparing rice.<br></br>
    2.Heat oil in a large nonstick pot. Add onion and sauté until soft.<br></br>
    3.Gently remove chicken and place on an oven tray with skin-side up.<br></br>
    4.To assemble the dish, gently fluff the rice and pour into a large serving plate.<br></br>
    5.Pickles and hot sauce are a great accompaniment to Chicken Mandi.</p>    
    </div>
   
    </div>
      
  )
}

export default Store3
