import "./App.css";
import { useState } from "react";
import { orders } from "./orders";
import Table from "./Table";

const pageSize = 5;
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("all");
  const totalPages = Math.ceil(orders.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = orders.slice(startIndex, endIndex);

  const regularDeliveries = orders.filter(
    (order) => order.deliveryType == "regular"
  );
  const expressDeliveries = orders.filter(
    (order) => order.deliveryType == "express"
  );
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <h2 className="text-center text-3xl font-semibold mb-4">Orders List</h2>
      <div className="inline-flex border mb-3">
        <button
          className={`px-6 py-2 border-teal-600 border duration-300 ${
            activeTab == "all" && "bg-teal-600 text-white "
          }`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`px-6 py-2 border-teal-600 border duration-300 ${
            activeTab == "express" && "bg-teal-600 text-white "
          }`}
          onClick={() => setActiveTab("express")}
        >
          Express
        </button>
        <button
          className={`px-6 py-2 border-teal-600 border duration-300 ${
            activeTab == "regular" && "bg-teal-600 text-white "
          }`}
          onClick={() => setActiveTab("regular")}
        >
          Regular
        </button>
      </div>
      {/* Show all orders */}
      {activeTab == "all" && (
        <div className="overflow-y-auto">
          <Table orders={currentData} />
          <div className="flex justify-center gap-3 mt-5">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
                className={`w-8 h-8 rounded-md flex items-center hover:bg-teal-600 duration-300 hover:text-white justify-center border ${
                  currentPage == index + 1 && "bg-teal-600 text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Show express delivery orders*/}
      {activeTab == "express" && (
        <div className="overflow-y-auto">
          <Table orders={expressDeliveries} />
        </div>
      )}
      {/* Show regular delivery orders */}
      {activeTab == "regular" && (
        <div className="overflow-y-auto">
          <Table orders={regularDeliveries} />
        </div>
      )}
    </>
  );
}

export default App;
