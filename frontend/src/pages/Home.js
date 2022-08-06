import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch("http://localhost:4000/api/quotes");
      const json = await res.json();

      if (res.ok) {
        console.log(json);
      }
    };
    fetchQuotes();
  }, []);
  return (
    <div className="home">
      <div className="quotes">{}</div>
    </div>
  );
};

export default Home;
