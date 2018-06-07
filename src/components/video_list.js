import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	//this const is iterating through the array of props.videos that YT API provides
	//and returns the Videolist components with the props etag and each individual
	//video object passed to each compontent
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoClick={props.onVideoSelect}
				key={video.etag}
				video={video} />
		)
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;