import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useShopingCart } from "../context/ShopingContext";
import CartItems from "./CartItems";
import formatCurrency from "../utilities/formatCurrency";
import userDetails from "../data/usersDetails.json";

type CartSectionProps = {
  isOpen: boolean;
};

export default function CartSection({ isOpen }: CartSectionProps) {
  const { closeCart, cartItems } = useShopingCart();

  return (
    <Drawer
      open={isOpen}
      placement="right"
      onClose={closeCart}
      className="p-4"
      size={450}
    >
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          Cart
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <hr className="my-2 border-blue-gray-50" />
      <div className="grid gap-y-2 py-2">
        {cartItems.map((item, index) => (
          <CartItems key={index} {...item} />
        ))}
      </div>
      <div className="flex justify-between flex-row-reverse">
        <Typography variant="h3">
          Total :{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const items = userDetails.find((item) => item.id === cartItem.id);
              if (items == null) return total;
              return total + items.price * cartItem.quantity;
            }, 0)
          )}
        </Typography>
        <Button>Checkout</Button>
      </div>
    </Drawer>
  );
}
