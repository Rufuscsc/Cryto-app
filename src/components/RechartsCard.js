import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CustomDot from './CustomDot';

const RechartsCard = ({data}) => {


    return ( 
        <div className='Cards' style={{padding: '0'}} >
            <div className="price-info">
                <div className="lower">
                    <p>Lower: $4.895</p>
                </div>
                <div className="higher">
                    <p>Higher: $6.857</p>
                </div>
            </div>
            <div className="price-info" id='scale'>
                <div className="info">
                    <p style={{fontWeight: '700', letterSpacing : '0.3px'}}>1BTC=$5.483</p>
                </div>
            </div>

            <ResponsiveContainer width="100%" >
                <AreaChart  width="100%"  height={195} data={data} margin={{ top: 70, right: 30, left: 0, bottom: 0 }} className='chart'>
                    <Area type="monotone" dataKey="price" stroke="#FA8E1F"
                    strokeWidth={3} str fillOpacity={1} fill="#FFF6ED" dot={<CustomDot dataLength={data.length} />} />
                </AreaChart>
            </ResponsiveContainer>
            
            
        </div>
     );
}
 
export default RechartsCard;