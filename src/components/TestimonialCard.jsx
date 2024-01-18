const TestimonialCard = (props) => {
  const data = props;

  return (
    <div className="testimonial-card">
      <h4 className="testimonial-card__comment">
        &quot;{data.props.comment}&quot;
      </h4>
      <div className="testimonial-card__testi-wrapper">
        <div className="testimonial-card__img-wrapper">
          <img
            className="testimonial-card__img"
            src={`./testimonials/${data.props.url}`}
            alt="testimonial-img"
          />
        </div>

        <div className="testimonial-card__name-wrapper">
          <h4 className="testimonial-card__name">{data.props.name}</h4>
          <h5 className="testimonial-card__tag">{data.props.tag}</h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
