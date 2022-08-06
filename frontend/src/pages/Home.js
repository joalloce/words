import { useEffect, useState } from "react";

import QuoteDetails from "../components/QuoteDetails";
import QuoteForm from "../components/QuoteForm";

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch("http://localhost:4000/api/quotes");
      const json = await res.json();

      if (res.ok) {
        setQuotes(json);
      }
    };
    fetchQuotes();
  }, []);
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
