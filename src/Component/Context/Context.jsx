import { createContext, useContext, useReducer } from "react";
import reducer from "./ContextReducer";

const newContext = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    title: "",
    description: "",
    itemList: [],
    completed: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Get input value
  const inputValue = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "INPUT_VALUE", payload: { name, value } });
  };
  // get list of items
  const addItem = () => {
    const { title, description } = state;
    if (title && description) {
      const newItem = { title, description };
      dispatch({ type: "ITEM_LIST", payload: newItem });
    }
    dispatch({ type: "RESET_INPUT" });
  };
  const deleteItem = (id) => {
    dispatch({ type: "DELTE_ITEM", payload: id });
  };
  const completedTask = (id) => {
    dispatch({ type: "COMPLETED_TASK", payload: id });
  };
  return (
    <newContext.Provider
      value={{ state, inputValue, addItem, deleteItem, completedTask }}
    >
      {children}
    </newContext.Provider>
  );
};

const UserContext = () => {
  return useContext(newContext);
};

export { UserContext, ContextProvider };
