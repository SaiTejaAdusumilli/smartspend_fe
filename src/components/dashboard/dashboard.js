import React, { useState } from "react";

export default function Dashboard() {
  const [income, setIncome] = useState(800.0);
  //   const [expenses, setExpenses] = useState(200.0);
  const expenses = 200.0;

  const [balance, setBalance] = useState(income - expenses);
  const [incomeHover, setIncomeHover] = useState(false);

  return (
    <div>
      <label>Current income: </label>
      <input
        type="text"
        className="border rounded w-28"
        value={`${income}`}
        onChange={(e) => {
          setIncome(e.target.value);
          setBalance(e.target.value - expenses);
          setIncomeHover(true);
        }}
      />
      {incomeHover ? (
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mx-2 px-2 border border-blue-500 hover:border-transparent rounded"
          onClick={(e) => {
            setIncome(income);
            setIncomeHover(false);
          }}
        >
          Save
        </button>
      ) : (
        <></>
      )}
      <label>Current balance: {`$ ${balance}`} </label>
      <label> Current expenses: {`$ ${expenses}`} </label>
    </div>
  );
}
