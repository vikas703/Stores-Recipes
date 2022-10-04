import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainStore.css';
import KFC from './KFC.jpg';
import Abs from './Abs.jpeg';
import Mandi from './Mandi.jpeg';
import Paradise from './Paradise.jpeg';
import Six from './Six.jpeg';
import { GoLocation } from 'react-icons/go';


const MainStore = () => {
    let Navigate = useNavigate();
  return (
    <div className='Container'>
    <div className='Box'>
    <img className='Img' src={KFC} alt='KFC'/>
    <p>KFC is a chain of fast food restaurants known for their fried chicken
    They not only sell chicken, but also other food like salads and french fries.
    </p>
    <br></br>
    <h4 className='Discount'>Click Below To Avail Discount</h4>
    <button className='Btn' onClick={() => {Navigate('/Store1')}}> 50% off</button>
    <h3><GoLocation /> Hyderabad </h3>
    </div>   
    <div className='Box'>
    <img className='Img' src={Abs} alt='Abs'/>
    <p>A unique fusion of global grill and a classic buffet,
     Absolute Barbecues brings a live wish grill.</p>
     <br></br>
     <h4 className='Discount'>Click Below To Avail Discount</h4>
    <button className='Btn' onClick={() => {Navigate('/Store2')}}> 40% off</button>
    <h3><GoLocation /> Hyderabad </h3>
    </div> 
    <div className='Box'>
    <img className='Img' src={Mandi} alt='KFC'/>
    <p>Served on a huge plate, mandi is biryani rice 
    served with large chunks of meat and rumali roti.</p>
    <br></br>
    <h4 className='Discount'>Click Below To Avail Discount</h4>
    <button className='Btn' onClick={() => {Navigate('/Store3')}}> 30% off</button>
    <h3><GoLocation /> Hyderabad </h3>
    </div> 
    <div className='Box'>
    <img className='Img' src={Paradise} alt='KFC'/>
    <p>The Paradise restaurant, founded in 1953, began as a small cafe 
    serving tea and snacks, 
    but now it serves traditional Hyderabad</p>
    <br></br>
    <h4 className='Discount'>Click Below To Avail Discount</h4>
    <button className='Btn' onClick={() => {Navigate('/Store4')}}> 20% off</button>
    <h3><GoLocation /> Hyderabad </h3>
    </div>
    <div className='Box'>
    <img className='Img' src={Six} alt='KFC'/>
    <p>Platform 65 is a multi-cuisine restaurant that serves lip-smacking food 
    from Chinese, North Indian, Andhra and Telangana cuisines.</p>
    <br></br>
    <h4 className='Discount'>Click Below To Avail Discount</h4>
    <button className='Btn' onClick={() => {Navigate('/Store5')}}> 10% off</button>
    <h3><GoLocation /> Hyderabad </h3>
    </div>
   
    </div>
  )
}

export default MainStore
