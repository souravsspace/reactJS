import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useShopingCart } from "../context/ShopingContext";

export default function Navigation() {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "Store", link: "/store" },
    { title: "About", link: "/about" },
  ];
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography className="mr-4 cursor-pointer py-1.5">
          <Link to="/">
            <strong className="text-xl font-semibold">
              E <span className="text-red-500"> COMMERCE </span>
            </strong>
          </Link>
        </Typography>
        <div className="flex items-center gap-4">
          <ul className="mr-4 flex gap-4">
            {navItems.map((item, index) => (
              <Typography
                key={index}
                as="li"
                className="cursor-pointer py-1.5 font-medium"
              >
                <Link to={item.link} className="text-lg font-medium">
                  {item.title}
                </Link>
              </Typography>
            ))}
          </ul>
          <Badge content='1' placement="bottom-end" withBorder>
            <IconButton className="rounded-full text-lg" variant="outlined">
              <i className="fa-solid fa-store" />
            </IconButton>
          </Badge>
        </div>
      </div>
    </Navbar>
  );
}
