import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { useAddProductToCart } from "../../../hooks/queries/useAddProductToCart";
import { useSelector } from "react-redux";
import { useCart } from "../../../hooks/queries/useCart";

const ProductCard = ({ product }) => {
  const { mutate } = useAddProductToCart();
  const { data, isLoading, isError } = useCart();
  const isLogged = useSelector((store) => store.auth.isLogged);
  const navigate = useNavigate();

  const isProductInCart = data?.some(
    (cartProduct) => cartProduct.productId === product.id
  );

  const isAddVisible = !isLogged || !isProductInCart;

  const handleAdd = (e) => {
    e.preventDefault();
    if (!isLogged) navigate("/login");
    else mutate({ quantity: 1, productId: product.id });
  };

  return (
    <Link to={"/products/" + product.id}>
      <article className="product-cart">
        <header className="product-car_header">
          <div className="product-car__container-img">
            <img
              src={product.images[0].url}
              alt={product.title + "image1"}
              className="product-car__img product-car__container-img--visible"
            />
            <img
              src={product.images[1].url}
              alt={product.title + "image2"}
              className="product-car__img product-car__container-img--hidden"
            />
          </div>
          <p className="product-cast__paragraph">{product.brand}</p>
          <h2 className="product-title">{product.title}</h2>
        </header>

        <section className="product-cart__body">
          <h3 className="product-title">price</h3>
          <p className="product-cart__paragraph">{product.price}</p>
        </section>

        {isAddVisible && (
          <button
            className="product-cart__btn"
            onClick={handleAdd}
            disabled={isLoading}
          >
            <i className="bx bxs-cart-add"></i>
          </button>
        )}

        {!isAddVisible && <p>Ya tienes este producto en tu carrito</p>}
      </article>
    </Link>
  );
};

export default ProductCard;
