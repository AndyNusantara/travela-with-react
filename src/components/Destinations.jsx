import Card from "./DestinationCard";

function Destinations(props) {
  const data = props;
  return (
    <div className="destination-section">
      <h1 className="section__title">POPULAR DESTINATIONS</h1>
      <h3 className="section__sub-title">Our most popular destinations</h3>
      <div className="destination__card-wrapper">
        {data.props.map((item) => {
          return <Card props={item} key={item.alt} />;
        })}
      </div>
    </div>
  );
}

export default Destinations;
