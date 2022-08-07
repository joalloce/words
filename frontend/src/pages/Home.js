import { useEffect, useState } from "react";

import { useQuotesContext } from "../hooks/useQuotesContext";
import QuoteDetails from "../components/QuoteDetails";
import QuoteForm from "../components/QuoteForm";

const Home = () => {
  const { quotes, dispatch } = useQuotesContext();
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    if (quotes.length) {
      setShow(!show);
    }
  };
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
      {!show && <button onClick={handleShow}>See Quotes</button>}
      <div className="quotes">
        {show &&
          quotes &&
          quotes.map((quote) => <QuoteDetails key={quote._id} quote={quote} />)}
      </div>
      <QuoteForm />
    </div>
  );
};

export default Home;
