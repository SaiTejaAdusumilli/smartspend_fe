import React from "react";
// import { useState } from "react";

function CrudExpenses({ isOpen, onClose, modalData }) {
  // const [data, setData] = useState(modalData);
  const data = modalData;

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <div className="flex justify-between">
          <h2 className="text-xl mb-4">Expense Data</h2>
          <div className="justify-end">
            <button
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              X
            </button>
          </div>
        </div>
        <label>Expense</label>
        <textarea
          value={data?.exp}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <label>Date</label>
        <textarea
          value={data?.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <label>Amount</label>
        <textarea
          value={data?.amount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white my-4 px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CrudExpenses;
