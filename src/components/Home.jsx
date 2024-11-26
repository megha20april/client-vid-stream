import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useVids from "../hooks/useVids";

function Home() {
  const videos = useVids();
  console.log(videos);

  return (
    <>
      {videos.map((vid) => (
        <div key={vid.key}>
          <Link to={"/player/" + vid.key}>
            <div>
              <img src={` `} alt={vid.title} />
              <h2>{vid.title}</h2>
              <p>Duration: {vid.duration}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Home;
