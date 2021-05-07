import React, {useRef, useState} from 'react';
import "./styles/VideoCard.css";
import VideoHeader from "./VideoHeader";

const VideoCard = () => {

    const [isVideoPlaying, setIsVideoPlaying] = useState('');
    // ref is like your pointing to some object
    // is like we are pointing to osmehting
    // now we have the pointer pointing to the video and that is it
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(isVideoPlaying) {
            // stop the video
            // we get the current video in the video ref
            videoRef.current.pause();
            setIsVideoPlaying(false);
        } else {
            // start playing video
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }

    return (
        <div className="videoCard">
            <VideoHeader />
            {/*     but with video we like point to the video from videoRef*/}
            <iframe ref={videoRef} onClick={onVideoPress} className="video__player" src="https://www.youtube-nocookie.com/embed/aUO5OD4wzmw?controls=0"
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>

            <VideoFooter />
        </div>
    );
};

export default VideoCard;
