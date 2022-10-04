import React from 'react';
import './Store2.css';
import Handi from './Handi.jpg';
import Kadai from './Kadai.jpg';
import Dum from './Dum.jfif';
import Veg from './Veg.jpg';
import Paneer from './Paneer.jpg';

const Store2 = () => {
  return (
    <div>
    <div className='Container'>
    <div className='Box'>
    <img className='Img' src={Handi} alt='Fry'/>
    <h4>1. Handi Mutton Curry</h4>
    <p>1. Marinate the washed, dried lamb with curd, salt, mustard oil.<br></br>
    2.Add in the grated mixture and saute for 5 mins.<br></br>
    3.Now add the marinated lamb pieces. Cook for 10 mins.<br></br>
    4.Add water to it and cover.<br></br>
    5.Serve hot with hot rice, roti or paratha.</p>
    </div>   
    <div className='Box'>
    <img className='Img' src={Kadai} alt='Fry'/>
    <h4>2. Kadai Chicken</h4>
    <p>1. Marinate the washed, dried lamb with curd, salt, mustard oil.<br></br>
    2.Add in the grated mixture and saute for 5 mins.<br></br>
    3.Now add the marinated lamb pieces. Cook for 10 mins.<br></br>
    4.Add water to it and cover.<br></br>
    5.Serve hot with hot rice, roti or paratha.</p>    </div> 
    <div className='Box'>
    <img className='Img' src={Dum} alt='Fry'/>
    <h4>3. Chicken Dum Biryani</h4>
    <p>1. Marinate the washed, dried lamb with curd, salt, mustard oil.<br></br>
    2.Add in the grated mixture and saute for 5 mins.<br></br>
    3.Now add the marinated lamb pieces. Cook for 10 mins.<br></br>
    4.Add water to it and cover.<br></br>
    5.Serve hot with hot rice, roti or paratha.</p>    </div> 
    <div className='Box'>
    <img className='Img' src={Veg} alt='Fry'/>
    <h4>4. Veg Biryani</h4>
    <p>1. Marinate the washed, dried lamb with curd, salt, mustard oil.<br></br>
    2.Add in the grated mixture and saute for 5 mins.<br></br>
    3.Now add the marinated lamb pieces. Cook for 10 mins.<br></br>
    4.Add water to it and cover.<br></br>
    5.Serve hot with hot rice, roti or paratha.</p>    </div>
    <div className='Box'>
    <img className='Img' src={Paneer} alt='Fry'/>
    <h4>5. Paneer Masala</h4>
    <p>1. Marinate the washed, dried lamb with curd, salt, mustard oil.<br></br>
    2.Add in the grated mixture and saute for 5 mins.<br></br>
    3.Now add the marinated lamb pieces. Cook for 10 mins.<br></br>
    4.Add water to it and cover.<br></br>
    5.Serve hot with hot rice, roti or paratha.</p>    </div>
   
    </div>
      
    </div>
  )
}

export default Store2
