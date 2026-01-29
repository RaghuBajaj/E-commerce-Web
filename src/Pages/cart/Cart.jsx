import { useContext } from "react";
import { ItemContext } from "../../Context.jsx";
import "./Cart.css";
import all_product from "../../Frontend_Assets/all_product.js";

const Cart = () => {
  const { user, addToCart, removeFromCart, reduceItemFromCart } =
    useContext(ItemContext);
  const cart = user?.cart || [];

  return (
    <main className="cart-page">
      <section className="cart-table-section">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Products</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const product = all_product.find((itm) => itm.id === item.id);
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
                  <td>{product.new_price}</td>
                  <td className="">{item?.qty}</td>
                  <td>
                    <span onClick={() => reduceItemFromCart(item.id)}>-</span>
                    {product.new_price * item.qty}
                    <span onClick={() => addToCart(item.id)}>+</span>
                  </td>
                  <td
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    X
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section className="cart-summary-sectioin">
        <div className="cart-summary">
          <h2>Cart Totals</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{}</span>
          </div>

          <div className="summary-row">
            <span>Shipping Fee</span>
            <span>₹{}</span>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <span>₹{}</span>
          </div>

          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
        </div>

        <div className="promo-section">
          <h3>If you have a promo code, Enter it here</h3>
          <div className="promo-box">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart
