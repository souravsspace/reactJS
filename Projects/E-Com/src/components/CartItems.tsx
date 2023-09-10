import { IconButton, Typography } from "@material-tailwind/react";
import { useShopingCart } from "../context/ShopingContext";
import userDetails from "../data/usersDetails.json";
import formatCurrency from "../utilities/formatCurrency";

type CartItemsProps = {
  id: number;
  quantity: number;
};
export default function CartItems({ id, quantity }: CartItemsProps) {
  const { removeFromCart } = useShopingCart();
  const items = userDetails.find((item) => item.id === id);
  if (items == null) return null;

  return (
    <main>
      <div className="flex justify-between items-center">
        <section className="flex gap-x-2">
          <img
            className="w-[150px] rounded-md"
            src={items.src}
            alt={items.name.split("-")[0]}
          />
          <div className="flex flex-col justify-center">
            <Typography>{items.name.split("-")[0]}</Typography>
            <Typography>
              {items.price} x {quantity}
            </Typography>
          </div>
        </section>
        <section className="flex justify-center items-center gap-x-2">
          <Typography>{formatCurrency(items.price * quantity)}</Typography>
          <IconButton variant="text" onClick={() => removeFromCart(id)}>
            <i className="fa-solid fa-x"></i>
          </IconButton>
        </section>
      </div>
      <hr className="my-2 border-blue-gray-50" />
    </main>
  );
}
