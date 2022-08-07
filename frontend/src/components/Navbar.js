import { useState } from "react";
import { Link } from "react-router-dom";
import QuotePopup from "./QuotePopup";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [randomQuote, setRandomQuote] = useState(null);
  const handleClick = async () => {
    const res = await fetch("http://localhost:4000/api/quotes/random");
    if (!res.ok) {
      setRandomQuote(null);
    }

    if (res.ok) {
      const json = await res.json();
      setRandomQuote(json);
      setShow(true);
    }
  };
  return (
    <header>
      {show && (
        <div className="popup" onClick={() => setShow(false)}>
          <div className="popup-inner">
            <QuotePopup quote={randomQuote} />
          </div>
        </div>
      )}
      <div className="container">
        <Link to="/">
          <h1>Words</h1>
        </Link>
        <div href="/" onClick={handleClick}>
          <h1>Random Quote</h1>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
