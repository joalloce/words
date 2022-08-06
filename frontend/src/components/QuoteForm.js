import { useState } from "react";
import { useQuotesContext } from "../hooks/useQuotesContext";

const QuoteForm = () => {
  const { dispatch } = useQuotesContext();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const quote = { title, author };

    const res = await fetch("http://localhost:4000/api/quotes", {
      method: "POST",
      body: JSON.stringify(quote),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (res.ok) {
      setTitle("");
      setAuthor("");
      dispatch({ type: "ADD_QUOTE", payload: json });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Quote</h3>
      <label>Quote:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Author:</label>
      <input
        type="next"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      <button>Add quote</button>
    </form>
  );
};
export default QuoteForm;
