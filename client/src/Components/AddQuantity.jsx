import { useState } from "react";

function AddQuantity() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (operation) => {
    if (operation === "increase") {
      setQuantity(quantity + 1);
    } else if (operation === "decrease") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        className="bg-gray-300 text-white hover:bg-gray-400 rounded-lg w-12 h-8 flex justify-center items-center"
        onClick={() => handleQuantityChange("decrease")}
      >
      <p className="text-3xl font-semibold text-black pb-2">-</p>
        {/* <MinusIcon className="w-4 h-4" /> */}
      </button>
      <span className="text-gray-800 font-semibold text-lg">{quantity}</span>
      <button
        className="bg-gray-300 text-white hover:bg-gray-400  rounded-lg w-12 h-8 flex justify-center items-center"
        onClick={() => handleQuantityChange("increase")}
      >
      <p className="text-3xl font-semibold text-black pb-2">+</p>
        {/* <PlusIcon className="w-4 h-4" /> */}
      </button>
    
    </div>
  );
}

export default AddQuantity