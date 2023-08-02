import React from "react";

export default function SliderItem(props) {
	return (
		<li className={props.liClass}>
			<a href={props.liveURL}>
				<div className='slider--item-image'>
					<img src={props.imageURL} alt={props.title} />
				</div>
				<p className='slider--item-title'>{props.title}</p>
				<p className='slider--item-description'>
					{props.desc} <a href={props.sourceURL}>here</a>.
				</p>
			</a>
		</li>
	);
}
