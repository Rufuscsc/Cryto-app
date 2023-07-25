import React from 'react'
import { Link } from 'react-router-dom';

const Duration = ({title, active, link}) => {
  return (
  <>
    {active && <Link to={link}><div className='Duration' style={{color: active ? 'white' : '#AEB8C4', backgroundColor: active ? '#AEB8C4' : 'transparent'}}>{title}</div></Link>}
    {!active && <Link to={link}><div className='Duration'>{title}</div></Link>}
    
  </>
    
  )
}

export default Duration