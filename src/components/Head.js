import React from "react";
import {Helmet} from "react-helmet";

export default function Head() {
	return (
		<Helmet>
			<title>My Portfolio</title>
			<meta charset='utf-8' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<meta http-equiv='X-UA-Compatible' content='IE=edge' />
			<meta name='description' content='Web Development Portfolio' />
			<meta
				name='keywords'
				content='global, html, sass, jquery, fullstack developer, full stack developer, front end developer, back end developer, web developer, software engineer, web designer, css, javascript, react, angular, vue, node.js, mongodb, mysql, postgresql, git, github, scrum, agile, kanban, design thinking, problem solving, critical thinking, communication skills, teamwork, leadership, problem solving, entrepreneurship, startup, innovation, creativity, career advice, job search, interview tips, salary negotiation'
			/>
			<meta name='author' content='Osaite Arigbe-Osula' />
			<script
				defer
				src='https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'
			/>
			<script defer src='./functions.js' />
		</Helmet>
	);
}
