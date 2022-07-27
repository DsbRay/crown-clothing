import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingIcon />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
