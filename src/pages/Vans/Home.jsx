import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="content">
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>
          Add Adventure to your life by joining the #vanlife movement. <br />{" "}
          Rent the perfect van to make your perfect road trip.
        </p>
        <button><Link to="/vans">I love u boobooooo❤️❤️❤️❤️</Link></button>
      </div>
    </div>
  );
}

export default Home;
