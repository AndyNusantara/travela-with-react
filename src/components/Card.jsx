function Card(props) {
  const data = props;
  return (
    <div className="card">
      <img src={data.props.url} alt={data.props.alt} />
      <h1>{data.props.title}</h1>
    </div>
  );
}

export default Card;
