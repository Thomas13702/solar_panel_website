import React from "react";
import Image from "next/image";
import trashIcon from "../../public/trash-solid.svg";

const CartItem = ({ item }) => {
  return (
    <div className="flex py-4">
      <div className="w-1/4">
        <div className="relative w-24 h-24">
          <Image
            src={item.image}
            layout="fill"
            objectFit="cover"
            alt={item.name}
          />
        </div>
      </div>
      <div className="w-3/4 px-4 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-600">£{item.price.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full m-2">
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full m-2">
              +
            </button>
          </div>
          <button className="flex items-center text-red-600 hover:text-red-800">
            <Image src={trashIcon} alt="Remove item" className="h-4 w-4 mr-2" />
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
