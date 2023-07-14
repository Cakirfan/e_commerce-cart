import { FaRegTrashAlt } from "react-icons/fa";

function Cart({ cart, removeFromCart, removeAllCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleReset = () => {
    removeAllCart(cart);
  };

  return (
    <div className="flex flex-col bg-zinc-300 my-5 shadow-md">
      <div className="p-3 w-70">
        {cart.length === 0 ? (
          <p className="text-xl text-white font-bold bg-red-400 text-center p-1 rounded-sm mb-3 px-5 py-2">
            Your Cart is empty
          </p>
        ) : (
          <>
            <h1 className="text-2xl text-white font-bold bg-red-400 text-center p-1 rounded-sm mb-3">
              My Cart
            </h1>{" "}
            {/* Added heading */}
            {cart.map((item, index) => (
              <div
                className="bg-zinc-50 w-full mx-auto flex items-center justify-between border-b py-2 px-3 my-1 rounded-sm"
                key={index}
              >
                <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                  <img
                    className="max-w-full max-h-full rounded-full"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <p className="text-xs ml-2">{item.title}</p>
                <h2 className="text-sm">${item.price}.00</h2>
                <FaRegTrashAlt
                  className="cursor-pointer text-red-500 ml-2"
                  onClick={() => removeFromCart(index)}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="w-full bg-red-300 font-semibold">
        <div className="flex justify-between text-white py-4 px-6">
          <h3 className="text-2xl text-stone-950">Total :</h3>
          <h2 className="text-2xl text-white">$ {total}.00</h2>
        </div>
      </div>
      {cart.length > 0 ? (
        <button
          className="bg-red-400 w-5/6 mx-auto my-5 py-3 rounded-sm text-white text-xl font-semibold hover:bg-red-600"
          onClick={handleReset}
        >
          RESET
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;
