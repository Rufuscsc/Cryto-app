import React, { useState } from 'react'
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'
import Card from './Card'
import DurationList from './DurationList'
import BuySell from './BuySell';
import Footer from './Footer';
import Overlay from './Overlay';
import BuySellBtn from './BuySellBtn';
import RechartsCard from './RechartsCard';


const Phone = () => {
    const [isClick, setIsClick] = useState(false);
    const [isArrowClick, setIsArrowClick] = useState(false);


    function handleClick(data){
        setIsClick(data);
    }
    function handleArrowClick(status){
        setIsArrowClick(status)
    }

    const daydata = [
        {price: 31},
        {price: 45},
        {price: 43},
        {price: 49},
        {price: 52},
        {price: 51},
        
    ]
    const weekdata = [
        {price: 30},
        {price: 38},
        {price: 44},
        {price: 41},
        {price: 39},
        {price: 43},
        
    ]
    const monthdata = [
        {price: 20},
        {price: 58},
        {price: 37},
        {price: 49},
        {price: 69},
        {price: 43},
        
    ]
    const yeardata = [
        {price: 47},
        {price: 51},
        {price: 77},
        {price: 43},
        {price: 37},
        {price: 63},
        
    ]

  return (
    <div className='Phone'>
        <div className="inside">
            <Router>
            <Overlay isClick={isClick}/>
            <Header handleClick={handleClick}/>
            <Card handleArrowClick={handleArrowClick}/>
            <BuySellBtn status={isArrowClick}/>
            <DurationList />
            
                <Switch>
                <Route exact path='/day'>
                    <RechartsCard data={daydata} />
                </Route>
                <Route exact path='/'>
                    <RechartsCard data={weekdata} />
                </Route>
                <Route exact path='/month'>
                    <RechartsCard data={monthdata} />
                </Route>
                <Route exact path='/year'>
                    <RechartsCard data={yeardata} />
                </Route>
                </Switch>
            
            <BuySell/>
            <Footer />
            </Router>
        </div>
    </div>
  )
}

export default Phone