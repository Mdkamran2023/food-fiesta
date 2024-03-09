import { CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const ItemList = ({ items, dummy }) => {
  console.log(dummy);
  // console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="">
      {items.map((item) => (
        <div
        data-testid="foodItems"
          className="p-2 m-2 border border-b-4 flex md:flex-row-reverse justify-between roundded-lg max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:w-11/12"
          key={item.card.info.id}
        >
          <div className=" w-3/12 relative flex-shrink-0  md:w-auto md:mr-0 md:ml-4 ">
            <img
              className="w-32 h-24 rounded-md max-sm:min-w-[128px] "
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button
              className="absolute flex  -bottom-0 bg-gray-200 mix-blend-luminosity text-black py-1 px-4 rounded-md cursor-pointer hover:bg-slate-600"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>
          <div className=" w-9/12 flex-grow text-left p-2">
            <span className="block font-semibold">{item.card.info.name}</span>
            <span className="block text-gray-600">
              {"₹"}
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </span>
            <p className="text-sm text-nowrap overflow-x-auto no-scrollbar">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
