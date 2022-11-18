import './About.css';

export interface AboutProps {
    name: string,
    paragraph: string,
    image: string,
    location: string
}

export default function About({ name, paragraph, image, location }: AboutProps) {
  return (
    <section className="about" id={location}>
        <img className="about__image" src={image} alt=""></img>
        <div className="about__info">
            <h2 className="about__infoTitle">Behind the lens</h2>
            <div className="about__underline" />
            <h3 className="about__infoName">I'm {name}</h3>
            <p className="about__infoParagraph">{paragraph}</p>
        </div>
    </section>
  )
}
