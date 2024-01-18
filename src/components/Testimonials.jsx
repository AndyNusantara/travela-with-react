import TestimonialCard from "./TestimonialCard";

const Testimonials = (props) => {
  const data = props;
  return (
    <div className="testimonial-section">
      <h1 className="section__title">TESTIMONIALS</h1>
      <h3 className="section__sub-title">Met our customer testimonials</h3>
      <div className="testimonial-section__card-wrapper">
        {data.props.map((item) => {
          return (
            <div className="testimonial-section__card-wrapper" key={item.name}>
              <TestimonialCard props={item}></TestimonialCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
