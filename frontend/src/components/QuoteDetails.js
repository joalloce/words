const QuoteDetails = ({ quote }) => {
  const handleClick = async () => {
    const res = await fetch("http://localhost:4000/api/quotes/" + quote._id, {
      method: "DELETE",
    });
    //update de ui
  };
  return (
    <div className="quote-details">
      <p className="quote-font">
        <strong>{quote.title}</strong>
      </p>
      <p>Author: {quote.author}</p>
      <p>{quote.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default QuoteDetails;
