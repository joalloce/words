import { createContext, useReducer } from "react";

export const QuoteContext = createContext();

export const quoteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return {
        quotes: [action.payload, ...state.quotes],
      };
    case "SET_QUOTES":
      return {
        quotes: action.payload,
      };
    case "DELETE_QUOTE":
      return {
        quotes: state.quotes.filter(
          (quote) => quote._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const QuoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, { quotes: null });
  return (
    <QuoteContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuoteContext.Provider>
  );
};
