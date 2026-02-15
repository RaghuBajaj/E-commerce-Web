import "./Checkout.css";
import { useContext, useState } from "react";
import { ItemContext } from "../../Context/Context.jsx";

const Checkout = () => {

  const [address, setAddress] = useState({
    country: "",
    fullName: "",
    mobile: "",
    house: "",
    area: "",
    landmark: "",
    pincode: 0,
    city: "",
    state: "",
  });

  const handleAddressField = (e) => {
    const {input, name} = e.target;
    setAddress({ ...address, [name]: input });
  };

  return (
    <main className="checkout-page">
      <section className="address-section">
        <h2>Delivery Address</h2>

        <form className="">
          <div className="form-group">
            <label className="">Country</label>
            <input
              type="text"
              name="country"
              onChange={handleAddressField}
              className=""
            />
          </div>
          <div className="form-group">
            <label className="">Full name (First and Last name)</label>
            <input
              type="text"
              name= "fullName"
              onChange={handleAddressField}
              className=""
            />
          </div>
          <div className="form-group">
            <label className="">Mobile number</label>
            <input
              type="text"
              name= "mobile"
              onChange={handleAddressField}
              placeholder="10-digit mobile number without prefixes"
              className=""
            />
          </div>
          <div className="form-group">
            <label className="">Flat, House no., Building, Company, Apartment</label>
            <input
              type="text"
              name= "house"
              onChange={handleAddressField}
              className=""
            />
          </div>
          <div className="form-group">
            <label className="">Area, Street, Sector, Village</label>
            <input
              type="text"
              name= "area"
              onChange={handleAddressField}
              className=""
            />
          </div>
          <div className="form-group">
            <label className="">Landmark</label>
            <input
              type="text"
              name= "landmark"
              placeholder="E.g. near apollo hospital"
              onChange={handleAddressField}
              className=""
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="">Pincode</label>
              <input
                type="text"
                name= "pincode"
                placeholder="6-digit Pincode"
                onChange={handleAddressField}
                className=""
              />
            </div>
            <div className="form-group">
              <label className="">Town/City</label>
              <input
                type="text"
                name= "city"
                onChange={handleAddressField}
                className=""
              />
            </div>
          </div>
          <div className="form-group">
            <label className="">State</label>
            <input
              type="text"
              name= ""
              onChange={handleAddressField}
              className=""
            />
          </div>
        </form>

          <button type="submit" className="save-btn">Save address</button>
      </section>

      <section className="summary-section">
        <div className="summary-box">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹999</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>₹50</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₹1049</span>
          </div>

          <button className="pay-btn">Pay Now</button>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
