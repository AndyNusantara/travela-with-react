import Card from "./Card";

function Destinations(props) {
  const data = props;
  return (
    <div className="destination-section">
      <h1>Popular Destinations</h1>
      <div className="destination__card-wrapper">
        {data.props.map((item) => {
          return <Card props={item} key={item.alt} />;
        })}
      </div>
    </div>
  );
}

export default Destinations;
