import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ItemContext = createContext({});

const ItemContextProvider = (props) => {
  
  const navigate = useNavigate();

  const value = { navigate };

  return (
    <ItemContext.Provider value={value}>{props.children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;
