/* eslint-disable no-unused-vars */
import $ from "jquery";
import "./css/output.css";
import React, {useRef, useEffect, useState} from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import useWindowDimensions from "./hooks/useWindowDimensions";
import {Helmet} from "react-helmet";
import "./functions.js";
import backg from "./images/backg.png";
import aboutVisual from "./images/about-visual.png";
import netJS from "./images/netJS.png";
import osasula from "./images/osasula.png";
import RPS from "./images/RPS.jpeg";
import supDB from "./images/supDB.jpeg";
import ticTac from "./images/ticTac.jpeg";
import tipCalc from "./images/tipCalc.jpeg";
import weather from "./images/weather.png";
import youtube from "./images/youtube.jpeg";
import portfolio from "./images/portfolio.png";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
	"pk.eyJ1IjoiaWstMTgiLCJhIjoiY2xob3V5ZmNrMDBxbjNjbXNsejQ3ZWtnZSJ9.N-IuSYETQcRA4DHjACi8vQ";

function App() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(5.598889);
	const [lat, setLat] = useState(6.326944);
	const [zoom, setZoom] = useState(17);

	const {vheight, vwidth} = useWindowDimensions();

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/ik-18/clk2drh4n00ev01pe68sgdnz8",
			center: [lng, lat],
			zoom: zoom,
		});
		const marker = new mapboxgl.Marker({
			color: "black",
		})
			.setLngLat([lng, lat])
			.addTo(map.current);
	});

	return (
		<div className='App'>
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
			<div className='device-notification'>
				<ul className='device-notification--logo w-[50vw] flex-row justify-around'>
					<li>
						<a className='' href='https://github.com/IK-18'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='50'
								height='50'
								viewBox='0,0,256,256'
								style={{fill: "#ffffff"}}
							>
								<g
									fillOpacity='0'
									fill='#ffffff'
									fillRule='nonzero'
									stroke='none'
									strokeWidth='1'
									strokeLinecap='butt'
									strokeLinejoin='miter'
									strokeMiterlimit='10'
									strokeDasharray=''
									strokeDashoffset='0'
									fontFamily='none'
									fontWeight='none'
									fontSize='none'
									textAnchor='none'
									style={{mixBlendMode: "normal"}}
								>
									<path
										d='M0,256v-256h256v256z'
										id='bgRectangle'
									></path>
								</g>
								<g
									fill='#ffffff'
									fillRule='nonzero'
									stroke='none'
									strokeWidth='1'
									strokeLinecap='butt'
									strokeLinejoin='miter'
									strokeMiterlimit='10'
									strokeDasharray=''
									strokeDashoffset='0'
									fontFamily='none'
									fontWeight='none'
									fontSize='none'
									textAnchor='none'
									style={{mixBlendMode: "normal"}}
								>
									<g transform='scale(5.12,5.12)'>
										<path d='M25,8c-9.389,0 -17,7.611 -17,17c0,9.389 7.611,17 17,17c9.389,0 17,-7.611 17,-17c0,-9.389 -7.611,-17 -17,-17zM25,9c8.837,0 16,7.163 16,16c0,7.31591 -4.91495,13.47209 -11.61914,15.37891c-0.13629,-0.20623 -0.23557,-0.44651 -0.22852,-0.72852c0.027,-1.057 0,-3.52078 0,-4.42578c0,-1.553 -0.98242,-2.6543 -0.98242,-2.6543c0,0 7.70898,0.08733 7.70898,-8.13867c0,-3.174 -1.65625,-4.82617 -1.65625,-4.82617c0,0 0.87027,-3.38917 -0.30273,-4.82617c-1.315,-0.142 -3.67078,1.25716 -4.67578,1.91016c0,0 -1.59119,-0.65234 -4.24219,-0.65234c-2.651,0 -4.24414,0.65234 -4.24414,0.65234c-1.006,-0.653 -3.36078,-2.05216 -4.67578,-1.91016c-1.173,1.437 -0.30273,4.82617 -0.30273,4.82617c0,0 -1.6582,1.65022 -1.6582,4.82422c0,8.226 7.70898,8.13867 7.70898,8.13867c0,0 -0.77627,0.87482 -0.94727,2.16211c-0.5318,0.18849 -1.26729,0.41602 -1.96875,0.41602c-1.673,0 -2.94416,-1.62691 -3.41016,-2.37891c-0.46,-0.742 -1.40225,-1.36523 -2.28125,-1.36523c-0.579,0 -0.86328,0.29009 -0.86328,0.62109c0,0.331 0.81166,0.56083 1.34766,1.17383c1.13,1.293 1.10981,4.20313 5.13281,4.20313c0.47416,0 1.32562,-0.10771 2.00781,-0.20117c-0.00441,0.94422 -0.01494,1.86483 0,2.44922c0.00706,0.2824 -0.09192,0.52405 -0.22852,0.73047c-6.70419,-1.90681 -11.61914,-8.063 -11.61914,-15.37891c0,-8.837 7.163,-16 16,-16z'></path>
									</g>
								</g>
							</svg>
						</a>
					</li>
					<li>
						<a
							className=''
							href='https://www.linkedin.com/in/osaite-arigbe-osula-6386a6170/'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='60'
								height='60'
								viewBox='0,0,256,256'
								style={{fill: "#000000"}}
							>
								<g
									fill='#ffffff'
									fillRule='nonzero'
									stroke='none'
									strokeWidth='1'
									strokeLinecap='butt'
									strokeLinejoin='miter'
									strokeMiterlimit='10'
									strokeDasharray=''
									strokeDashoffset='0'
									fontFamily='none'
									fontWeight='none'
									fontSize='none'
									textAnchor='none'
									style={{mixBlendMode: "normal"}}
								>
									<g transform='scale(8.53333,8.53333)'>
										<path d='M9,25h-5v-15h5zM6.501,8c-1.383,0 -2.501,-1.121 -2.501,-2.501c0,-1.38 1.12,-2.499 2.501,-2.499c1.378,0 2.499,1.121 2.499,2.499c0,1.38 -1.121,2.501 -2.499,2.501zM27,25h-4.807v-7.3c0,-1.741 -0.033,-3.98 -2.499,-3.98c-2.503,0 -2.888,1.896 -2.888,3.854v7.426h-4.806v-15.011h4.614v2.051h0.065c0.642,-1.18 2.211,-2.424 4.551,-2.424c4.87,0 5.77,3.109 5.77,7.151c0,0 0,8.233 0,8.233z'></path>
									</g>
								</g>
							</svg>
						</a>
					</li>
					<li>
						<a className='' href='mailto:ik.arigbe.osula@gmail.com'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='50'
								height='50'
								viewBox='0,0,256,256'
								style={{fill: "#ffffff"}}
							>
								<g
									fillOpacity='0'
									fill='#ffffff'
									fillRule='nonzero'
									stroke='none'
									strokeWidth='1'
									strokeLinecap='butt'
									strokeLinejoin='miter'
									strokeMiterlimit='10'
									strokeDasharray=''
									strokeDashoffset='0'
									fontFamily='none'
									fontWeight='none'
									fontSize='none'
									textAnchor='none'
									style={{mixBlendMode: "normal"}}
								>
									<path
										d='M0,256v-256h256v256z'
										id='bgRectangle'
									></path>
								</g>
								<g
									fill='#ffffff'
									fillRule='nonzero'
									stroke='none'
									strokeWidth='1'
									strokeLinecap='butt'
									strokeLinejoin='miter'
									strokeMiterlimit='10'
									strokeDasharray=''
									strokeDashoffset='0'
									fontFamily='none'
									fontWeight='none'
									fontSize='none'
									textAnchor='none'
									style={{mixBlendMode: "normal"}}
								>
									<g transform='scale(8.53333,8.53333)'>
										<path d='M4,5c-1.09306,0 -2,0.90694 -2,2v16c0,1.09306 0.90694,2 2,2h22c1.09306,0 2,-0.90694 2,-2v-16c0,-1.09306 -0.90694,-2 -2,-2zM6.69922,7h16.60156l-8.30078,6.13477zM5,9.47461l10,7.39062l10,-7.39062v13.52539h-20z'></path>
									</g>
								</g>
							</svg>
						</a>
					</li>
					<li>
						<a className='' href='https://wa.link/uvtsh2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='50'
								height='50'
								viewBox='0,0,256,256'
								style={{fill: "#000000"}}
							>
								<g
									fill='#ffffff'
									fillRule='evenodd'
									stroke='none'
									strokeWidth='1'
									strokeLinecap='butt'
									strokeLinejoin='miter'
									strokeMiterlimit='10'
									strokeDasharray=''
									strokeDashoffset='0'
									fontFamily='none'
									fontWeight='none'
									fontSize='none'
									textAnchor='none'
									style={{mixBlendMode: "normal"}}
								>
									<g transform='scale(8,8)'>
										<path d='M24.50391,7.50391c-2.25781,-2.25781 -5.25781,-3.50391 -8.45312,-3.50391c-6.58594,0 -11.94922,5.35938 -11.94922,11.94531c-0.00391,2.10547 0.54688,4.16016 1.59375,5.97266l-1.69531,6.19141l6.33594,-1.66406c1.74219,0.95313 3.71094,1.45313 5.71094,1.45703h0.00391c6.58594,0 11.94531,-5.35937 11.94922,-11.94922c0,-3.19141 -1.24219,-6.19141 -3.49609,-8.44922zM16.05078,25.88281h-0.00391c-1.78125,0 -3.53125,-0.48047 -5.05469,-1.38281l-0.36328,-0.21484l-3.76172,0.98438l1.00391,-3.66406l-0.23437,-0.375c-0.99609,-1.58203 -1.51953,-3.41016 -1.51953,-5.28516c0,-5.47266 4.45703,-9.92578 9.9375,-9.92578c2.65234,0 5.14453,1.03516 7.01953,2.91016c1.875,1.87891 2.90625,4.37109 2.90625,7.02344c0,5.47656 -4.45703,9.92969 -9.92969,9.92969zM21.49609,18.44531c-0.29687,-0.14844 -1.76562,-0.87109 -2.03906,-0.96875c-0.27344,-0.10156 -0.47266,-0.14844 -0.67187,0.14844c-0.19922,0.30078 -0.76953,0.97266 -0.94531,1.17188c-0.17187,0.19531 -0.34766,0.22266 -0.64453,0.07422c-0.30078,-0.14844 -1.26172,-0.46484 -2.40234,-1.48437c-0.88672,-0.78906 -1.48828,-1.76953 -1.66016,-2.06641c-0.17578,-0.30078 -0.01953,-0.46094 0.12891,-0.60937c0.13672,-0.13281 0.30078,-0.34766 0.44922,-0.52344c0.14844,-0.17187 0.19922,-0.29687 0.30078,-0.49609c0.09766,-0.19922 0.04688,-0.375 -0.02734,-0.52344c-0.07422,-0.14844 -0.67187,-1.62109 -0.92187,-2.21875c-0.24219,-0.58203 -0.48828,-0.5 -0.67187,-0.51172c-0.17187,-0.00781 -0.37109,-0.00781 -0.57031,-0.00781c-0.19922,0 -0.52344,0.07422 -0.79687,0.375c-0.27344,0.29688 -1.04297,1.01953 -1.04297,2.48828c0,1.46875 1.07031,2.89063 1.21875,3.08984c0.14844,0.19531 2.10547,3.21094 5.10156,4.50391c0.71094,0.30859 1.26563,0.49219 1.69922,0.62891c0.71484,0.22656 1.36719,0.19531 1.88281,0.12109c0.57422,-0.08594 1.76563,-0.72266 2.01563,-1.42187c0.24609,-0.69531 0.24609,-1.29297 0.17188,-1.41797c-0.07422,-0.125 -0.27344,-0.19922 -0.57422,-0.35156z'></path>
									</g>
								</g>
							</svg>
						</a>
					</li>
				</ul>
				<p className='device-notification--message'>
					I have so much to offer that I must request you orient to
					portrait or find a larger screen. You won't be disappointed.
				</p>
			</div>
			<div className='perspective effect-rotate-left'>
				<div className='container'>
					<div className='outer-nav--return'></div>
					<div id='viewport' className='l-viewport w-[100vw]'>
						<div className='l-wrapper'>
							<header className='header'>
								<ul className='header--logo w-[25vw] flex-row justify-around'>
									<li>
										<a
											className=''
											href='https://github.com/IK-18'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												x='0px'
												y='0px'
												width='50'
												height='50'
												viewBox='0,0,256,256'
												style={{fill: "#ffffff"}}
											>
												<g
													fillOpacity='0'
													fill='#ffffff'
													fillRule='nonzero'
													stroke='none'
													strokeWidth='1'
													strokeLinecap='butt'
													strokeLinejoin='miter'
													strokeMiterlimit='10'
													strokeDasharray=''
													strokeDashoffset='0'
													fontFamily='none'
													fontWeight='none'
													fontSize='none'
													textAnchor='none'
													style={{
														mixBlendMode: "normal",
													}}
												>
													<path
														d='M0,256v-256h256v256z'
														id='bgRectangle'
													></path>
												</g>
												<g
													fill='#ffffff'
													fillRule='nonzero'
													stroke='none'
													strokeWidth='1'
													strokeLinecap='butt'
													strokeLinejoin='miter'
													strokeMiterlimit='10'
													strokeDasharray=''
													strokeDashoffset='0'
													fontFamily='none'
													fontWeight='none'
													fontSize='none'
													textAnchor='none'
													style={{
														mixBlendMode: "normal",
													}}
												>
													<g transform='scale(5.12,5.12)'>
														<path d='M25,8c-9.389,0 -17,7.611 -17,17c0,9.389 7.611,17 17,17c9.389,0 17,-7.611 17,-17c0,-9.389 -7.611,-17 -17,-17zM25,9c8.837,0 16,7.163 16,16c0,7.31591 -4.91495,13.47209 -11.61914,15.37891c-0.13629,-0.20623 -0.23557,-0.44651 -0.22852,-0.72852c0.027,-1.057 0,-3.52078 0,-4.42578c0,-1.553 -0.98242,-2.6543 -0.98242,-2.6543c0,0 7.70898,0.08733 7.70898,-8.13867c0,-3.174 -1.65625,-4.82617 -1.65625,-4.82617c0,0 0.87027,-3.38917 -0.30273,-4.82617c-1.315,-0.142 -3.67078,1.25716 -4.67578,1.91016c0,0 -1.59119,-0.65234 -4.24219,-0.65234c-2.651,0 -4.24414,0.65234 -4.24414,0.65234c-1.006,-0.653 -3.36078,-2.05216 -4.67578,-1.91016c-1.173,1.437 -0.30273,4.82617 -0.30273,4.82617c0,0 -1.6582,1.65022 -1.6582,4.82422c0,8.226 7.70898,8.13867 7.70898,8.13867c0,0 -0.77627,0.87482 -0.94727,2.16211c-0.5318,0.18849 -1.26729,0.41602 -1.96875,0.41602c-1.673,0 -2.94416,-1.62691 -3.41016,-2.37891c-0.46,-0.742 -1.40225,-1.36523 -2.28125,-1.36523c-0.579,0 -0.86328,0.29009 -0.86328,0.62109c0,0.331 0.81166,0.56083 1.34766,1.17383c1.13,1.293 1.10981,4.20313 5.13281,4.20313c0.47416,0 1.32562,-0.10771 2.00781,-0.20117c-0.00441,0.94422 -0.01494,1.86483 0,2.44922c0.00706,0.2824 -0.09192,0.52405 -0.22852,0.73047c-6.70419,-1.90681 -11.61914,-8.063 -11.61914,-15.37891c0,-8.837 7.163,-16 16,-16z'></path>
													</g>
												</g>
											</svg>
										</a>
									</li>
									<li>
										<a
											className=''
											href='https://www.linkedin.com/in/osaite-arigbe-osula-6386a6170/'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												x='0px'
												y='0px'
												width='60'
												height='60'
												viewBox='0,0,256,256'
												style={{
													fill: "#000000",
												}}
											>
												<g
													fill='#ffffff'
													fillRule='nonzero'
													stroke='none'
													strokeWidth='1'
													strokeLinecap='butt'
													strokeLinejoin='miter'
													strokeMiterlimit='10'
													strokeDasharray=''
													strokeDashoffset='0'
													fontFamily='none'
													fontWeight='none'
													fontSize='none'
													textAnchor='none'
													style={{
														mixBlendMode: "normal",
													}}
												>
													<g transform='scale(8.53333,8.53333)'>
														<path d='M9,25h-5v-15h5zM6.501,8c-1.383,0 -2.501,-1.121 -2.501,-2.501c0,-1.38 1.12,-2.499 2.501,-2.499c1.378,0 2.499,1.121 2.499,2.499c0,1.38 -1.121,2.501 -2.499,2.501zM27,25h-4.807v-7.3c0,-1.741 -0.033,-3.98 -2.499,-3.98c-2.503,0 -2.888,1.896 -2.888,3.854v7.426h-4.806v-15.011h4.614v2.051h0.065c0.642,-1.18 2.211,-2.424 4.551,-2.424c4.87,0 5.77,3.109 5.77,7.151c0,0 0,8.233 0,8.233z'></path>
													</g>
												</g>
											</svg>
										</a>
									</li>
									<li>
										<a
											className=''
											href='mailto:ik.arigbe.osula@gmail.com'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												x='0px'
												y='0px'
												width='50'
												height='50'
												viewBox='0,0,256,256'
												style={{
													fill: "#000000",
												}}
											>
												<g
													fillOpacity='0'
													fill='#ffffff'
													fillRule='nonzero'
													stroke='none'
													strokeWidth='1'
													strokeLinecap='butt'
													strokeLinejoin='miter'
													strokeMiterlimit='10'
													strokeDasharray=''
													strokeDashoffset='0'
													fontFamily='none'
													fontWeight='none'
													fontSize='none'
													textAnchor='none'
													style={{
														mixBlendMode: "normal",
													}}
												>
													<path
														d='M0,256v-256h256v256z'
														id='bgRectangle'
													></path>
												</g>
												<g
													fill='#ffffff'
													fillRule='nonzero'
													stroke='none'
													strokeWidth='1'
													strokeLinecap='butt'
													strokeLinejoin='miter'
													strokeMiterlimit='10'
													strokeDasharray=''
													strokeDashoffset='0'
													fontFamily='none'
													fontWeight='none'
													fontSize='none'
													textAnchor='none'
													style={{
														mixBlendMode: "normal",
													}}
												>
													<g transform='scale(8.53333,8.53333)'>
														<path d='M4,5c-1.09306,0 -2,0.90694 -2,2v16c0,1.09306 0.90694,2 2,2h22c1.09306,0 2,-0.90694 2,-2v-16c0,-1.09306 -0.90694,-2 -2,-2zM6.69922,7h16.60156l-8.30078,6.13477zM5,9.47461l10,7.39062l10,-7.39062v13.52539h-20z'></path>
													</g>
												</g>
											</svg>
										</a>
									</li>
									<li>
										<a
											className=''
											href='https://wa.link/uvtsh2'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												x='0px'
												y='0px'
												width='50'
												height='50'
												viewBox='0,0,256,256'
												style={{
													fill: "#000000",
												}}
											>
												<g
													fill='#ffffff'
													fillRule='evenodd'
													stroke='none'
													strokeWidth='1'
													strokeLinecap='butt'
													strokeLinejoin='miter'
													strokeMiterlimit='10'
													strokeDasharray=''
													strokeDashoffset='0'
													fontFamily='none'
													fontWeight='none'
													fontSize='none'
													textAnchor='none'
													style={{
														mixBlendMode: "normal",
													}}
												>
													<g transform='scale(8,8)'>
														<path d='M24.50391,7.50391c-2.25781,-2.25781 -5.25781,-3.50391 -8.45312,-3.50391c-6.58594,0 -11.94922,5.35938 -11.94922,11.94531c-0.00391,2.10547 0.54688,4.16016 1.59375,5.97266l-1.69531,6.19141l6.33594,-1.66406c1.74219,0.95313 3.71094,1.45313 5.71094,1.45703h0.00391c6.58594,0 11.94531,-5.35937 11.94922,-11.94922c0,-3.19141 -1.24219,-6.19141 -3.49609,-8.44922zM16.05078,25.88281h-0.00391c-1.78125,0 -3.53125,-0.48047 -5.05469,-1.38281l-0.36328,-0.21484l-3.76172,0.98438l1.00391,-3.66406l-0.23437,-0.375c-0.99609,-1.58203 -1.51953,-3.41016 -1.51953,-5.28516c0,-5.47266 4.45703,-9.92578 9.9375,-9.92578c2.65234,0 5.14453,1.03516 7.01953,2.91016c1.875,1.87891 2.90625,4.37109 2.90625,7.02344c0,5.47656 -4.45703,9.92969 -9.92969,9.92969zM21.49609,18.44531c-0.29687,-0.14844 -1.76562,-0.87109 -2.03906,-0.96875c-0.27344,-0.10156 -0.47266,-0.14844 -0.67187,0.14844c-0.19922,0.30078 -0.76953,0.97266 -0.94531,1.17188c-0.17187,0.19531 -0.34766,0.22266 -0.64453,0.07422c-0.30078,-0.14844 -1.26172,-0.46484 -2.40234,-1.48437c-0.88672,-0.78906 -1.48828,-1.76953 -1.66016,-2.06641c-0.17578,-0.30078 -0.01953,-0.46094 0.12891,-0.60937c0.13672,-0.13281 0.30078,-0.34766 0.44922,-0.52344c0.14844,-0.17187 0.19922,-0.29687 0.30078,-0.49609c0.09766,-0.19922 0.04688,-0.375 -0.02734,-0.52344c-0.07422,-0.14844 -0.67187,-1.62109 -0.92187,-2.21875c-0.24219,-0.58203 -0.48828,-0.5 -0.67187,-0.51172c-0.17187,-0.00781 -0.37109,-0.00781 -0.57031,-0.00781c-0.19922,0 -0.52344,0.07422 -0.79687,0.375c-0.27344,0.29688 -1.04297,1.01953 -1.04297,2.48828c0,1.46875 1.07031,2.89063 1.21875,3.08984c0.14844,0.19531 2.10547,3.21094 5.10156,4.50391c0.71094,0.30859 1.26563,0.49219 1.69922,0.62891c0.71484,0.22656 1.36719,0.19531 1.88281,0.12109c0.57422,-0.08594 1.76563,-0.72266 2.01563,-1.42187c0.24609,-0.69531 0.24609,-1.29297 0.17188,-1.41797c-0.07422,-0.125 -0.27344,-0.19922 -0.57422,-0.35156z'></path>
													</g>
												</g>
											</svg>
										</a>
									</li>
								</ul>
								<div className='header--nav-toggle'>
									<span></span>
								</div>
							</header>
							<nav className='l-side-nav'>
								<ul className='side-nav'>
									<li className='is-active'>
										<span>Home</span>
									</li>
									<li>
										<span>About</span>
									</li>
									<li>
										<span>Projects</span>
									</li>
									<li>
										<span>Skills</span>
									</li>
									<li>
										<span>Contact</span>
									</li>
								</ul>
							</nav>
							<ul className='l-main-content main-content'>
								<li className='l-section section section--is-active'>
									<div className='intro'>
										<div className='intro--banner'>
											<h1>
												Hi! I'm IK.
												<br />A fullstack developer
												looking to get into
												<br />
												the tech world.
											</h1>
											<button className='cta z-10'>
												Contact Me
												<svg
													version='1.1'
													id='Layer_1'
													xmlns='http://www.w3.org/2000/svg'
													xmlnsXlink='http://www.w3.org/1999/xlink'
													x='0px'
													y='0px'
													viewBox='0 0 150 118'
													style={{
														enableBackground:
															"new 0 0 150 118",
													}}
													xmlSpace='preserve'
												>
													<g transform='translate(0.000000,118.000000) scale(0.100000,-0.100000)'>
														<path d='M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z' />
													</g>
												</svg>
												<span className='btn-background'></span>
											</button>
											<img
												src={backg}
												alt='Welcome'
												className='h-[100%] w-[100%]'
											/>
										</div>
										<div className='intro--options'>
											<button>
												<h3>About Me</h3>
												<p>Get to know me a bit.</p>
											</button>
											<button>
												<h3>Projects</h3>
												<p>
													Check out some of my
													projects.
												</p>
											</button>
											<button className='hidden'></button>
											<button>
												<h3>Contact Me</h3>
												<p>Reach out.</p>
											</button>
										</div>
									</div>
								</li>
								<li className='l-section section'>
									<div className='about'>
										<div className='about--banner'>
											<h2>
												Get to know a<br />
												bit about me, what
												<br />I can do and some <br />
												completed projects.
											</h2>
											<img
												src={aboutVisual}
												alt='About Us'
											/>
										</div>
										<div className='about--options'>
											<span>
												<h3>About Me</h3>
												<div className='about-desc absolute bottom-[-300%] left-[0] z-[1000] w-[500%]'>
													<p className='text-2xl'>
														I'm currently a student
														at Babcock University
														earning my B.Sc degree
														in Computer Science.
														I've been dabbling in
														the web dev world for
														about 2 years now.
													</p>
												</div>
											</span>
											<span>
												<h3>My Skills</h3>
												<div className='about-desc absolute bottom-[-300%] left-[-11.5vw] z-[1000] w-[500%]'>
													<p className='text-2xl'>
														I'm versed in both
														frontend and backend
														languages including but
														not limited to HTML5,
														CSS3, JavaScript, React,
														Node.JS, Python, C, C++,
														etc.
													</p>
												</div>
											</span>
											<span>
												<h3>My Projects</h3>
												<div className='about-desc absolute bottom-[-300%] left-[-23vw] z-[1000] w-[500%]'>
													<p className='text-2xl'>
														I've built several
														projects which utilized
														various combinations of
														the languages I have
														learnt which you can
														check on the next page.
													</p>
												</div>
											</span>
										</div>
									</div>
								</li>
								<li className='l-section section'>
									<div className='work'>
										<h2>Selected work</h2>
										<div className='work--lockup'>
											<ul className='slider'>
												<li className='slider--item slider--item-left'>
													<a href='https://tic-tac-toe-ik-18.vercel.app/'>
														<div className='slider--item-image'>
															<img
																src={ticTac}
																alt='Tic Tac Toe'
															/>
														</div>
														<p className='slider--item-title'>
															Tic Tac Toe
														</p>
														<p className='slider--item-description'>
															One of my first
															projects where I had
															to use a bit more
															intermediate level
															JavaScript. Just a
															basic Tic Tac Toe
															game to play with a
															partner. You can
															find the source code{" "}
															<a href='https://github.com/IK-18/Tic-Tac-Toe'>
																here
															</a>
															.
														</p>
													</a>
												</li>
												<li className='slider--item slider--item-center'>
													<a href='https://superhero-database-ik-18.vercel.app/'>
														<div className='slider--item-image'>
															<img
																src={supDB}
																alt='Superhero Database'
															/>
														</div>
														<p className='slider--item-title'>
															Superhero Database
														</p>
														<p className='slider--item-description'>
															My first attempt at
															using APIs. It's a
															simple project for
															looking up comic
															book heroes and
															antiheroes as well
															as anime main
															characters. You can
															find the source code{" "}
															<a href='https://github.com/IK-18/Superhero-Database'>
																here
															</a>
															.
														</p>
													</a>
												</li>
												<li className='slider--item slider--item-right'>
													<a href='https://rock-paper-scissors-ik-18.vercel.app/'>
														<div className='slider--item-image'>
															<img
																src={RPS}
																alt='Rock, Paper, Scissors'
															/>
														</div>
														<p className='slider--item-title'>
															Rock, Paper,
															Scissors
														</p>
														<p className='slider--item-description'>
															A basic project with
															minimal code. A
															rock, paper,
															scissors game to
															play against the
															script. You can find
															the source code{" "}
															<a href='https://github.com/IK-18/Rock-Paper-Scissors'>
																here
															</a>
															.
														</p>
													</a>
												</li>
												<li className='slider--item'>
													<a href='https://you-tube-clone-ik-18.vercel.app/'>
														<div className='slider--item-image'>
															<img
																src={youtube}
																alt='YouTube Clone'
															/>
														</div>
														<p className='slider--item-title'>
															YouTube Clone
														</p>
														<p className='slider--item-description'>
															My first ever page.
															A very basic HTML
															clone of a YouTube
															page. You can find
															the source code{" "}
															<a href='https://github.com/IK-18/YouTube-Clone'>
																here
															</a>
															.
														</p>
													</a>
												</li>
												<li className='slider--item'>
													<a href='https://tip-calculator-ik-18.vercel.app/'>
														<div className='slider--item-image'>
															<img
																src={tipCalc}
																alt='Tip Calculator'
															/>
														</div>
														<p className='slider--item-title'>
															Tip Calculator
														</p>
														<p className='slider--item-description'>
															A project that uses
															intermediate level
															JavaScript. A basic
															tip calulator that
															displays the bill
															for each individual.
															You can find the
															source code{" "}
															<a href='https://github.com/IK-18/Tip-Calculator'>
																here
															</a>
															.
														</p>
													</a>
												</li>
												<li className='slider--item'>
													<a href='https://osasula-farms.vercel.app/'>
														<div className='slider--item-image'>
															<img
																src={osasula}
																alt='Osasula Farms'
															/>
														</div>
														<p className='slider--item-title'>
															Osasula Farms
														</p>
														<p className='slider--item-description'>
															A more in-depth site
															with improved
															styling as well as
															more advanced
															JavaScript. A farm
															website
															commissioined by a
															relative but
															eventually scrapped.
															You can find the
															source code{" "}
															<a href='https://github.com/IK-18/Osasula-Farms'>
																here
															</a>
															.
														</p>
													</a>
												</li>
												<li className='slider--item'>
													<a href='https://netfilx-clone-js.vercel.app/'>
														<div className='slider--item-image'>
															<img
																src={netJS}
																alt='Netflix JS Clone'
															/>
														</div>
														<p className='slider--item-title'>
															Netflix JS Clone
														</p>
														<p className='slider--item-description'>
															A small project
															mimics Netflix's
															homepage by using
															advanced JavaScript
															and APIs, showing
															categorized movies
															and series as well
															as a random movie
															banner that changes
															into an embedded
															trailer. You can
															find the source code{" "}
															<a href='https://github.com/IK-18/netfilx-clone-js'>
																here
															</a>
															.
														</p>
													</a>
												</li>
												<li className='slider--item'>
													<a href='https://weather-app-ik-18.vercel.app/'>
														<div className='slider--item-image'>
															<img
																src={weather}
																alt='Weather Forecast App'
															/>
														</div>
														<p className='slider--item-title'>
															Weather Forecast App
														</p>
														<p className='slider--item-description'>
															A significant
															project integrating
															HTML, CSS, and
															JavaScript to create
															a weather
															forecasting app for
															cities worldwide. It
															searches for new
															data, retrieves
															existing data, and
															displays it on the
															website. You can
															find the source code{" "}
															<a href='https://github.com/IK-18/Weather-App'>
																here
															</a>
															.
														</p>
													</a>
												</li>
												<li className='slider--item'>
													<a href='https://portfolio-ik-18.vercel.app/'>
														<div className='slider--item-image'>
															<img
																src={portfolio}
																alt='Portfolio'
															/>
														</div>
														<p className='slider--item-title'>
															Portfolio App
														</p>
														<p className='slider--item-description'>
															The plain JavaScript
															version of the
															current portfolio
															you're viewing. The
															site you're viewing
															will probably be
															more recent as I no
															longer update that
															site. You can find
															the source code{" "}
															<a href='https://github.com/IK-18/Portfolio'>
																here
															</a>
															.
														</p>
													</a>
												</li>
											</ul>
											<div className='slider--prev'>
												<svg
													version='1.1'
													id='Layer_1'
													xmlns='http://www.w3.org/2000/svg'
													xmlnsXlink='http://www.w3.org/1999/xlink'
													x='0px'
													y='0px'
													viewBox='0 0 150 118'
													style={{
														enableBackground:
															"new 0 0 150 118",
													}}
													xmlSpace='preserve'
												>
													<g transform='translate(0.000000,118.000000) scale(0.100000,-0.100000)'>
														<path
															d='M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
                    c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
                    c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z'
														/>
													</g>
												</svg>
											</div>
											<div className='slider--next'>
												<svg
													version='1.1'
													id='Layer_1'
													xmlns='http://www.w3.org/2000/svg'
													xmlnsXlink='http://www.w3.org/1999/xlink'
													x='0px'
													y='0px'
													viewBox='0 0 150 118'
													style={{
														enableBackground:
															"new 0 0 150 118",
													}}
													xmlSpace='preserve'
												>
													<g transform='translate(0.000000,118.000000) scale(0.100000,-0.100000)'>
														<path d='M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z' />
													</g>
												</svg>
											</div>
										</div>
									</div>
								</li>
								<li className='l-section section'>
									<div className='skills'>
										<h2>My current skills</h2>
										<div className='work-skills'>
											<div className='work-skills--options'>
												<span className='options-a'>
													<span className='html skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(5.12,5.12)'>
																	<path d='M45.27344,2.32422c-0.1875,-0.20703 -0.45703,-0.32422 -0.73828,-0.32422h-39.07031c-0.28125,0 -0.55078,0.11719 -0.73828,0.32422c-0.19141,0.20703 -0.28516,0.48438 -0.25781,0.76563l3.51953,39.42578c0.03516,0.41406 0.32422,0.75781 0.72266,0.875l16.01172,4.57031c0.08594,0.02734 0.17969,0.03906 0.27344,0.03906c0.09375,0 0.18359,-0.01172 0.27344,-0.03906l16.02344,-4.57031c0.39844,-0.11719 0.68359,-0.46094 0.72266,-0.875l3.51563,-39.42578c0.02734,-0.28125 -0.06641,-0.55859 -0.25781,-0.76562zM36.84766,15.91797h-18.8125l0.44922,5.08984h17.91016l-1.34375,15.04297l-10.05859,3.03906l-0.09766,-0.03125l-9.94141,-3.01172l-0.54297,-6.12891h4.87109l0.21094,2.37891l5.55859,1.16406l5.45703,-1.16406l0.58203,-6.4375h-17.04297l-1.32422,-14.80469h24.55859z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															html/html5
														</h2>
													</span>
													<span className='css skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(10.66667,10.66667)'>
																	<path d='M3,2l2,18l6.99219,2l7.00781,-2l2,-18zM16.72656,10.34766l-0.38281,6.24219l-4.31641,1.41016l-4.31641,-1.41016l-0.16406,-2.98437h2.1875l0.05469,1.35547l2.23828,0.76172l2.24219,-0.76172l0.16406,-2.44141h-4.80859l-0.10937,-2.17187h5.02344l0.16406,-2.17187h-7.53906l-0.16406,-2.16797h10z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															css/css3
														</h2>
													</span>
													<span className='js skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(5.12,5.12)'>
																	<path d='M43.33594,4h-36.66797c-1.47266,0 -2.66797,1.19531 -2.66797,2.66797v36.66406c0,1.47266 1.19531,2.66797 2.66797,2.66797h36.66406c1.47266,0 2.66797,-1.19531 2.66797,-2.66406v-36.66797c0,-1.47266 -1.19531,-2.66797 -2.66406,-2.66797zM27,36.18359c0,3.99609 -2.34375,5.81641 -5.76562,5.81641c-3.09375,0 -5.32422,-2.07422 -6.23437,-4l3.14453,-1.90234c0.60547,1.07422 1.52734,1.90234 2.85547,1.90234c1.26953,0 2,-0.49609 2,-2.42578v-12.57422h4zM35.67578,42c-3.54297,0 -5.55469,-1.78516 -6.67578,-4l3,-2c0.81641,1.33594 1.70703,2.61328 3.58984,2.61328c1.58203,0 2.41016,-0.78906 2.41016,-1.88281c0,-1.30469 -0.85937,-1.76953 -2.59766,-2.53125l-0.95312,-0.41016c-2.75391,-1.17187 -4.58594,-2.64062 -4.58594,-5.75c0,-2.85937 2.18359,-5.03906 5.58984,-5.03906c2.42578,0 4.16797,0.84375 5.42578,3.05469l-2.96875,1.91016c-0.65625,-1.17578 -1.35937,-1.63672 -2.45703,-1.63672c-1.11719,0 -1.82422,0.71094 -1.82422,1.63672c0,1.14453 0.70703,1.60547 2.34375,2.31641l0.95313,0.41016c3.24609,1.38672 5.07422,2.80469 5.07422,5.99219c0,3.43359 -2.69922,5.31641 -6.32422,5.31641z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															javascript
														</h2>
													</span>
													<span className='tailwind skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(5.33333,5.33333)'>
																	<path d='M24,9.604c-6.4,0 -10.4,3.199 -12,9.597c2.4,-3.199 5.2,-4.398 8.4,-3.599c1.826,0.456 3.131,1.781 4.576,3.247c2.352,2.387 5.075,5.151 11.024,5.151c6.4,0 10.4,-3.199 12,-9.598c-2.4,3.199 -5.2,4.399 -8.4,3.6c-1.825,-0.456 -3.13,-1.781 -4.575,-3.247c-2.353,-2.388 -5.077,-5.151 -11.025,-5.151zM12,24c-6.4,0 -10.4,3.199 -12,9.598c2.4,-3.199 5.2,-4.399 8.4,-3.599c1.825,0.457 3.13,1.781 4.575,3.246c2.353,2.388 5.077,5.152 11.025,5.152c6.4,0 10.4,-3.199 12,-9.598c-2.4,3.199 -5.2,4.399 -8.4,3.599c-1.826,-0.456 -3.131,-1.781 -4.576,-3.246c-2.352,-2.388 -5.075,-5.152 -11.024,-5.152z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															tailwind
														</h2>
													</span>
													<span className='bootstrap skill'>
														<svg
															width='80'
															height='80'
															viewBox='0 0 256 256'
															xmlns='http://www.w3.org/2000/svg'
															preserveAspectRatio='xMinYMin meet'
														>
															<path
																d='M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z'
																fill='#FFF'
															/>
															<path
																d='M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z'
																fill='#FFF00'
															/>
														</svg>
														<h2 className='skill-name'>
															bootstrap
														</h2>
													</span>
													<span className='sass skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(5.12,5.12)'>
																	<path d='M25,2c-12.682,0 -23,10.318 -23,23c0,12.682 10.318,23 23,23c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM30.64844,9.00195c3.82279,-0.0636 6.97419,1.3278 7.63281,3.91211c0.943,3.697 -2.266,8.11803 -6.375,9.70703c-3.669,1.419 -6.70222,1.19611 -7.94922,0.78711c-1.417,-0.465 -2.24722,-1.40073 -2.44922,-1.92773c-0.079,-0.207 -0.217,-0.55187 0,-0.67187c0.133,-0.074 0.18502,-0.05706 0.54102,0.33594c0.339,0.373 1.6992,1.37594 4.2832,1.08594c6.783,-0.76 10.86717,-6.03119 9.57617,-8.86719c-0.904,-1.985 -6.13111,-2.879 -12.66211,0.375c-7.973,3.973 -8.40466,7.24819 -8.47266,8.49219c-0.187,3.421 4.22242,5.22063 6.60742,7.76563c0.056,0.06 0.11006,0.12064 0.16406,0.18164c0.722,-0.269 1.72155,-0.42027 3.31055,-0.44727c3.858,-0.066 6.03727,2.476 5.94727,4.75c-0.07,1.791 -1.71353,2.52908 -2.01953,2.58008c-0.222,0.038 -0.344,0.04509 -0.375,-0.12891c-0.022,-0.12 0.05836,-0.17589 0.31836,-0.33789c0.26,-0.161 1.03873,-0.69306 1.17773,-1.66406c0.139,-0.97 -0.58778,-3.28966 -4.30078,-3.72266c-1.316,-0.154 -2.35224,-0.04945 -3.24023,0.18555c0.644,1.419 0.76811,4.27437 -0.71289,6.48438c-1.535,2.29 -4.39178,3.68125 -7.17578,2.90625c-0.898,-0.25 -2.25694,-2.10536 -1.08594,-4.69336c1.11,-2.453 5.85105,-4.85288 6.49805,-5.17187v-0.01172c-2.197,-1.891 -7.53997,-4.43984 -8.29297,-8.33984c-0.214,-1.105 0.30373,-3.75201 3.55273,-6.79101c2.733,-2.556 6.53492,-4.51277 10.04492,-5.75977c1.84344,-0.655 3.7194,-0.98476 5.45703,-1.01367zM20.79883,32.07227c-0.065,0.036 -0.12936,0.07147 -0.19336,0.10547l0.00195,0.00781c0.001,-0.001 -2.20623,1.04111 -3.74023,2.66211c-1.426,1.507 -1.82234,3.39838 -1.02734,3.85938c0.737,0.427 2.45359,-0.07892 3.68359,-1.41992c0.403,-0.44 0.73252,-0.91678 0.97852,-1.42578c0.049,-0.102 0.09472,-0.20459 0.13672,-0.30859c0.042,-0.104 0.08219,-0.20941 0.11719,-0.31641c0.318,-0.962 0.35097,-2.02506 0.04297,-3.16406z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															sass
														</h2>
													</span>
												</span>
												<span className='options-b'>
													<span className='react skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															viewBox='-11.5 -10.23174 23 20.46348'
														>
															<circle
																cx='0'
																cy='0'
																r='2.05'
																fill='#ffffff'
															/>
															<g
																stroke='#ffffff'
																strokeWidth='1'
																fill='none'
															>
																<ellipse
																	rx='11'
																	ry='4.2'
																/>
																<ellipse
																	rx='11'
																	ry='4.2'
																	transform='rotate(60)'
																/>
																<ellipse
																	rx='11'
																	ry='4.2'
																	transform='rotate(120)'
																/>
															</g>
														</svg>
														<h2 className='skill-name'>
															react
														</h2>
													</span>
													<span className='vue skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(8,8)'>
																	<path d='M3,6l13,22l13,-22h-10l-3,5.30078l-3,-5.30078zM6.5,8h3.77148l5.72852,10l5.72852,-10h3.77148l-9.5,16.09961z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															vue
														</h2>
													</span>
													<span className='node skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(8,8)'>
																	<path d='M21.30078,6c-0.157,0 -0.30078,0.12578 -0.30078,0.30078v5.49609l-1.24609,-0.72656c-0.078,-0.046 -0.16591,-0.06836 -0.25391,-0.06836c-0.088,0 -0.17591,0.02236 -0.25391,0.06836l-2.99414,1.74609c-0.156,0.09 -0.25195,0.25655 -0.25195,0.43555v3.49609c0,0.18 0.09595,0.34555 0.25195,0.43555l2.99414,1.74609c0.078,0.046 0.16591,0.06836 0.25391,0.06836c0.088,0 0.17591,-0.02236 0.25391,-0.06836l2.99414,-1.74609c0.156,-0.09 0.25195,-0.25655 0.25195,-0.43555v-1.74805v-1.74805v-6.02148c0,-0.178 -0.09505,-0.34164 -0.24805,-0.43164l-1.30273,-0.75781c-0.049,-0.028 -0.09844,-0.04102 -0.14844,-0.04102zM11.5,11.00195c-0.08775,0 -0.17541,0.02286 -0.25391,0.06836l-2.99414,1.74609c-0.156,0.09 -0.25195,0.25655 -0.25195,0.43555v3.49609c0,0.18 0.09595,0.34555 0.25195,0.43555l2.99414,1.74609c0.157,0.091 0.35081,0.091 0.50781,0l2.99414,-1.74609c0.156,-0.09 0.25195,-0.25655 0.25195,-0.43555v-3.49609c0,-0.18 -0.09595,-0.34555 -0.25195,-0.43555l-2.99414,-1.74609c-0.0785,-0.0455 -0.16616,-0.06836 -0.25391,-0.06836zM27.5,11.00195c-0.088,0 -0.17591,0.02236 -0.25391,0.06836l-2.99414,1.74609c-0.156,0.09 -0.25195,0.25655 -0.25195,0.43555v3.49609c0,0.18 0.09595,0.34555 0.25195,0.43555l2.9043,1.75586c0.156,0.095 0.35177,0.09591 0.50977,0.00391l1.42773,-0.83008c0.148,-0.085 0.149,-0.29972 0,-0.38672l-3.09375,-1.82227v-1.79492l1.5,-0.87305l1.5,0.87305v1.25c0,0.167 0.14037,0.19272 0.23438,0.13672c0.378,-0.222 1.51758,-0.88281 1.51758,-0.88281c0.153,-0.089 0.24805,-0.25364 0.24805,-0.43164v-0.92969c0,-0.18 -0.09595,-0.34555 -0.25195,-0.43555l-2.99414,-1.74609c-0.079,-0.046 -0.16591,-0.06836 -0.25391,-0.06836zM3.5,11.00391c-0.088,0 -0.17591,0.02236 -0.25391,0.06836l-2.99414,1.74414c-0.156,0.091 -0.25195,0.2575 -0.25195,0.4375v4.46289c0,0.218 0.23583,0.35314 0.42383,0.24414l1.32812,-0.77344c0.153,-0.09 0.24805,-0.25364 0.24805,-0.43164v-2.64258l1.5,-0.875l1.5,0.875v2.64258c0,0.178 0.09505,0.34164 0.24805,0.43164l1.32813,0.77344c0.188,0.11 0.42383,-0.02614 0.42383,-0.24414v-4.46289c0,-0.18 -0.09595,-0.3465 -0.25195,-0.4375l-2.99414,-1.74414c-0.078,-0.046 -0.16591,-0.06836 -0.25391,-0.06836zM19.5,13.23633l1.5,0.875v0.88867v0.88867l-1.5,0.875l-1.5,-0.875v-1.77734zM27.5,14.00391l-0.85742,0.5v0.99805l0.85742,0.49805l0.85742,-0.49805v-0.99805zM15.40625,17.99805c-0.10287,0 -0.20688,0.02517 -0.29687,0.07617l-2.8125,1.625c-0.185,0.102 -0.29687,0.30272 -0.29687,0.51172v3.24609c0,0.209 0.11688,0.40572 0.29688,0.51172l0.74023,0.42188c0.355,0.175 0.48549,0.17578 0.64649,0.17578c0.53,0 0.83203,-0.31695 0.83203,-0.87695v-3.20703c0,-0.049 -0.03803,-0.08398 -0.08203,-0.08398h-0.35547c-0.049,0 -0.08398,0.03998 -0.08398,0.08398v3.20703c0,0.243 -0.25678,0.4922 -0.67578,0.2832l-0.76953,-0.44336c-0.025,-0.015 -0.04297,-0.04522 -0.04297,-0.07422v-3.24609c0,-0.029 0.01397,-0.06312 0.04297,-0.07812l2.8125,-1.62109c0.03,-0.015 0.06389,-0.015 0.08789,0l2.81445,1.62109c0.029,0.015 0.04297,0.04412 0.04297,0.07813v3.24609c0,0.034 -0.01897,0.06312 -0.04297,0.07813l-2.81445,1.62695c-0.025,0.015 -0.06389,0.015 -0.08789,0l-0.71875,-0.42773c-0.019,-0.01 -0.04936,-0.01586 -0.06836,-0.00586c-0.199,0.117 -0.23883,0.13231 -0.42383,0.19531c-0.049,0.015 -0.11561,0.04505 0.02539,0.12305l0.93359,0.55469c0.093,0.049 0.19487,0.07813 0.29688,0.07813c0.107,0 0.21097,-0.02903 0.29297,-0.08203l2.8125,-1.62695c0.185,-0.102 0.29688,-0.30272 0.29688,-0.51172v-3.24609c0,-0.209 -0.11688,-0.40472 -0.29687,-0.51172l-2.8125,-1.625c-0.0875,-0.051 -0.19009,-0.07617 -0.29297,-0.07617zM19.79297,19.49609c-0.287,0 -0.53906,0.23206 -0.53906,0.53906c0,0.297 0.24206,0.54102 0.53906,0.54102c0.297,0 0.53906,-0.24402 0.53906,-0.54102c0,-0.307 -0.24706,-0.54406 -0.53906,-0.53906zM19.78711,19.58203c0.254,0 0.45898,0.20012 0.45898,0.45313c0,0.248 -0.20598,0.45298 -0.45898,0.45898c-0.249,0 -0.45117,-0.20598 -0.45117,-0.45898c0,-0.253 0.20317,-0.45312 0.45117,-0.45312zM19.58984,19.72852v0.60742h0.11523v-0.24219h0.10742c0.044,0 0.05445,0.01873 0.06445,0.05273c0,0.005 0.01844,0.16241 0.02344,0.19141h0.125c-0.014,-0.029 -0.0243,-0.11211 -0.0293,-0.16211c-0.014,-0.078 -0.01856,-0.13172 -0.10156,-0.13672c0.044,-0.015 0.11719,-0.03839 0.11719,-0.15039c0,-0.161 -0.13989,-0.16016 -0.21289,-0.16016zM19.70508,19.82617h0.09766c0.03,0 0.08789,-0.00097 0.08789,0.08203c0,0.034 -0.01475,0.08889 -0.09375,0.08789h-0.0918zM16.16016,20.32227c-0.803,0 -1.2793,0.34225 -1.2793,0.90625c0,0.618 0.47709,0.78333 1.24609,0.86133c0.92,0.092 0.99219,0.2243 0.99219,0.4043c0,0.316 -0.25366,0.44727 -0.84766,0.44727c-0.745,0 -0.90889,-0.18469 -0.96289,-0.55469c-0.005,-0.039 -0.03998,-0.06836 -0.08399,-0.06836h-0.36523c-0.044,0 -0.08203,0.03498 -0.08203,0.08398c0,0.472 0.25728,1.03711 1.48828,1.03711c0.903,-0.001 1.41406,-0.35084 1.41406,-0.96484c0,-0.608 -0.40939,-0.76972 -1.27539,-0.88672c-0.876,-0.117 -0.96289,-0.17586 -0.96289,-0.38086c0,-0.17 0.07175,-0.39258 0.71875,-0.39258c0.579,0 0.79481,0.12663 0.88281,0.51563c0.01,0.039 0.03717,0.0625 0.07617,0.0625h0.36523c0.024,0 0.04459,-0.00944 0.05859,-0.02344c0.015,-0.019 0.02453,-0.0385 0.01953,-0.0625c-0.058,-0.672 -0.50134,-0.98437 -1.40234,-0.98437z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															node.js
														</h2>
													</span>
													<span className='express skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(16,16)'>
																	<path d='M15.973,3h-1.203l-2.77,4.133l-2.77,-4.133h-1.203l3.371,5.031l-3.329,4.969h1.203l2.728,-4.071l2.728,4.071h1.203l-3.329,-4.969z'></path>
																	<path d='M6.81,10c-0.005,0.013 -0.006,0.027 -0.011,0.039c-0.445,1.173 -1.57,1.961 -2.832,1.961c-1.636,0 -2.967,-1.362 -2.967,-3.036v-0.964h4.439v0h2.561v-1h-0.003c-0.019,-2.208 -1.788,-4 -4.03,-4c-2.188,0 -3.967,1.811 -3.967,4.036v1.929c0,2.225 1.779,4.035 4,4.035c1.644,0 3.144,-1.048 3.734,-2.607c0.049,-0.128 0.076,-0.262 0.111,-0.393zM4.033,4c1.624,0 2.944,1.343 2.963,3h-5.993c0.019,-1.657 1.34,-3 3.03,-3z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															express.js
														</h2>
													</span>
													<span className='react-native skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(8,8)'>
																	<path d='M11.4043,3.35938c-0.84531,-0.05606 -1.67608,0.09519 -2.4043,0.51563c-0.97096,0.56058 -1.61754,1.51746 -1.96484,2.61914c-0.3473,1.10169 -0.42757,2.37132 -0.30078,3.75781c0.01284,0.14044 0.03755,0.28683 0.05469,0.42969c-0.13254,0.05669 -0.27211,0.10876 -0.40039,0.16797c-1.26413,0.58345 -2.32308,1.28706 -3.10352,2.13867c-0.78044,0.85161 -1.28516,1.89055 -1.28516,3.01172c0,1.12117 0.50472,2.16011 1.28516,3.01172c0.78044,0.85161 1.83939,1.55523 3.10352,2.13867c0.12828,0.0592 0.26785,0.11128 0.40039,0.16797c-0.01714,0.14286 -0.04185,0.28925 -0.05469,0.42969c-0.12679,1.38649 -0.04652,2.65613 0.30078,3.75781c0.3473,1.10168 0.99389,2.05856 1.96484,2.61914c0.97096,0.56058 2.12226,0.64265 3.25,0.39258c1.12774,-0.25007 2.26695,-0.8161 3.4043,-1.61914c0.11515,-0.0813 0.23061,-0.17549 0.3457,-0.26172c0.1151,0.08623 0.23056,0.18042 0.3457,0.26172c1.13734,0.80305 2.27656,1.36907 3.4043,1.61914c1.12774,0.25007 2.27904,0.16801 3.25,-0.39258c0.97096,-0.56058 1.61754,-1.51746 1.96484,-2.61914c0.3473,-1.10168 0.42757,-2.37132 0.30078,-3.75781c-0.01284,-0.14044 -0.03755,-0.28683 -0.05469,-0.42969c0.13254,-0.05669 0.27211,-0.10876 0.40039,-0.16797c1.26413,-0.58344 2.32308,-1.28706 3.10352,-2.13867c0.78044,-0.85161 1.28516,-1.89055 1.28516,-3.01172c0,-1.12117 -0.50472,-2.16011 -1.28516,-3.01172c-0.78044,-0.85161 -1.83939,-1.55523 -3.10352,-2.13867c-0.12828,-0.0592 -0.26785,-0.11128 -0.40039,-0.16797c0.01714,-0.14286 0.04185,-0.28925 0.05469,-0.42969c0.12679,-1.38649 0.04652,-2.65613 -0.30078,-3.75781c-0.3473,-1.10168 -0.99389,-2.05856 -1.96484,-2.61914c-0.97096,-0.56058 -2.12226,-0.64265 -3.25,-0.39258c-1.12774,0.25007 -2.26695,0.81609 -3.4043,1.61914c-0.11515,0.0813 -0.23061,0.17549 -0.3457,0.26172c-0.1151,-0.08623 -0.23056,-0.18042 -0.3457,-0.26172c-1.13734,-0.80305 -2.27656,-1.36907 -3.4043,-1.61914c-0.28193,-0.06252 -0.56393,-0.10436 -0.8457,-0.12305zM11.27344,5.35156c0.17041,0.01283 0.35157,0.04111 0.54492,0.08398c0.75569,0.16757 1.66069,0.59172 2.61524,1.25586c-0.79501,0.75417 -1.57739,1.61215 -2.32422,2.57227c-1.20353,0.16669 -2.33716,0.41351 -3.38672,0.72461c-0.09774,-1.15826 -0.0139,-2.15458 0.21875,-2.89258c0.23818,-0.75555 0.59467,-1.22044 1.05859,-1.48828c0.34794,-0.20088 0.7622,-0.29435 1.27344,-0.25586zM20.72656,5.35156c0.51124,-0.03849 0.9255,0.05498 1.27344,0.25586c0.46392,0.26784 0.82041,0.73273 1.05859,1.48828c0.23265,0.73799 0.31649,1.73432 0.21875,2.89258c-1.04956,-0.3111 -2.18319,-0.55792 -3.38672,-0.72461c-0.74682,-0.96012 -1.5292,-1.81809 -2.32422,-2.57227c0.95454,-0.66414 1.85955,-1.08829 2.61523,-1.25586c0.19335,-0.04288 0.37451,-0.07115 0.54492,-0.08398zM16,7.95898c0.35149,0.32498 0.70236,0.68635 1.05273,1.06445c-0.34872,-0.01233 -0.69724,-0.02344 -1.05273,-0.02344c-0.35549,0 -0.70401,0.01111 -1.05273,0.02344c0.35038,-0.3781 0.70124,-0.73948 1.05273,-1.06445zM16,11c0.96454,0 1.89939,0.05672 2.79883,0.15234c0.53253,0.73112 1.04898,1.51235 1.53125,2.34766c0.4823,0.83537 0.90065,1.67319 1.26758,2.5c-0.36693,0.82681 -0.78528,1.66463 -1.26758,2.5c-0.48227,0.83531 -0.99872,1.61653 -1.53125,2.34766c-0.89944,0.09562 -1.83429,0.15234 -2.79883,0.15234c-0.96454,0 -1.89939,-0.05672 -2.79883,-0.15234c-0.53253,-0.73112 -1.04898,-1.51235 -1.53125,-2.34766c-0.4823,-0.83537 -0.90065,-1.67319 -1.26758,-2.5c0.36692,-0.82681 0.78528,-1.66463 1.26758,-2.5c0.48227,-0.83531 0.99872,-1.61653 1.53125,-2.34766c0.89944,-0.09562 1.83429,-0.15234 2.79883,-0.15234zM10.48438,11.59961c-0.18503,0.29582 -0.36914,0.59254 -0.54687,0.90039c-0.17774,0.30785 -0.34219,0.61568 -0.50586,0.92383c-0.15202,-0.49176 -0.28894,-0.97712 -0.39453,-1.44336c0.45701,-0.14187 0.94483,-0.2665 1.44727,-0.38086zM21.51563,11.59961c0.50243,0.11436 0.99025,0.23899 1.44727,0.38086c-0.10559,0.46624 -0.24251,0.9516 -0.39453,1.44336c-0.16367,-0.30815 -0.32812,-0.61598 -0.50586,-0.92383c-0.17774,-0.30785 -0.36184,-0.60457 -0.54687,-0.90039zM7.1543,12.70313c0.25556,1.06537 0.60847,2.17028 1.06641,3.29688c-0.45793,1.12659 -0.81084,2.2315 -1.06641,3.29688c-1.05149,-0.49438 -1.87189,-1.06642 -2.39453,-1.63672c-0.53523,-0.58405 -0.75977,-1.12447 -0.75977,-1.66016c0,-0.53569 0.22453,-1.07611 0.75977,-1.66016c0.52264,-0.5703 1.34304,-1.14234 2.39453,-1.63672zM24.8457,12.70313c1.05149,0.49438 1.87189,1.06642 2.39453,1.63672c0.53523,0.58405 0.75977,1.12447 0.75977,1.66016c0,0.53569 -0.22453,1.07611 -0.75977,1.66016c-0.52264,0.5703 -1.34304,1.14234 -2.39453,1.63672c-0.25556,-1.06537 -0.60847,-2.17028 -1.06641,-3.29687c0.45793,-1.12659 0.81084,-2.2315 1.06641,-3.29687zM16,13c-1.64501,0 -3,1.35499 -3,3c0,1.64501 1.35499,3 3,3c1.64501,0 3,-1.35499 3,-3c0,-1.64501 -1.35499,-3 -3,-3zM16,15c0.56413,0 1,0.43587 1,1c0,0.56413 -0.43587,1 -1,1c-0.56413,0 -1,-0.43587 -1,-1c0,-0.56413 0.43587,-1 1,-1zM9.43164,18.57617c0.16367,0.30815 0.32812,0.61598 0.50586,0.92383c0.17774,0.30785 0.36185,0.60457 0.54688,0.90039c-0.50243,-0.11436 -0.99025,-0.23899 -1.44727,-0.38086c0.10559,-0.46624 0.24251,-0.9516 0.39453,-1.44336zM22.56836,18.57617c0.15202,0.49176 0.28894,0.97712 0.39453,1.44336c-0.45701,0.14187 -0.94483,0.2665 -1.44727,0.38086c0.18503,-0.29582 0.36914,-0.59254 0.54688,-0.90039c0.17774,-0.30785 0.34219,-0.61568 0.50586,-0.92383zM8.72266,22.01172c1.04956,0.3111 2.18319,0.55792 3.38672,0.72461c0.74682,0.96012 1.5292,1.81809 2.32422,2.57227c-0.95454,0.66414 -1.85955,1.08829 -2.61524,1.25586c-0.77342,0.1715 -1.35444,0.09597 -1.81836,-0.17187c-0.46392,-0.26785 -0.82041,-0.73273 -1.05859,-1.48828c-0.23265,-0.73799 -0.31649,-1.73432 -0.21875,-2.89258zM23.27734,22.01172c0.09774,1.15826 0.0139,2.15458 -0.21875,2.89258c-0.23818,0.75555 -0.59467,1.22044 -1.05859,1.48828c-0.46392,0.26784 -1.04494,0.34338 -1.81836,0.17188c-0.75568,-0.16757 -1.66069,-0.59172 -2.61523,-1.25586c0.79501,-0.75417 1.57739,-1.61215 2.32422,-2.57227c1.20353,-0.16669 2.33716,-0.41351 3.38672,-0.72461zM14.94727,22.97656c0.34872,0.01233 0.69724,0.02344 1.05273,0.02344c0.35549,0 0.70401,-0.01111 1.05273,-0.02344c-0.35038,0.3781 -0.70124,0.73948 -1.05273,1.06445c-0.35149,-0.32498 -0.70236,-0.68635 -1.05273,-1.06445z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															react native
														</h2>
													</span>
												</span>
												<span className='options-c'>
													<span className='jquery skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(5.12,5.12)'>
																	<path d='M29.86719,3.00781c-0.10547,0.01563 -0.21094,0.04688 -0.3125,0.09375c-0.85937,0.42578 -1.83594,1.69141 -2.02344,1.94141c-0.01172,0.01563 -0.02344,0.03125 -0.03125,0.04688c-0.96484,1.44531 -1.48047,3.13672 -1.5,4.89844c-0.01172,1.32031 0.24609,2.62891 0.76953,3.89063c1.21875,2.92578 3.75,5.34766 6.76172,6.48047c0.10156,0.03516 0.19922,0.07031 0.375,0.13281c0.01563,0.00781 0.16406,0.05469 0.1875,0.05859l0.10938,0.03906c0.15625,0.05078 0.31641,0.10156 0.47266,0.13281c0.79297,0.16016 1.56641,0.25 2.29297,0.27344c0.125,0 0.25,0.00391 0.375,0.00391c5.48047,0 7.60547,-3.86719 8.3125,-5.15625c0.07031,-0.125 0.12109,-0.22656 0.16797,-0.28906c0,-0.00391 0,-0.00391 0.00391,-0.00781c0.30859,-0.45703 0.19141,-1.07812 -0.26562,-1.39062c-0.45312,-0.30859 -1.07422,-0.19141 -1.38672,0.26563h-0.00391c-1.46094,2.15234 -3.96094,2.80469 -7.42578,1.94531c-0.25781,-0.0625 -0.53906,-0.16016 -0.78906,-0.25391c-0.32812,-0.11719 -0.65625,-0.25391 -0.96094,-0.40234c-0.60547,-0.30078 -1.17578,-0.66016 -1.69141,-1.05859c-3.04687,-2.36328 -4.23828,-7.28125 -2.45703,-10.12109c0.23828,-0.37891 0.19531,-0.87109 -0.10547,-1.20312c-0.22656,-0.25 -0.55469,-0.36328 -0.875,-0.32031zM21.00781,5c-0.22656,-0.00391 -0.45703,0.07031 -0.64453,0.22656c-1.51172,1.23047 -3.05859,3.24609 -3.125,3.32813c-0.00781,0.01563 -0.01562,0.02734 -0.02734,0.04297c-2.73437,3.98047 -2.94141,9.64453 -0.52344,14.42969c0.37891,0.75781 0.80859,1.48047 1.26563,2.14453l0.13672,0.19531c0.38672,0.56641 0.82031,1.20703 1.375,1.70703c0.19141,0.21875 0.39844,0.42969 0.60156,0.63281l0.09766,0.10156l0.08203,0.08203c0.20703,0.19922 0.41797,0.40234 0.63672,0.59766h0.00391c0.01563,0.02344 0.03906,0.03906 0.05859,0.05859c0.24609,0.21875 0.49609,0.42578 0.82813,0.6875l0.08984,0.06641c0.25781,0.20703 0.51953,0.40234 0.78906,0.59375c0.02734,0.01953 0.05469,0.03906 0.08203,0.05859c0.09375,0.0625 0.1875,0.12109 0.28125,0.1875l0.09375,0.0625l0.10938,0.07031c0.19922,0.13281 0.39453,0.25391 0.67188,0.41406c0.17969,0.10938 0.37109,0.21875 0.49609,0.28125c0.05469,0.03125 0.11328,0.0625 0.25,0.13672l0.30469,0.16016c0.01563,0.00781 0.08594,0.03906 0.10156,0.04688c0.19922,0.10156 0.40625,0.19922 0.61328,0.29297l0.31641,0.14063c0.20703,0.08984 0.41797,0.17578 0.67578,0.27344l0.11719,0.04297c0.00781,0.00781 0.10547,0.04297 0.11328,0.04688c0.1875,0.06641 0.37891,0.13281 0.57031,0.19531l0.4375,0.14453c0.21875,0.07422 0.47266,0.16016 0.75,0.20703c1.36328,0.22656 2.6875,0.34375 3.94141,0.34375c0.14844,0 0.29688,-0.00391 0.44141,-0.00391c11.03906,-0.24219 13.91016,-9.62109 13.9375,-9.71484c0.13672,-0.47266 -0.08594,-0.97656 -0.53125,-1.1875c-0.44531,-0.21094 -0.97656,-0.0625 -1.25391,0.34375c-2.79687,4.08594 -8.08594,5.8125 -13.47266,4.39063c-0.25,-0.0625 -0.49219,-0.13281 -0.79297,-0.23047c-0.05078,-0.01562 -0.09375,-0.03125 -0.17578,-0.0625c-0.17578,-0.05469 -0.34766,-0.11328 -0.54297,-0.1875l-0.27734,-0.10547c-0.16016,-0.0625 -0.32031,-0.125 -0.51562,-0.21094l-0.12891,-0.05859c-0.23828,-0.10156 -0.46875,-0.21484 -0.67578,-0.31641l-0.57031,-0.29687c-0.12891,-0.0625 -0.24219,-0.13281 -0.41797,-0.23828l-0.09766,-0.05469l-0.09766,-0.05859c-0.14453,-0.08594 -0.28906,-0.17578 -0.42187,-0.26953l-0.09375,-0.05859c-0.00781,-0.00391 -0.08594,-0.05859 -0.09375,-0.06641c-0.11719,-0.07422 -0.23047,-0.14844 -0.33984,-0.21875c-0.24219,-0.17187 -0.48047,-0.35156 -0.75781,-0.57031l-0.10937,-0.08984c-2.57812,-2.05859 -4.48437,-4.80859 -5.37891,-7.75781c-0.83203,-2.70703 -0.21484,-6.25 1.65234,-9.47656c0.24219,-0.41797 0.15234,-0.94922 -0.21875,-1.26172c-0.18359,-0.15625 -0.41016,-0.23828 -0.63672,-0.23828zM10.00391,8c-0.23828,0 -0.48047,0.08594 -0.67187,0.25781c-1.91016,1.71484 -3.33984,3.9375 -3.49609,4.19141c-4.08594,5.94922 -3.29687,15.19531 -0.49219,20.84766c0.05469,0.11719 0.11328,0.23047 0.17188,0.34375l0.03906,0.0625c0.05078,0.11328 0.10938,0.23047 0.12891,0.25391c0.03125,0.07422 0.07813,0.15625 0.09766,0.17969c0.04688,0.09766 0.09375,0.18359 0.17969,0.33203l0.32031,0.55078c0.04688,0.07422 0.09375,0.15234 0.10938,0.17969c0.0625,0.10156 0.12891,0.20703 0.19531,0.3125l0.15625,0.25c0.04688,0.07422 0.09375,0.14063 0.125,0.17969c0.15625,0.24219 0.3125,0.48438 0.48438,0.71484c0.00781,0.01172 0.01563,0.01953 0.02344,0.02734l0.0625,0.08594c0.14063,0.20313 0.28516,0.39844 0.41406,0.55859l0.57031,0.72266c0.00781,0.00781 0.07031,0.08203 0.07422,0.08984l0.08203,0.09375c0.17188,0.21094 0.35547,0.42188 0.53906,0.625c0.02734,0.03125 0.05469,0.05859 0.08203,0.08984c0.17578,0.19141 0.35547,0.38281 0.54297,0.58203l0.17969,0.17188c0.14844,0.15625 0.29688,0.30859 0.45313,0.45313c0,0.00391 0.07422,0.07422 0.07422,0.07422l0.15625,0.14453c0.1875,0.17969 0.38281,0.35938 0.53125,0.48438c0.00781,0.01172 0.14844,0.13281 0.16016,0.14063c0.18359,0.16406 0.36719,0.32031 0.55469,0.47266l0.95703,0.75781c0.16016,0.11719 0.32422,0.23438 0.51172,0.37109c0.0625,0.04688 0.12891,0.09375 0.19531,0.13672c0.02734,0.02344 0.05859,0.04688 0.07813,0.05859l0.71875,0.48047c0.26172,0.17188 0.52344,0.33203 0.84375,0.52344l0.17188,0.09766c0.19922,0.11719 0.40234,0.23438 0.59375,0.33594c0.11328,0.0625 0.22656,0.11719 0.32422,0.16797c0.13672,0.07422 0.28516,0.15625 0.51172,0.26563c0.01953,0.01172 0.17969,0.08984 0.19922,0.09766c0.22656,0.11328 0.45703,0.21875 0.74609,0.34766c0,0.00391 0.09375,0.04688 0.09375,0.04688c0.26563,0.11328 0.52344,0.22266 0.86328,0.35938c0.05469,0.02344 0.10938,0.04297 0.12109,0.04688c0.24219,0.09375 0.49609,0.1875 0.70313,0.26172c0.01953,0.00781 0.125,0.05078 0.14453,0.05859c0.27734,0.09375 0.55078,0.18359 0.90234,0.29297c0.05859,0.01953 0.12109,0.03906 0.12891,0.03906l0.19922,0.0625c0.24219,0.07422 0.48438,0.15234 0.74609,0.20313c1.85938,0.33984 3.67578,0.51563 5.39453,0.51563h0.00391c14.32422,0 18.88672,-11.52734 18.93359,-11.64453c0.17578,-0.46484 -0.01562,-0.98828 -0.45312,-1.23047c-0.42969,-0.23828 -0.97656,-0.125 -1.28125,0.26953c-3.67578,4.83984 -10.60937,6.63672 -18.54687,4.8125c-0.19141,-0.04687 -0.38672,-0.10156 -0.57812,-0.16016l-0.375,-0.11328c-0.25391,-0.07812 -0.50781,-0.16406 -0.75391,-0.25c-0.00391,0 -0.11719,-0.04297 -0.11719,-0.04297c-0.21875,-0.07422 -0.4375,-0.16016 -0.62891,-0.23437l-0.21875,-0.08594c-0.24219,-0.09766 -0.48437,-0.19922 -0.71875,-0.30469l-0.13672,-0.05859c-0.21094,-0.09766 -0.41406,-0.19141 -0.61719,-0.29297c-0.01562,-0.00781 -0.17578,-0.08594 -0.19141,-0.08984c-0.14062,-0.07031 -0.28125,-0.14453 -0.46094,-0.24219l-0.81641,-0.4375c-0.08203,-0.05469 -0.16797,-0.10547 -0.25,-0.14844c-0.24609,-0.15234 -0.5,-0.30469 -0.75,-0.46484c-0.05859,-0.03516 -0.10937,-0.07422 -0.20703,-0.14062c-0.17187,-0.10937 -0.33984,-0.22266 -0.58594,-0.39453l-0.09766,-0.07031c-0.16797,-0.11719 -0.33203,-0.24219 -0.46875,-0.34375c-0.08594,-0.0625 -0.17187,-0.13281 -0.3125,-0.23828c-0.125,-0.09766 -0.25,-0.19141 -0.36719,-0.28516l-0.21875,-0.17969c-0.18359,-0.14844 -0.35547,-0.30469 -0.53516,-0.45703c-0.02344,-0.02344 -0.04297,-0.03906 -0.07031,-0.05859c-0.19922,-0.18359 -0.40234,-0.36719 -0.64453,-0.59766l-0.70703,-0.70312c-0.17187,-0.17578 -0.34375,-0.35547 -0.53906,-0.57031c-0.17969,-0.19922 -0.35156,-0.39844 -0.58203,-0.67187l-0.42187,-0.51562c-0.05078,-0.07422 -0.10547,-0.14844 -0.17187,-0.22656c-0.14453,-0.19531 -0.28906,-0.38672 -0.43359,-0.58984c-3.89062,-5.35937 -4.90625,-16.54687 -1.875,-20.64453c0.30469,-0.41016 0.25,-0.98828 -0.13281,-1.33594c-0.1875,-0.17187 -0.42969,-0.25781 -0.66797,-0.25781z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															jquery
														</h2>
													</span>
													<span className='mongodb skill'>
														<svg
															fill='#ffffff'
															viewBox='0 0 32 32'
															xmlns='http://www.w3.org/2000/svg'
															stroke='#ffffff'
														>
															<g
																id='SVGRepo_bgCarrier'
																strokeWidth='0'
															></g>
															<g
																id='SVGRepo_tracerCarrier'
																strokeLinecap='round'
																strokeLinejoin='round'
															></g>
															<g id='SVGRepo_iconCarrier'>
																<path d='M22.906 12.693c-1.682-7.417-5.656-9.849-6.083-10.781-0.469-0.661-0.974-1.911-0.974-1.911-0.005 0.026-0.005 0.042-0.010 0.068v0.016c0 0.021-0.005 0.031-0.005 0.052v0.021h-0.005c0 0.010 0 0.021 0 0.031v0.036h-0.005c0 0.010 0 0.026-0.005 0.031v0.031c0 0.010 0 0.021-0.005 0.026v0.026c0 0.016 0 0.031-0.005 0.042v0.005c0 0.021-0.005 0.047-0.010 0.068v0.010c-0.005 0.005-0.005 0.010-0.005 0.016v0.021h-0.005v0.031h-0.005v0.021h-0.010v0.031h-0.005v0.026h-0.005v0.021h-0.005v0.021h-0.005v0.021h-0.005v0.021h-0.005v0.016h-0.005v0.021h-0.005c0 0 0 0.005 0 0.005v0.016h-0.005c-0.005 0-0.005 0.005-0.005 0.005v0.010c0 0-0.005 0.010-0.005 0.010 0 0.010-0.005 0.021-0.010 0.031-0.005 0.005-0.005 0.005-0.005 0.010v0.010h-0.005v0.010h-0.010v0.026h-0.010v0.016h-0.005v0.005h-0.005v0.010h-0.005v0.016h-0.005v0.010h-0.010v0.016h-0.005v0.010h-0.005v0.010h-0.005v0.016h-0.005v0.010h-0.005v0.005h-0.005v0.010h-0.010v0.016h-0.005v0.005h-0.005v0.010h-0.005v0.016h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.016h-0.010v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.010h-0.005c0 0.005 0 0.005 0 0.005v0.005c-0.005 0-0.005 0.005-0.005 0.005v0.005h-0.005c-0.005 0.010-0.010 0.016-0.016 0.026 0 0-0.010 0.010-0.010 0.016-0.005 0-0.005 0.005-0.005 0.005v0.005h-0.005v0.005h-0.005c0 0 0 0 0 0.005v0.005h-0.010v0.005c0 0-0.005 0-0.005 0v0.005h-0.005c0 0 0 0.005 0 0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.010h-0.005v-0.010h-0.010v0.005h-0.005v0.010h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005v0.010h-0.010v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.016h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.010v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.010v0.005h-0.005v0.005h-0.005v0.010h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.010v0.005h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.010v0.005c-0.005 0-0.005 0.005-0.005 0.005l-0.005 0.005c0 0-0.005 0.005-0.005 0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005l-0.010 0.010v0.005c-0.010 0.005-0.010 0.010-0.021 0.021 0 0-0.010 0.010-0.016 0.010-0.016 0.010-0.036 0.031-0.052 0.047-0.010 0.005-0.021 0.016-0.031 0.021-0.021 0.021-0.042 0.036-0.063 0.052-0.031 0.031-0.063 0.052-0.099 0.083h-0.005c-0.073 0.063-0.156 0.135-0.245 0.214h-0.005c-0.224 0.198-0.49 0.453-0.792 0.755l-0.026 0.026c-1.813 1.875-4.672 5.786-4.969 12.104-0.031 0.521-0.026 1.031 0.005 1.526v0.010c0.146 2.49 0.927 4.615 1.906 6.344 0.385 0.688 0.807 1.313 1.234 1.875 1.469 1.938 2.969 3.089 3.349 3.37 0.589 1.359 0.536 3.703 0.536 3.703l0.859 0.286c0 0-0.177-2.266 0.068-3.365 0.078-0.339 0.255-0.63 0.464-0.88 0.146-0.099 0.563-0.401 1.063-0.859 0.026-0.026 0.042-0.047 0.063-0.073 2.026-1.891 5.813-6.547 4.516-14.13z'></path>
															</g>
														</svg>
														<h2 className='skill-name'>
															mongo db
														</h2>
													</span>
													<span className='python skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(5.12,5.12)'>
																	<path d='M24.5,2c-8.69922,0 -10.5,4.49219 -10.5,7.09375v4.90625h10v1h-14.90625c-3.30078,0 -7.09375,2.60156 -7.09375,10c0,7.39844 3.79297,10 7.09375,10h5.90625v-6c0,-2.19922 1.80078,-4 4,-4h12c1.69922,0 3,-1.30078 3,-3v-12.90625c0,-3.5 -3.30078,-7.09375 -9.5,-7.09375zM20,7c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2zM35,15v7c0,2.19922 -1.80078,4 -4,4h-12c-1.69922,0 -3,1.30078 -3,3v11.90625c0,3.5 3.30078,7.09375 9.5,7.09375c8.69922,0 10.5,-4.49219 10.5,-7.09375v-4.90625h-10v-1h14.90625c3.30078,0 7.09375,-2.60156 7.09375,-10c0,-7.39844 -3.79297,-10 -7.09375,-10zM30,39c1.10156,0 2,0.89844 2,2c0,1.10156 -0.89844,2 -2,2c-1.10156,0 -2,-0.89844 -2,-2c0,-1.10156 0.89844,-2 2,-2z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															python
														</h2>
													</span>
													<span className='c skill'>
														<svg
															width='80'
															height='80'
															viewBox='0 0 256 288'
															xmlns='http://www.w3.org/2000/svg'
															preserveAspectRatio='xMidYMid'
														>
															<path
																d='M255.987 85.672c-.002-4.843-1.037-9.122-3.129-12.794-2.055-3.612-5.134-6.638-9.262-9.032-34.081-19.67-68.195-39.28-102.264-58.97-9.185-5.307-18.091-5.114-27.208.27-13.565 8.008-81.481 46.956-101.719 58.689C4.071 68.665.015 76.056.013 85.663 0 125.221.013 164.777 0 204.336c.002 4.736.993 8.932 2.993 12.55 2.056 3.72 5.177 6.83 9.401 9.278 20.239 11.733 88.164 50.678 101.726 58.688 9.121 5.387 18.027 5.579 27.215.27 34.07-19.691 68.186-39.3 102.272-58.97 4.224-2.447 7.345-5.559 9.401-9.276 1.997-3.618 2.99-7.814 2.992-12.551 0 0 0-79.094-.013-118.653'
																fill='#ffffff'
															/>
															<path
																d='M141.101 5.134c-9.17-5.294-18.061-5.101-27.163.269C100.395 13.39 32.59 52.237 12.385 63.94 4.064 68.757.015 76.129.013 85.711 0 125.166.013 164.62 0 204.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254a9008.51 9008.51 0 0 0 20.159 11.62L219.625 50.375c-26.178-15.074-52.363-30.136-78.524-45.241'
																fill='#ffffff'
															/>
															<path
																d='M154.456 126.968l39.839.281c0-16.599-16.802-57.249-64.973-57.249-30.691 0-71.951 19.512-71.951 75.61 0 56.097 40.447 74.39 71.951 74.39 51.017 0 63.21-35.302 63.21-55.252l-38.007-2.173s1.017 23.075-25.406 23.075c-24.39 0-28.46-29.878-28.46-40.04 0-15.447 5.493-40.244 28.46-40.244 22.968 0 25.337 21.602 25.337 21.602'
																fill='#FFF00'
															/>
														</svg>
														<h2 className='skill-name'>
															c
														</h2>
													</span>
													<span className='c++ skill'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															x='0px'
															y='0px'
															viewBox='0,0,256,256'
															style={{
																fill: "#000000",
															}}
														>
															<g
																fillOpacity='0'
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<path
																	d='M0,256v-256h256v256z'
																	id='bgRectangle'
																></path>
															</g>
															<g
																fill='#ffffff'
																fillRule='nonzero'
																stroke='none'
																strokeWidth='1'
																strokeLinecap='butt'
																strokeLinejoin='miter'
																strokeMiterlimit='10'
																strokeDasharray=''
																strokeDashoffset='0'
																fontFamily='none'
																fontWeight='none'
																fontSize='none'
																textAnchor='none'
																style={{
																	mixBlendMode:
																		"normal",
																}}
															>
																<g transform='scale(5.12,5.12)'>
																	<path d='M43.91016,12.00391l-16.83984,-9.46484c-1.27734,-0.71484 -2.86328,-0.71484 -4.14062,0l-16.83984,9.46484c-1.28906,0.72266 -2.08984,2.07813 -2.08984,3.53125v18.92969c0,1.45313 0.80078,2.80859 2.08984,3.53125l16.83984,9.46484c0.64063,0.35938 1.35547,0.53906 2.07031,0.53906c0.71484,0 1.42969,-0.17969 2.07031,-0.53906l16.83984,-9.46484c1.28906,-0.72266 2.08984,-2.07812 2.08984,-3.53125v-18.92969c0,-1.45312 -0.80078,-2.80859 -2.08984,-3.53125zM25,37c-6.61719,0 -12,-5.38281 -12,-12c0,-6.61719 5.38281,-12 12,-12c3.78125,0 7.27344,1.75391 9.54297,4.74219l-4.38281,2.53516c-1.31641,-1.44141 -3.1875,-2.27734 -5.16016,-2.27734c-3.85937,0 -7,3.14063 -7,7c0,3.85938 3.14063,7 7,7c1.97266,0 3.84375,-0.83594 5.16016,-2.27734l4.38281,2.53516c-2.26953,2.98828 -5.76172,4.74219 -9.54297,4.74219zM37,26h-2v2h-2v-2h-2v-2h2v-2h2v2h2zM44,26h-2v2h-2v-2h-2v-2h2v-2h2v2h2z'></path>
																</g>
															</g>
														</svg>
														<h2 className='skill-name'>
															c++
														</h2>
													</span>
												</span>
												<a href='./IK CV.pdf'>
													Here's a copy of my resume!
												</a>
											</div>
										</div>
									</div>
								</li>
								<li className='l-section section flex items-center justify-between'>
									<div className='contact w-full'>
										<div className='contact--lockup'>
											<div
												ref={mapContainer}
												className='map-container'
												style={{
													width: 40 + "vw",
													height: 40 + "vw",
												}}
											></div>
											<div className='modal'>
												<div className='modal--information'>
													<p>
														6 Ogbeifun Ln, Benin
														City, Nigeria
													</p>
													<a href='mailto:ik.arigbe.osula@gmail.com'>
														ik.arigbe.osula@gmail.com
													</a>
													<a href='https://wa.link/uvtsh2'>
														+234 811 929 0316
													</a>
												</div>
												<ul className='modal--options'>
													<li>
														<a href='https://www.linkedin.com/in/osaite-arigbe-osula-6386a6170/'>
															LinkedIn
														</a>
													</li>
													<li>
														<a href='mailto:ik.arigbe.osula@gmail.com'>
															Gmail
														</a>
													</li>
													<li>
														<a href='https://wa.link/uvtsh2'>
															WhatsApp
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<ul className='outer-nav'>
					<li className='is-active'>Home</li>
					<li>About</li>
					<li>Projects</li>
					<li>Skills</li>
					<li>Contact</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
