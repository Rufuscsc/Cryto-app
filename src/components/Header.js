import React, { useState } from 'react'

const Header = ({handleClick}) => {
  const [status, setStatus] = useState(null);

  const Clicked = () => {
    if (!status){
      setStatus(true);
      handleClick(true);
    } else{
      setStatus(false);
      handleClick(false);
    }
    
  }

  return (
    <div className="Header">
      <div className="notch-row">
        <div className="time"><span>9:45</span></div>
        <div className="notch">
          <div className="speaker"></div>
          <div className="camera"></div>
        </div>
        <div className="top-icons">
            <i className='fa fa-signal'></i>
            <i className="material-icons">wifi</i>
            <i className="fa fa-battery-4"></i>
        </div>
      </div>
        
        <div className="header-content">
            <i className='bx bxs-chevron-left'></i>
            <p>Bitcoin Wallet</p>
            <i className='bx bx-dots-vertical-rounded' id='bars' onClick={Clicked} style={{transform : status ? 'rotateZ(90deg)' : "rotateZ(180deg)"}}></i>
        </div>
    </div>
  )
}

export default Header