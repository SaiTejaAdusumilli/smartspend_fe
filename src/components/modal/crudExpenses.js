import React from "react";
import { useState } from "react";

function CrudExpenses({ isOpen, onClose, modalData }) {
  const [data, setData] = useState({ ...modalData });
  // const data = modalData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handlePost = async (e) => {
    e.preventDefault();
    console.log("data", JSON.stringify(data));

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
    onClose();
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("data", JSON.stringify(data));

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/update/${data?.id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
    onClose();
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("data", JSON.stringify(data));

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/delete/${data?.id}/`,
        {
          method: "Delete",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
    onClose();
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
      <div className=" bg-gray-300 p-4 rounded shadow-lg w-1/3 text-black">
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
        <label>Category</label>
        <textarea
          name="category"
          value={data?.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <label>Description</label>
        <textarea
          name="description"
          value={data?.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={data?.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></input>
        <label>Amount</label>
        <textarea
          name="amount"
          value={data?.amount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        {data?.id === undefined ? (
          <div className="flex justify-end">
            <button
              onClick={handlePost}
              className="bg-blue-500 text-white my-4 px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        ) : (
          <div className="flex justify-around">
            <div>
              <button
                onClick={handleDelete}
                className="bg-blue-500 text-white my-4 px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
            <div className="flex ">
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white my-4 px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CrudExpenses;
