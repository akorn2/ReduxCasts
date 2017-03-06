import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  // if no video, then we return the text.


  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  // syntax sugar using backticks `` (not astris '')
  // function components acess props as an arguement. compared to class components access props as ```this.props```

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;