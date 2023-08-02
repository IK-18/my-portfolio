import React from "react";

export default function AboutOptions(props) {
	return (
		<span>
			<h3>{props.h3}</h3>
			<div className={props.divClass}>
				<p className='text-2xl'>{props.p}</p>
			</div>
		</span>
	);
}
