import { useQuotesContext } from "../hooks/useQuotesContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const QuoteDetails = ({ quote }) => {
  const { dispatch } = useQuotesContext();
  const handleClick = async () => {
    const res = await fetch("http://localhost:4000/api/quotes/" + quote._id, {
      method: "DELETE",
    });
    const json = await res.json();
    if (res.ok) {
      dispatch({ type: "DELETE_QUOTE", payload: json });
    }
  };
  return (
    <div className="quote-details">
      <p className="quote-font">
        <strong>{quote.title}</strong>
      </p>
      <p>Author: {quote.author}</p>
      <p>
        {formatDistanceToNow(new Date(quote.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default QuoteDetails;
