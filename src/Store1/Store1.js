import React from 'react';
import './Store1.css';
import Fry from './hqdefault.jpg';
import Kfc2 from './Kfc2.jpg';
import Kfc3 from './Kfc3.webp';
import Kfc4 from './Kfc4.webp';
import Kfc5 from './Kfc5.png';


const Store1 = () => {
  return (
    <div className='Container'>
    <div className='Box'>
    <img className='Img' src={Fry} alt='Fry'/>
    <h4>1. Fry Chicken Recipe</h4>
    <p>
        1.Wash and clean chicken. Drain water well from chicken.<br></br>
        2.Add beaten egg, curd, 1/2 tsp chilli powder.<br></br>
        3.Mix all purpose flour, green chillies.<br></br>
        4.Heat oil in a thick bottom kadai and deep fry the chicken in a 
        slow fire till it is cooked.<br></br>
        5.Serve hot with tomato ketchup.
    </p>
    </div>   
    <div className='Box'>
    <img className='Img' src={Kfc2} alt='Fry'/>
    <h4>2. Easy Copycat KFC Chicken</h4>
    <p>
    1.Wash and clean chicken. Drain water well from chicken.<br></br>
    2.Add beaten egg, curd, 1/2 tsp chilli powder.<br></br>
    3.Mix all purpose flour, green chillies.<br></br>
    4.Heat oil in a thick bottom kadai and deep fry the chicken in a 
    slow fire till it is cooked.<br></br>
    5.Serve hot with tomato ketchup.
</p>
    </div> 
    <div className='Box'>
    <img className='Img' src={Kfc3} alt='Fry'/>
    <h4>3. Fry Leg</h4>
    <p>
        1.Wash and clean chicken. Drain water well from chicken.<br></br>
        2.Add beaten egg, curd, 1/2 tsp chilli powder.<br></br>
        3.Mix all purpose flour, green chillies.<br></br>
        4.Heat oil in a thick bottom kadai and deep fry the chicken in a 
        slow fire till it is cooked.<br></br>
        5.Serve hot with tomato ketchup.
    </p>
    </div> 
    <div className='Box'>
    <img className='Img' src={Kfc4} alt='Fry'/>
    <h4>4. Fry Boneless </h4>
    <p>
        1.Wash and clean chicken. Drain water well from chicken.<br></br>
        2.Add beaten egg, curd, 1/2 tsp chilli powder.<br></br>
        3.Mix all purpose flour, green chillies.<br></br>
        4.Heat oil in a thick bottom kadai and deep fry the chicken in a 
        slow fire till it is cooked.<br></br>
        5.Serve hot with tomato ketchup.
    </p>
    </div>
    <div className='Box'>
    <img className='Img' src={Kfc5} alt='Fry'/>
    <h4>5. Chicken nuggets </h4>
    <p>
        1.Wash and clean chicken. Drain water well from chicken.<br></br>
        2.Add beaten egg, curd, 1/2 tsp chilli powder.<br></br>
        3.Mix all purpose flour, green chillies.<br></br>
        4.Heat oil in a thick bottom kadai and deep fry the chicken in a 
        slow fire till it is cooked.<br></br>
        5.Serve hot with tomato ketchup.
    </p>
    </div>
   
    </div>
  )
}

export default Store1
