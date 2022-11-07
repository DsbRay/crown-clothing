import { FC } from "react";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

type CartItemProps = {
  quantity: number;
  imageUrl: string;
  name: string;
  price: number;
};

type CartProps = {
  cartItem: CartItemProps;
};

const CartItem: FC<CartProps> = ({ cartItem }: CartProps) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
