import { products } from "../helper/data";

function ProductList({ addToCart }) {
  return (
    <div className="grid grid-cols-2 gap-8 my-5 mr-3">
      {products.map((product) => (
        <div className="border p-4 rounded bg-neutral-50 h-80 hover:scale-95 transition-all shadow-md" key={product.id}>
          <div className="h-40 flex items-center justify-center">
            <img
              className="max-w-full max-h-full"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-center font-medium">{product.title}</p>
            <h2 className="text-center text-red-500">${product.price}.00</h2>
            <button
              className="w-full bg-red-400 py-2 rounded text-white hover:bg-red-600"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
