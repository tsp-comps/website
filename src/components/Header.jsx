import React, { useState } from 'react';
import './Header.css';

function Header({ handleClick }) {

  return (
    <div className='header'>
      <div className='left'>
        <p onClick={handleClick}>TSP Comps</p>
      </div>
      <div className='right'>
        <button onClick={() => console.log('About clicked')}>about</button>
        <button onClick={() => console.log('Contacts clicked')}>contacts</button>
      </div>
    </div>
  )
}

export default Header