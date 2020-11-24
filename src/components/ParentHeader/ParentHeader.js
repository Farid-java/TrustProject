import React from 'react';
import parentHeader from "./ParentHeader.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

function ParentHeader() {
    return (
        <div className="bg">
            <div className="icons">
           <div className="iconColor"><a href="#"><TwitterIcon  /> </a></div>
            <div className="iconColor"><a href="#"> <FacebookIcon /></a></div>
           <div className="iconColor"><a href="#"> <LinkedInIcon /></a></div>
          <div className="iconColor"> <a href="#"> <YouTubeIcon /></a> </div>
          </div>
        </div>
    )
}

export default ParentHeader
