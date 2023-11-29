import React, { useState } from "react";
import ResultDisplay from "./resultdisplay";

const CompoundInterestCalculator = ({ onCalculate }) => {
  const [initialAmount, setInitialAmount] = useState();
  const [monthlySavings, setMonthlySavings] = useState();
  const [savingPeriod, setSavingPeriod] = useState();
  const [annualInterestRate, setAnnualInterestRate] = useState();
  const [savingsData, setSavingsData] = useState([]);
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  const calculateSavings = () => {
    let currentAmount = initialAmount;
    let data = [];
    let invested = 0;
    let interest = 0;

    for (let i = 0; i < savingPeriod; i++) {
      interest = currentAmount * (annualInterestRate / 100 / 12);
      currentAmount += monthlySavings + interest;
      data.push(currentAmount);
      invested += monthlySavings;
      setTotalInterest((prevInterest) => prevInterest + interest); // Update total interest
    }

    setTotalInvested(invested);
    setFinalAmount(currentAmount);

    setSavingsData(data);

    onCalculate(data); // Call the onCalculate prop with the data array
  };

  return (
    <div>
      <h4>Compound Interest Calculator</h4>
      <label>
        Initial Amount:
        <br />
        <input
          type="number"
          value={initialAmount}
          onChange={(e) => setInitialAmount(parseInt(e.target.value))}
        />
      </label>
      <label>
        Monthly Savings:
        <input
          type="number"
          value={monthlySavings}
          onChange={(e) => setMonthlySavings(parseInt(e.target.value))}
        />
      </label>
      <label>
        Saving Period (in months):
        <input
          type="number"
          value={savingPeriod}
          onChange={(e) => setSavingPeriod(parseInt(e.target.value))}
        />
      </label>
      <label>
        Annual Interest Rate:
        <input
          type="number"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(parseInt(e.target.value))}
        />
      </label>
      <button onClick={calculateSavings}>Calculate</button>
      <div>
        <p>Total Invested: {totalInvested}</p>
        <p>Total Interest: {totalInterest}</p>
        <p>Final Amount: {finalAmount}</p>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
