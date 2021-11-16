import React from "react";
import ReactPlayer from "react-player";
import './Male.css';

function Male() {
  return (
    <React.Fragment>
      <div className="Video-responsive" height='250' width='350'>
        <h3>Workout videos - <a href="https://www.pexels.com/search/videos/weight%20loss/">Healthy Diet</a>
        </h3>
        </div>
        <div className="Video-responsive2">
          <ReactPlayer url="https://youtu.be/ZrL3FNvSu1g" />
        </div>
        <div className="Video-responsive3">
          <ReactPlayer url="https://youtu.be/TzGQNFUyHwc" />
        </div>
        <div className="Video-responsive4">
          <ReactPlayer url="https://youtu.be/BkS1-El_WlE" />
        </div>
        <div className="Video-responsive5">
          <ReactPlayer url="https://youtu.be/GL1C6FCCKnQ" />
        </div>
        <div className="Video-responsive6">
          <ReactPlayer url="https://youtu.be/qEmznUhN6IE" />
        </div>
        
    </React.Fragment>
  );
}
export default Male;




