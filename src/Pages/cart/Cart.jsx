import { useContext } from "react";
import { ItemContext } from "../../Context/Context.jsx";
import "./Cart.css";
import all_product from "../../Frontend_Assets/all_product.js";

const Cart = () => {
  const { user, addToCart, removeFromCart, reduceItemFromCart, navigate } =
    useContext(ItemContext);
  const cart = user?.cart || [];
  let subtotal = 0;
  return (
    <main className="cart-page">
      <section className="cart-table-section">
        <h2 className="cart-title">Your Shopping Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => {
              const product = all_product.find((p) => p.id === item.id);
              subtotal += product.new_price * item.qty;
              return (
                <tr key={item.id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="cart-img"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>₹{product.new_price}</td>
                  <td>
                    <div className="qty-box">
                      <button onClick={() => reduceItemFromCart(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => addToCart(item.id)}>+</button>
                    </div>
                  </td>
                  <td className="item-total">
                    ₹{product.new_price * item.qty}
                  </td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section className="cart-summary-section">
        <div className="cart-summary">
          <h2>Cart Totals</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>₹{subtotal > 0 ? 50 : 0}</span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span>₹{subtotal > 0 ? subtotal + 50 : subtotal}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="promo-section">
          <h3>Have a promo code?</h3>
          <div className="promo-box">
            <input type="text" placeholder="Enter promo code" />
            <button>Apply</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
