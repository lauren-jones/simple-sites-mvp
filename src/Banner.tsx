import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <div className="banner">
        <img src="https://static.showit.co/1600/wpNVgUDES8-bZD1NJp9jRQ/51489/lauren-fair-photography-best-of-2019-luxury-film-destination-wedding-photographer_0313.jpg" alt="" className="banner__image"/>
        <div className="banner__textBox">
            <h2 className="banner__title">Images that tell your love story</h2>
            <div className="banner__underline" />
            <h3 className="banner__tagline">Because you should feel like this on your wedding day</h3>
        </div>
    </div>
  )
}
