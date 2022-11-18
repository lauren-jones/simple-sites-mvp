import './Testimonial.css';

export interface TestimonialProps {
  title: string,
  paragraph: string,
  location: string
}

export default function Testimonial(props: TestimonialProps) {
  const {location, title, paragraph} = props;
  return (
    <div className="testimonial" id={location}>
        <h2 className="testimonial__title">"{title}"</h2>
        <p className="testimonial__paragraph">{paragraph}</p>
    </div>
  )
}
