import {useState} from 'react';
import './App.css';
import Banner, { BannerProps } from './Banner';
import Header, { HeaderProps } from './Header';
import Testimonial, { TestimonialProps } from './Testimonial';
import About, { AboutProps } from './About';

type SiteProps = {
  headerProps: HeaderProps;
  bannerProps: BannerProps;
  testimonialProps: TestimonialProps;
  aboutProps: AboutProps;
};

function App() {
  const [loading, setLoading] = useState(true);

  //This is where we will soon make our API call, but for now let's use dummy data
  const data: SiteProps = {
    headerProps: {
      menuItems: ["Home", "Testimonial", "About"],
      siteName: "Clover Club"
    },
    bannerProps: {
      location: "Home",
      title: "Images that tell your love story",
      tagline: "Because you should feel like this on your wedding day",
      image: "https://static.showit.co/1600/wpNVgUDES8-bZD1NJp9jRQ/51489/lauren-fair-photography-best-of-2019-luxury-film-destination-wedding-photographer_0313.jpg"
    },
    testimonialProps: {
      location: "Testimonial",
      title: "Clover created the images of our actual dreams.",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin malesuada sapien, sit amet sodales ex sagittis quis. Suspendisse facilisis mi volutpat urna."
    },
    aboutProps: {
      location: "Jessica",
      name: "Bob",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin malesuada sapien, sit amet sodales ex sagittis quis. Suspendisse facilisis mi volutpat urna pulvinar, quis aliquet dui lobortis. Sed egestas consequat risus.",
      image: "https://static.showit.co/800/-O2rS7X1RaGwTtvd2RhLhw/51489/normandy_engagement_session_rebecca_mark_lfp033_websize.jpg"
    }
  };

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
        <button onClick={() => setLoading(false)}>Hide loading</button>
      </div>
    )
  }

  return (
      <div className="App">
        <Header menuItems={data.headerProps.menuItems} siteName={data.headerProps.siteName}/>
        <Banner 
          location={data.bannerProps.location}
          title={data.bannerProps.title}
          tagline={data.bannerProps.tagline}
          image={data.bannerProps.image}
        />
        <Testimonial
          location={data.testimonialProps.location}
          paragraph={data.testimonialProps.paragraph}
          title={data.testimonialProps.title}
        />

        <About
          location={data.aboutProps.location}
          name={data.aboutProps.name}
          paragraph={data.aboutProps.paragraph}
          image={data.aboutProps.image}
        />
      <button onClick={() => setLoading(true)}>Show loading</button>
      </div>
    );
  }

export default App;
