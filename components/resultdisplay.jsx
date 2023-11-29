import React from 'react';


const ResultDisplay = ({ savingsData }) => {
    return (
      <div>
        {savingsData && savingsData.map((amount, index) => (
          <p key={index}>Month {index + 1}: {amount}</p>
        ))}
      </div>
    );
  };

export default ResultDisplay;