"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/headerbar";
import CompoundInterestCalculator from "@/components/calculatorinput";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ResultDisplay from "@/components/resultdisplay";

export default function Homepage() {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [chartData, setChartData] = useState([]);
  const [savingsData, setSavingsData] = useState([]);

  const handleCalculateSavings = (data) => {
    setSavingsData(data);
    if (Array.isArray(data) && data.every((amount) => Array.isArray(amount))) {
      const newChartData = data.map((amount) => amount[11]); // Get the twelfth month's amount
      setChartData(newChartData);
    } else {
      setChartData([]);
    }
  };
  
  const savingsByYear = [];
  const totalMonths = savingsData.length;
  const remainingMonths = totalMonths % 12;
  
  for (let i = 0; i < totalMonths; i += 12) {
    let year = savingsData.slice(i, i + 12);
  
    if (i + 12 > totalMonths) {
      // Pad the last year with empty values for the missing months
      year = year.concat(Array(12 - remainingMonths).fill(null));
    }
  
    savingsByYear.push(year);
  }
  

  useEffect(() => {
    if (activeTab === "tab2") {
      const newChartData = savingsByYear.map((year) => year[11]); // Get the twelfth month's amount
      setChartData(newChartData);
    }
  }, [activeTab, savingsByYear]);
  

  return (
    <div>
      <header style={{ border: "1px solid blue" }}>
        <Navbar />
      </header>
      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid blue", flex: "0 0 20%" }}>
          <navigation>
            <CompoundInterestCalculator onCalculate={handleCalculateSavings} />
          </navigation>
        </div>
        <div
          className="cuerpo"
          style={{
            border: "1px solid blue",
            flex: "1",
            display: "flex",
            overflowX: "auto",
          }}
        >
          <div className="tabs">
            <button
              className={activeTab === "tab1" ? "active" : ""}
              onClick={() => handleTabClick("tab1")}
            >
              Tab 1
            </button>
            <button
              className={activeTab === "tab2" ? "active" : ""}
              onClick={() => handleTabClick("tab2")}
            >
              Tab 2
            </button>
          </div>
          {activeTab === "tab1" && (
            <div className="tab-content" style={{ display: "flex" }}>
              {savingsByYear.map((year, index) => (
                <div key={index} style={{ flex: "0 0 100%" }}>
                  <h2>{`${index + 1}st year`}</h2>
                  <ul>
                    {year.map((amount, monthIndex) => (
                      <li key={monthIndex}>
                        Month {monthIndex + 1}:{" "}
                        {amount.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {activeTab === "tab2" && (
            <div className="tab-content">
              <Bar
                data={{
                  labels: savingsByYear.map(
                    (_, index) => `${index + 1}st year`
                  ),
                  datasets: [
                    {
                      data: chartData,
                      backgroundColor: "rgba(75, 192, 192, 0.2)",
                      borderColor: "rgba(75, 192, 192, 1)",
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: (context) => `Amount: $${context.parsed.y}`,
                      },
                    },
                  },
                }}
              />
            </div>
          )}
        </div>
      </div>
      <footer style={{ border: "1px solid blue" }}>mantecol</footer>
    </div>
  );
}
