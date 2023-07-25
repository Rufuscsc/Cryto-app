import React, { useState } from 'react'

const Card = ({handleArrowClick}) => {

    const [isArrowClicked, setIsArrowClicked] = useState(false);
    function displayBtn(){
        if (!isArrowClicked){
            handleArrowClick(true);
            setIsArrowClicked(true);
        } else {
            handleArrowClick(false);
            setIsArrowClicked(false);
        }
    }


  return (
    <div className="Cards">
        <div className="bitcoin">
            <div className="left">
                <i className='bx bx-bitcoin' ></i> 
                <span>Bitcoin</span>
            </div>
            <div className="right">
                <span>BTC</span>
            </div>
        </div>
        <div className="btc-value">
            <p>3.529020 BTC</p>
        </div>
        <div className="usd">
            <div className="left">$19.153 USD</div>
            <div className="right">-2.32%</div>
        </div>
        <div className="arrow">
        <i className='bx bxs-chevron-down' onClick={displayBtn} style={{transform: isArrowClicked ? 'rotateZ(180deg)' : 'rotateX(0deg)'}}></i>
        </div>
    </div>
  )
}

export default Card