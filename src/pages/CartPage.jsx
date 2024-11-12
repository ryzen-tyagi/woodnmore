import { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border-b py-4 flex justify-between">
              <div>
                <h2 className="text-xl">{item.name}</h2>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
