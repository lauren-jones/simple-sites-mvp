import {useState} from 'react';
import './App.css';
import Banner from './Banner';

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
        <button onClick={() => setLoading(false)}>Hide loading</button>
      </div>
    )
  } else {
  return (
      <div className="App">
        <Banner 
          title="Images that tell your love story"
          tagline="Because you should feel like this on your wedding day"
          image="https://static.showit.co/1600/wpNVgUDES8-bZD1NJp9jRQ/51489/lauren-fair-photography-best-of-2019-luxury-film-destination-wedding-photographer_0313.jpg"
        />
      <button onClick={() => setLoading(true)}>Show loading</button>
      </div>
    );
  }
}

export default App;
