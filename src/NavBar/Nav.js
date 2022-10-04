import React from 'react';
import './Nav.css';
import { FaStoreAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const Nav = useNavigate();
  return (
    <div className='Main'>
    <div className='Nav'>
    <h2 className='Logo'><FaStoreAlt /></h2>
    <h2> Store and recipes  </h2>
    <button  className='Btn2' onClick={() => {Nav('/')}} >Home</button>
    
    
     </div>
    </div>
  )
}

export default Nav
