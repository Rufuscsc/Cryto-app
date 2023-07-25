import BuySellCard from "./BuySellCard";

const BuySell = () => {
    return ( 
        <div className="buy-sell">
            <BuySellCard text='Buy BTC' colorStart='#12BBFC' colorEnd='#1781F1'/>
            <BuySellCard text='Sell BTC' colorStart='#FE5983' colorEnd='#FF2999'/>
        </div>
     );
}
 
export default BuySell;