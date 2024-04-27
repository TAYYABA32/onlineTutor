import img from "../../assets/images.png";
import arrow from "../../assets/arrow.jpg";
import "./hero.scss";
export const Hero = () => {
  return (
    <div className=" flexCenter parentHero">
      <div className="rowHero">
        <h1>
          A good <span className="h1-span">#education</span> is always a base of
          a <br />
          bright future
        </h1>
        <p>
          Consectur adipiscing elitsedo eiusmod tempor incididuntem utaborate{" "}
          <br />
          dolore magna aliqua ad minim veniamque.
        </p>
        <input
          name="keyword"
          type="text"
          className=" flexCenter form-control"
          placeholder="What are you looking for?"
        />
        <img src={img} alt="" />
        <p>
          select category <img src={arrow} alt="" />{" "}
        </p>
        <button>Search now</button>
        <h5>Popular searches:</h5>
        <ul>
          <li>Graduation,</li>
          <li>Health &</li>
          <li>sports</li>
        </ul>
      </div>
    </div>
  );
};
