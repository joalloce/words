import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClick = async () => {
    const res = await fetch("http://localhost:4000/api/quotes/random");
    const json = await res.json();
    console.log(json);
    // had to splash it in a pop up.
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Words</h1>
        </Link>
        <a onClick={handleClick}>
          <h1>Random Quote</h1>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
