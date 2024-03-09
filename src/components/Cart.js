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
      <h1 className="font-semibold text-2xl">
        Yo, fam! Hit that order button and curb that hunger. No cap! 🍔🔥
      </h1>
      <div className="w-7/12 mx-auto ">
        {cartItems.length !== 0 && (
          <button
            className="m-2 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}

        {cartItems.length === 0 && (
          <img className="mx-auto backdrop-grayscale-0" alt="Food Cart" src="https://img.freepik.com/free-vector/eating-variety-foods-concept-illustration_114360-11025.jpg?size=626&ext=jpg&ga=GA1.1.1344531628.1689224705&semt=ais"></img>
        )}

        {cartItems.length === 0 && (
          <h1 className="text-xl ">Bon appétit, dear connoisseur! 🌟🍕🥗</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
