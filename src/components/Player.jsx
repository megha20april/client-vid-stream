import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

export default function Player() {
  const { key } = useParams();
  console.log(key);
  const [isBuffering, setIsBuffering] = useState(false);

  const handleBuffer = () => {
    setIsBuffering(true);
    console.log("Buffering...");
  };

  const handleBufferEnd = () => {
    setIsBuffering(false);
    console.log("Buffering ended.");
  };

  const handleError = (error) => {
    console.error("Playback error:", error);
  };

  return (
    <div>
      {isBuffering && <p>Buffering... Please wait.</p>}
      <ReactPlayer
        url={`http://transcoded-videos-meg-app.s3-website-us-east-1.amazonaws.com/${key}/master.m3u8`}
        playing
        controls
        width="100%"
        height="auto"
        onBuffer={handleBuffer}
        onBufferEnd={handleBufferEnd}
        onError={handleError}
      />
    </div>
  );
}
