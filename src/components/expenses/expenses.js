import React, { useEffect, useState } from "react";
import CrudExpenses from "../modal/crudExpenses";

function Expenses() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [expensesArray, setExpenseArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetch("http://127.0.0.1:8000/api/get/");
      const jsonData = await apiData.json();
      setExpenseArray(jsonData);
    };
    fetchData();
  }, []);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <div>Expenses :</div>
      {expensesArray.map((e) => (
        <button
          key={e?.id}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white my-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded flex space-x-4"
          onClick={(event) => {
            setModalOpen(true);
            setModalData(e);
          }}
        >
          <div>{e?.category}</div>
          <div>{e?.date}</div>
          <div>{e?.amount}</div>
        </button>
      ))}
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white my-5 py-2 px-2 border border-blue-500 hover:border-transparent rounded flex space-x-4"
        onClick={(event) => {
          setModalOpen(true);
          setModalData();
        }}
      >
        Add Expense
      </button>
      <CrudExpenses
        key={modalData?.id}
        isOpen={modalOpen}
        onClose={handleCloseModal}
        modalData={modalData}
      />
    </div>
  );
}

export default Expenses;
