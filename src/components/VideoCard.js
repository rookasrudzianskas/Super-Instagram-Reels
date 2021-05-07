import React, {useRef, useState} from 'react';
import "./styles/VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

const VideoCard = ({ url, likes, shares, channel, avatarSrc, song }) => {

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
            <iframe ref={videoRef} onClick={onVideoPress} className="video__player" src={url}
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>

            <VideoFooter
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    );
};

export default VideoCard;
