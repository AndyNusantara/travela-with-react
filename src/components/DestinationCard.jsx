import { useState } from "react";

function Card(props) {
  const data = props;

  const [fill, setFill] = useState(false);

  const starOnClick = () => {
    setFill(!fill);
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={data.props.url} alt={data.props.alt} />
      </div>
      <div className="card-title__wrapper">
        <h1 className="card-title">{data.props.title}</h1>
        <span
          className={fill ? "card-star fill" : "card-star"}
          onClick={starOnClick}
        ></span>
      </div>
      <div className="card-desc">
        <p>{data.props.desc}</p>
      </div>
      <button className="card-button button">View more</button>
    </div>
  );
}

export default Card;
