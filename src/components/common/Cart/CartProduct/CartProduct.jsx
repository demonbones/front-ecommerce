import { useState } from "react";
import "./CartProduct.css";
import { useUpdateCart } from "../../../../hooks/queries/useUpdateCart";
import { useSelector } from "react-redux";
import { useDeleteProductCart } from "../../../../hooks/queries/useDeleteProduct";

const CartProduct = ({ cartProduct }) => {
  const initialQuantity = Number(cartProduct.quantity);
  const price = Number(cartProduct.product.price);
  const { mutate, isLoading } = useUpdateCart();
  const deleteMutation = useDeleteProductCart();
  const [quantity, setQuantity] = useState(initialQuantity);
  const isLogged = useSelector((store) => store.auth.isLogged);

  const increment = () => {
    const newQuantity = quantity + 1;
    const stock = 10;
    if (newQuantity <= stock) setQuantity(newQuantity);
  };

  const decrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 1) setQuantity(newQuantity);
  };

  const handleUpdate = () => {
    if (isLogged)
      mutate({ cartProductId: cartProduct.id, newQuantity: quantity });
  };

  const handleDelete = () => {
    if (isLogged) deleteMutation.mutate(cartProduct.id);
  };

  return (
    <article className="cart-product">
      <div className="cart-product__img">
        <img
          src={cartProduct.product.images[0].url}
          alt={cartProduct.product.title}
        />
      </div>

      <div className="cart-product__detail">
        <header className="cart-product__header">
          <h4 className="cart-product__title">{cartProduct.product.title}</h4>
          <button
            className="cart-product__btn"
            onClick={handleDelete}
            disabled={deleteMutation.isLoading}
          >
            <i className="bx bx-trash"></i>
          </button>
        </header>
        <div>
          <div className="cart-product__controls">
            <button className="cart-product__btn" onClick={decrement}>
              -
            </button>
            <button>
              <span>{quantity}</span>
            </button>
            <button className="cart-product__btn" onClick={increment}>
              +
            </button>
          </div>
          {initialQuantity !== quantity && (
            <button onClick={handleUpdate} disabled={isLoading}>
              Update Cart
            </button>
          )}
        </div>
        <div>
          <h5>Total</h5>
          <p>
            <em>$ {initialQuantity * price}</em>
          </p>
        </div>
      </div>
    </article>
  );
};

export default CartProduct;
