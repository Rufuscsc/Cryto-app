import React from 'react'

const Overlay = ({isClick}) => {

  return (
    <>
        {isClick && <>
            <div className="side-box">
                <div className="list">Edit <i className='bx bx-folder-minus'></i></div>
                <div className="list">Courier Info <i className='bx bxs-minus-square'></i></div>
                <div className="list">Share <i className='bx bx-arrow-from-bottom'></i></div>
                <div className="list">Remove <i className='bx bx-minus-circle'></i></div>
            </div>
            <div className="shadow">
            </div>
        </>}
    </>
  )
}

export default Overlay