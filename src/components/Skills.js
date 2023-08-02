import React from "react";

export default function Skills(props) {
	return (
		<span className={props.tag}>
			{props.data.map((skill) => {
				return (
					<span className={["skill " + skill.title]}>
						{skill.element}
						<h2 className='skill-name'>{skill.name}</h2>
					</span>
				);
			})}
		</span>
	);
}
