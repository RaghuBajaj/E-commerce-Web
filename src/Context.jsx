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
    if (isExist === undefined) {
      setAllUser([
        ...allUser,
        {
          name: user.name,
          email: user.email,
          password: user.password,
          cart: [],
          orders: [],
        },
      ]);
      setUser(isExist);
      navigate("/");
      return console.log("New user created! i:", user);
    }
    return console.log("User exists! o:", isExist);
  };

  const checkUser = (user) => {
    const isExist = allUser.find((item) => item.email === user.email);
    if (isExist === undefined) {
      return console.log("User doesn't exists! i:", isExist);
    }
    setUser(isExist);
    navigate("/");
    return console.log("User logged-in! o:", isExist);
  };

  useEffect(() => {
    console.log("allusers", allUser);
    console.log("User:", user);
  }, [createUser, allUser, checkUser, user, navigate]);
  const value = {
    navigate,
    product,
    setProduct,
    createUser,
    checkUser,
    user,
    setUser,
  };

  return (
    <ItemContext.Provider value={value}>{props.children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;
