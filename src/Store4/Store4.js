import React from 'react';
import Dum from './Dum.jfif';
import Veg from './Veg.jpg';
import Egg from './Egg.jpg';
import Fish from './Fish.jpg';
import Mutton from './Mutton.jpg';

const Store4 = () => {
  return (
    <div className='Container'>
    <div className='Box'>
    <img className='Img' src={Dum} alt='Fry'/>
    <h4>1. Chicken Biryani</h4>
    <p>1. Marinate the washed, dried lamb with curd, salt, mustard oil.<br></br>
    2.Add in the grated mixture and saute for 5 mins.<br></br>
    3.Now add the marinated lamb pieces. Cook for 10 mins.<br></br>
    4.Add water to it and cover.<br></br>
    5.Serve hot with hot rice, roti or paratha.</p>
    </div>   
    <div className='Box'>
    <img className='Img' src={Fish} alt='Fry'/>
    <h4>2. Fish Biryani</h4>
    <p>1. Marinate the washed, dried lamb with curd, salt, mustard oil.<br></br>
    2.Add in the grated mixture and saute for 5 mins.<br></br>
    3.Now add the marinated lamb pieces. Cook for 10 mins.<br></br>
    4.Add water to it and cover.<br></br>
    5.Serve hot with hot rice, roti or paratha.</p>    </div> 
    <div className='Box'>
    <img className='Img' src={Mutton} alt='Fry'/>
    <h4>3. Mutton Biryani</h4>
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
    <img className='Img' src={Egg} alt='Fry'/>
    <h4>5. Egg Biryani</h4>
    <p>1. Marinate the washed, dried lamb with curd, salt, mustard oil.<br></br>
    2.Add in the grated mixture and saute for 5 mins.<br></br>
    3.Now add the marinated lamb pieces. Cook for 10 mins.<br></br>
    4.Add water to it and cover.<br></br>
    5.Serve hot with hot rice, roti or paratha.</p>    </div>
   
    </div>
  )
}

export default Store4
