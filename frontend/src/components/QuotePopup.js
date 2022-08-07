import formatDistanceToNow from "date-fns/formatDistanceToNow";

const QuotePopup = ({ quote }) => {
  return (
    <div className="quote-details-popup">
      <p className="quote-font-popup">
        <strong>{quote.title}</strong>
      </p>
      <p>Author: {quote.author}</p>
      <p>
        {formatDistanceToNow(new Date(quote.createdAt), { addSuffix: true })}
      </p>
    </div>
  );
};

export default QuotePopup;
