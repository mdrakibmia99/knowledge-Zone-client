import React from "react";
import useMyOrder from "../../../hooks/useMyOrder";
import Product from "./Product";

const MyOrder = () => {
  const [myOrder] = useMyOrder(["order"]);

  return (
    <div className="pt-4 pb-14">
      <h1 className="text-3xl text-center font-bold text-violet-800  mt-2 mb-10  uppercase">
        My Order
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th className="text-lg text-violet-800">Serial</th>
              <th className="text-lg text-violet-800">Course Name</th>
              <th className="text-lg text-violet-800">Pay</th>
              <th className="text-lg text-red-500">Cancel</th>
            </tr>
          </thead>
          <tbody>
            {myOrder.map((order, index) => (
              <Product order={order} index={index}></Product>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
