import React from 'react';
import "./styles/VideoHeader.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined"

const VideoHeader = () => {
    return (
        <div className="videoHeader">
            <ArrowBackIosIcon />
            <h1>Reels</h1>
            <CameraAltOutlinedIcon />
        </div>
    );
};

export default VideoHeader;
