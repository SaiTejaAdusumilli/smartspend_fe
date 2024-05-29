import React, { useState } from "react";
import CrudExpenses from "../modal/crudExpenses";

function Expenses() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const expensesArray = [
    { exp: "curd", date: "29-05", amount: "8" },
    { exp: "rice", date: "29-05", amount: "28" },
    { exp: "chips", date: "28-05", amount: "1.8" },
    { exp: "milk", date: "28-05", amount: "2.8" },
    { exp: "dosa", date: "27-05", amount: "10.8" },
  ];
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <div>Expenses :</div>
      {expensesArray.map((e) => (
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex space-x-4"
          onClick={(event) => {
            setModalOpen(true);
            setModalData(e);
          }}
        >
          <div>{e?.exp}</div>
          <div>{e?.date}</div>
          <div>{e?.amount}</div>
        </button>
      ))}
      <CrudExpenses
        isOpen={modalOpen}
        onClose={handleCloseModal}
        modalData={modalData}
      />
    </div>
  );
}

export default Expenses;
