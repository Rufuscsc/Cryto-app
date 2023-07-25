import React from 'react'

const CustomDot = (props) => {
    const { cx, cy, stroke, index, dataLength, ...rest } = props;
  
    // Check if the current data point is the last one
    const isLastPoint = index === dataLength - 1;
  
    // Show the dot only for the last data point
    if (isLastPoint) {
      return (
        <g>
          {/* Render a circle at the tip end of the line */}
          <circle cx={cx} cy={cy} r={7} fill="#FCAA2C" stroke={stroke} strokeWidth={3} />
        </g>
      );
    }
  
    return null; // Render nothing for other data points
  };

export default CustomDot