import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  // efficient way to do -->subscribing to the whole store is not a good practice
  // subscribing to  store items-->reading from redux store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-7/12 mx-auto ">
        <button
          className="m-2 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && <h1>Cart is Empty</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
