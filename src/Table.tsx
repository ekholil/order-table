import React from "react";

const Table = ({ orders }) => {
  return (
    <table className="w-full table-auto text-left whitespace-nowrap">
      <thead>
        <tr className="border bg-teal-600 text-white">
          <th className="p-2">Product ID</th>
          <th className="p-2">Customer Name</th>
          <th className="p-2">Delivery Type</th>
          <th className="p-2">Color</th>
          <th className="p-2">Address</th>
          <th className="p-2">Phone</th>
          <th className="p-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((item) => (
          <tr
            key={item.productId}
            className="border even:bg-slate-200 hover:bg-slate-300 duration-300"
          >
            <td className="p-2">{item.productId}</td>
            <td className="p-2">{item.customer}</td>
            <td className="p-2">{item.deliveryType}</td>
            <td className="p-2">{item.color}</td>
            <td className="p-2">{item.address}</td>
            <td className="p-2">{item.phone}</td>
            <td className="p-2">{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
