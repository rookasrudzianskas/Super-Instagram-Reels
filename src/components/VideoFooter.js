import React from 'react';
import "./styles/VideoFooter.css";
import { Button, Avatar } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const VideoFooter = ({ channel, song, likes, shares, avatarSrc }) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <Avatar src={avatarSrc} />
                <h3>
                    {channel} • <Button>Follow</Button>
                </h3>
            </div>

            <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon" />
                <Ticker mode="smooth">
                    {({ index }) => (
                        <>
                        <h1>{song}</h1>
                        </>
                    )}
                </Ticker>
            </div>

        </div>
    );
};

export default VideoFooter;
