import './Banner.css';

export interface BannerProps {
    image: string,
    title: string,
    tagline: string
    location: string
}

export default function Banner({ location, image, title, tagline }: BannerProps) {
  return (
    <div className="banner" id={location}>
      <img src={image} alt="" className="banner__image"/>
      <div className="banner__textBox">
        <h2 className="banner__title">{title}</h2>
        <div className="banner__underline" />
        <h3 className="banner__tagline">{tagline}</h3>
      </div>
    </div>
  )
}