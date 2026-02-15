import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ItemContext = createContext({});

const ItemContextProvider = (props) => {
  //temporary
  const [allUser, setAllUser] = useState([]);
  const [user, setUser] = useState(null);
  //
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const createUser = (user) => {
    const isExist = allUser.find((item) => item.email === user.email);
    if (isExist) {
      console.log("User already exists");
      return;
    }
    const userObj = {
      name: user.name,
      email: user.email,
      password: user.password,
      cart: [],
      orders: [],
    };
    setAllUser([...allUser, userObj]);
    setUser(userObj);
    navigate("/");
    return console.log("New user created! i:", user);
  };

  const checkUser = (user) => {
    const isExist = allUser.find((item) => item.email === user.email);
    if (isExist === undefined) {
      return console.log("User doesn't exists! i:", isExist);
    }
    setUser(isExist);
    navigate("/");
  };

  const handleLogout = () => {
    const newAllUsers = allUser.map((item) => {
      if (item.email === user.email) {
        return user;
      }
      return item;
    });
    setAllUser(newAllUsers);
    setUser(null);
    navigate("/login");
  };

  const addToCart = (id) => {
    if (!user) {
      console.log("Please login first to add in the cart");
      return;
    }
    const cartList = user.cart || [];
    const isItemPresent = cartList.find((item) => item.id === id);

    if (isItemPresent) {
      const newCartList = cartList.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
      setUser({ ...user, cart: newCartList });
    } else {
      const newCartList = [...cartList, { id: id, qty: 1 }];
      setUser({ ...user, cart: newCartList });
    }
  };

  const reduceItemFromCart = (id) => {
    if (!user) {
      console.log("Please login first to remove from the cart");
      return;
    }
    const newCartList = user.cart
      .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
      .filter((item) => item.qty > 0);
    setUser({ ...user, cart: newCartList });
  };

  const removeFromCart = (id) => {
    if (!user) {
      console.log("Please login first to remove from the cart");
      return;
    }
    const newCart = user.cart.filter((item) => item.id !== id);
    setUser({ ...user, cart: newCart });
  };

  useEffect(() => {
    const _allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    const _user = JSON.parse(localStorage.getItem("user")) || null;
    setAllUser(_allUsers);
    setUser(_user);
  }, []);

  useEffect(() => {
    if (allUser || allUser.length > 0) {
      localStorage.setItem("allUsers", JSON.stringify(allUser));
    }
  }, [allUser]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);


  const value = {
    navigate,
    product,
    setProduct,
    createUser,
    checkUser,
    user,
    setUser,
    addToCart,
    reduceItemFromCart,
    removeFromCart,
    handleLogout,
  };

  return (
    <ItemContext.Provider value={value}>{props.children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;
