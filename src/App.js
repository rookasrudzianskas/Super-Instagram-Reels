import './App.css';
import VideoCard from "./components/VideoCard";

function App() {
  return (
    <div className="app">


      <div className="app__top">
        <img className="app__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" />
        {/* image at the top - logo*/}
          <h1>Reels🔥</h1>
        {/* Reels text */}

      </div>

      <div className="app__videos">
      {/* Container of app__videors (scrollable container) */}
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      {/*  Video component  */}
      {/*  Video component  */}
      {/*  Video component  */}
      {/*  Video component  */}
      </div>

    </div>
  );
}

export default App;
