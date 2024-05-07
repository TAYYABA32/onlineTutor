import img from "../../assets/images.png";
import img1 from "../../assets/img-03.png";

import { CiSearch } from "react-icons/ci";
import "./hero.scss";
export const Hero = () => {
  return (
    <div className="  parentHero">
      <div className="rowHero">
        <h1>
          A good <span className="h1-span">#education</span> is always a base of
          a bright future
        </h1>
        <p>
          Consectur adipiscing elitsedo eiusmod tempor incididuntem utaborate{" "}
          <br />
          dolore magna aliqua ad minim veniamque.
        </p>
        <div className="rect-box">
          <div className="search-text">
            <CiSearch className="searchIcon" height={40} width={40} />
            <input
              name="keyword"
              type="text"
              placeholder="What are you looking for?"
            />{" "}
          </div>
          <div className="search-select">
            {" "}
            <img src={img} alt="" />
            <select name="category">
              <option value="">Select category</option>
            </select>
          </div>
          <button>Search now</button>
        </div>
        <div className="parentContainer">
          <h5>Popular searches:</h5>
          <ul>
            <li>Graduation,</li>
            <li>Health &</li>
            <li>sports</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="rightImg">
          {" "}
          <img className="bg" src={img1} alt="" />
          {/* <div className="bg">

        </div> */}
        </div>
      </div>
    </div>
  );
};
