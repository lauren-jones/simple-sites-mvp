import './Banner.css';

export interface BannerProps {
    image: string,
    title: string,
    tagline: string
}

export default function Banner({ image, title, tagline }: BannerProps) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__image"/>
      <div className="banner__textBox">
        <h2 className="banner__title">{title}</h2>
        <div className="banner__underline" />
        <h3 className="banner__tagline">{tagline}</h3>
      </div>
    </div>
  )
}