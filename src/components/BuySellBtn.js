import React from 'react'
import Button from './Button'

const BuySellBtn = ({status}) => {
  return (
    <div className='BuySellBtn' style={{marginTop: status? '0px': '-55px'}}>
        <Button text='Buy BTC' color='#19A5FC'/>
        <Button text='Sell BTC' color='#FF4090' />
    </div>
  )
}

export default BuySellBtn