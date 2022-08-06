import { useContext } from "react";
import { QuoteContext } from "../context/QuoteContext";

export const useQuotesContext = () => {
  const context = useContext(QuoteContext);

  if (!context) {
    throw Error("error");
  }
  return context;
};
