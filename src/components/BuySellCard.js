import React from 'react'

const BuySellCard = ({text, colorStart, colorEnd}) => {
  return (
    <div className='buy-sell-card'>
        <div className="dollar">
        <span className="material-symbols-outlined" style={{background: `linear-gradient(${colorStart}, ${colorEnd})`}}>attach_money</span>
        <p>{text}</p>
        </div>
    </div>
  )
}

export default BuySellCard