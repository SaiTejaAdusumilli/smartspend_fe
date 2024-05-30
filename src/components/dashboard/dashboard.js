import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState();
  const [balance, setBalance] = useState();
  const [incomeData, setIncomeData] = useState([]);

  const [incomeHover, setIncomeHover] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetch("http://127.0.0.1:8000/api/income/get/");
      const jsonData = await apiData.json();
      setIncomeData(jsonData);
      setIncome(jsonData?.income);
      var month = jsonData?.month;
      setExpenses(jsonData?.total_month_expenses);
      setBalance(jsonData?.income - jsonData?.total_month_expenses);
    };
    fetchData();
  }, []);

  return (
    <div>
      <label>Current income: </label>
      <input
        type="text"
        className="border rounded w-28 text-black"
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
