import './App.css';
import VideoCard from "./components/VideoCard";
import {useEffect, useState} from "react";
import db from "./firebase";

function App() {

    const [reels, setReels] = useState([]);

    useEffect(() => {
        // is going to run once
        db.collection('reels').onSnapshot(snapshot => {
            // go per each doc and take everything what is in it, all the data
            // .data() is everything in that ID the doc.
            // reeels gget as us the collection
            // the snapshot docs get us all the docs, the column 2, and the doc.data, gets everything what is associated with ID
            // with the data such as name, channel. likes
            // and we get in the reels, the array, of objects, because per every iteration it gets the new object, and stores in the array
            setReels(snapshot.docs.map(doc => doc.data))
        })
    }, []);

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
        <VideoCard
            channel="Rokas"
            avatarSrc="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg"
            song='Something cool'
            url='https://www.youtube-nocookie.com/embed/aUO5OD4wzmw?controls=0'
            likes={4324}
            shares={4324}
            />

          <VideoCard
              channel="Rokas"
              avatarSrc="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg"
              song='Something cool'
              url='https://www.youtube-nocookie.com/embed/aUO5OD4wzmw?controls=0'
              likes={4324}
              shares={4324}
          />

      {/*  Video component  */}
      {/*  Video component  */}
      {/*  Video component  */}
      {/*  Video component  */}
      </div>

    </div>
  );
}

export default App;
