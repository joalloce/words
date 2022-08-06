import { useEffect, useState } from "react";

import { useQuotesContext } from "../hooks/useQuotesContext";
import QuoteDetails from "../components/QuoteDetails";
import QuoteForm from "../components/QuoteForm";

const Home = () => {
  const { quotes, dispatch } = useQuotesContext();
  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch("http://localhost:4000/api/quotes");
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_QUOTES", payload: json });
      }
    };
    fetchQuotes();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="quotes">
        {quotes &&
          quotes.map((quote) => <QuoteDetails key={quote._id} quote={quote} />)}
      </div>
      <QuoteForm />
    </div>
  );
};

export default Home;
