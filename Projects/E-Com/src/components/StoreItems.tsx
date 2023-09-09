import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  ButtonGroup,
} from "@material-tailwind/react";

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  src: string;
};
import formatCurrency from "../utilities/formatCurrency";
import { useShopingCart } from "../context/ShopingContext";

export default function StoreItems({ id, name, price, src }: StoreItemsProps) {
  const {getItemQuantity, increaseItemQuantity, decreaseItemQuantity} = useShopingCart();
  const quantity = getItemQuantity(id)
  return (
    <Card className="w-96 cursor-pointer">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img src={src} alt={name} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {name.split("-")[0]}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {formatCurrency(price)}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {name}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {quantity === 0 ? (
          <Button
            className="flex items-center gap-3 justify-center"
            ripple={false}
            fullWidth={true}
            variant="outlined"
            onClick={()=> increaseItemQuantity(id)}
          >
            <span>Add to Cart</span>
            <span>
              <i className="fa-solid fa-store" />
            </span>
          </Button>
        ) : (
          <ButtonGroup
            className="flex items-center justify-center"
            fullWidth={true}
            variant="text"
            size="lg"
          >
            <Button onClick={()=> decreaseItemQuantity(id)}>-</Button>
            <Button
              className="flex items-center gap-3 justify-center"
              ripple={false}
              fullWidth={true}
              variant="outlined"
            >
              <span>{quantity}</span>
              <span>
                <i className="fa-solid fa-store" />
              </span>
            </Button>
            <Button onClick={()=> increaseItemQuantity(id)}>+</Button>
          </ButtonGroup>
        )}
      </CardFooter>
    </Card>
  );
}
