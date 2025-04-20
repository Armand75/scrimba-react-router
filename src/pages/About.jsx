import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <img
        alt="camping van and a woman sitting in front of it."
        src="../../public/about-pic-small.jpg"
      />

      <div>
        <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="explore">
        <h2>
          Your destination is waiting. <br />
          Your van is ready.
        </h2>

        <button>Explore new van</button>
      </div>
    </div>
  );
}

export default About;
