import {useEffect, useState} from 'react';
import './App.css';
import Banner, { BannerProps } from './Sections/Banner';
import Header, { HeaderProps } from './Sections/Header';
import Testimonial, { TestimonialProps } from './Sections/Testimonial';
import About, { AboutProps } from './Sections/About';
import axios from 'axios';

type SiteData = {
  headerData: HeaderProps;
  bannerData: BannerProps;
  testimonialData: TestimonialProps;
  aboutData: AboutProps;
};

const baseUrl = "https://localhost:7117/api/sitedata/24c211fa-5c07-4d55-9a05-08b3a48ae845";

function App() {
  // const [loading, setLoading] = useState(true);

  const [data, setData] = useState<SiteData | undefined>(undefined);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  //This is where we will soon make our API call, but for now let's use dummy data
  // const data: SiteData = {
  //   headerData: {
  //     menuItems: ["Home", "Testimonial", "About"],
  //     siteName: "Clover Club"
  //   },
  //   bannerData: {
  //     location: "Home",
  //     title: "Images that tell your love story",
  //     tagline: "Because you should feel like this on your wedding day",
  //     image: "https://static.showit.co/1600/wpNVgUDES8-bZD1NJp9jRQ/51489/lauren-fair-photography-best-of-2019-luxury-film-destination-wedding-photographer_0313.jpg"
  //   },
  //   testimonialData: {
  //     location: "Testimonial",
  //     title: "Clover created the images of our actual dreams.",
  //     paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin malesuada sapien, sit amet sodales ex sagittis quis. Suspendisse facilisis mi volutpat urna."
  //   },
  //   aboutData: {
  //     location: "Jessica",
  //     name: "Bob",
  //     paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin malesuada sapien, sit amet sodales ex sagittis quis. Suspendisse facilisis mi volutpat urna pulvinar, quis aliquet dui lobortis. Sed egestas consequat risus.",
  //     image: "https://static.showit.co/800/-O2rS7X1RaGwTtvd2RhLhw/51489/normandy_engagement_session_rebecca_mark_lfp033_websize.jpg"
  //   }
  // };

  const isLoading = data === undefined;

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
        {/* <button onClick={() => setLoading(false)}>Hide loading</button> */}
      </div>
    )
  }

  return (
      <div className="App">
        <Header menuItems={data.headerData.menuItems} siteName={data.headerData.siteName}/>
        <Banner 
          location={data.bannerData.location}
          title={data.bannerData.title}
          tagline={data.bannerData.tagline}
          image={data.bannerData.image}
        />
        <Testimonial
          location={data.testimonialData.location}
          paragraph={data.testimonialData.paragraph}
          title={data.testimonialData.title}
        />

        <About
          location={data.aboutData.location}
          name={data.aboutData.name}
          paragraph={data.aboutData.paragraph}
          image={data.aboutData.image}
        />
      {/* <button onClick={() => setLoading(true)}>Show loading</button> */}
      </div>
    );
  }

export default App;
