import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Item,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFormCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemhandler = () => addItemToCart(cartItem);
  const removeItemhandler = () => removeItemFormCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Item className="name">{name}</Item>
      <Item className="quantity">
        <div className="arrow" onClick={removeItemhandler}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={addItemhandler}>
          &#10095;
        </div>
      </Item>
      <Item className="price">{price}</Item>
      <Item className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </Item>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
