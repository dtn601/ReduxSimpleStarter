import React from 'react';

const VideoListItem = ({video, onVideoClick}) => {
	//instead of passing props through the compontent and defining a new const video = props.video
	//by passing {video}, you avoid all of this redefining what it already should be
	
	//console.log(video)
	const imageURL = video.snippet.thumbnails.default.url;
	
	return (
		<li onClick={()=> onVideoClick(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageURL}/>
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>					
				</div>
			</div>
		</li>

	)
};

export default VideoListItem;