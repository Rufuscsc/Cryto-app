import React from 'react'
import Duration from './Duration'

const DurationList = () => {
  return (
    <div className="DurationList">
        <Duration title='Day' link='/day'/>
        <Duration title='Week' active= {true} link='/'/>
        <Duration title='Month' link='/month'/>
        <Duration title='Year' link='/year'/>
    </div>
  )
}

export default DurationList