/* eslint-disable no-unused-vars */
import $ from "jquery";
import "./css/output.css";
import React, {useRef, useEffect, useState} from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import useWindowDimensions from "./hooks/useWindowDimensions";
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
import IntroOptions from "./components/IntroOptions";
import AboutOptions from "./components/AboutOptions";
import SliderItem from "./components/SliderItem";
import Map from "./components/Map";
import Skills from "./components/Skills";
import {ReactComponent as Html} from "./components/Html.svg";
import {ReactComponent as Css} from "./components/Css.svg";
import {ReactComponent as Javascript} from "./components/Javascript.svg";
import {ReactComponent as Tailwind} from "./components/Tailwind.svg";
import {ReactComponent as Bootstrap} from "./components/Bootstrap.svg";
import {ReactComponent as Sass} from "./components/Sass.svg";
import {ReactComponent as Reactsvg} from "./components/React.svg";
import {ReactComponent as Vue} from "./components/Vue.svg";
import {ReactComponent as Node} from "./components/Node.svg";
import {ReactComponent as Express} from "./components/Express.svg";
import {ReactComponent as ReactNative} from "./components/ReactNative.svg";
import {ReactComponent as JQuery} from "./components/JQuery.svg";
import {ReactComponent as MongoDB} from "./components/MongoDB.svg";
import {ReactComponent as Python} from "./components/Python.svg";
import {ReactComponent as C} from "./components/C.svg";
import {ReactComponent as Cpp} from "./components/Cpp.svg";
import Head from "./components/Head";

mapboxgl.accessToken =
	"pk.eyJ1IjoiaWstMTgiLCJhIjoiY2xob3V5ZmNrMDBxbjNjbXNsejQ3ZWtnZSJ9.N-IuSYETQcRA4DHjACi8vQ";

const optionsA = [
	{title: "html", element: <Html />, name: "html/html5"},
	{title: "css", element: <Css />, name: "css/css3"},
	{title: "js", element: <Javascript />, name: "javascript"},
	{title: "tailwind", element: <Tailwind />, name: "tailwind"},
	{title: "bootstrap", element: <Bootstrap />, name: "bootstrap"},
	{title: "sass", element: <Sass />, name: "sass"},
];
const optionsB = [
	{title: "react", element: <Reactsvg />, name: "react"},
	{title: "vue", element: <Vue />, name: "vue"},
	{title: "node", element: <Node />, name: "node.js"},
	{title: "express", element: <Express />, name: "express.js"},
	{title: "react-native", element: <ReactNative />, name: "react native"},
];
const optionsC = [
	{title: "jquery", element: <JQuery />, name: "jquery"},
	{title: "mongodb", element: <MongoDB />, name: "mongo db"},
	{title: "python", element: <Python />, name: "python"},
	{title: "c", element: <C />, name: "c"},
	{title: "c++", element: <Cpp />, name: "c++"},
];

function App() {
	return (
		<div className='App'>
			<Head />
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
								<ul className='header--logo w-[30vh] flex-row justify-around'>
									<li>
										<a
											className=''
											href='https://github.com/IK-18'
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												x='0px'
												y='0px'
												width='6.3vh'
												height='6.3vh'
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
												width='6.8vh'
												height='6.8vh'
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
												width='6.3vh'
												height='6.3vh'
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
												width='6.3vh'
												height='6.3vh'
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
												<br />
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
											<div className='h-[100%] w-[100%] blur'>
												<img
													src={backg}
													alt='Welcome'
													className='h-[100%] w-[100%]'
												/>
											</div>
										</div>
										<div className='intro--options'>
											<IntroOptions
												h3='About Me'
												p='Get to know me a bit.'
											/>
											<IntroOptions
												h3='Projects'
												p='Check out some of my
													projects.'
											/>
											<IntroOptions
												h3='Contact Me'
												p='Reach out.'
											/>
										</div>
										<span className='mobile-prompt'>
											Scroll/Swipe to see more!
										</span>
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
											<AboutOptions
												h3='About Me'
												divClass='about-desc absolute bottom-[-300%] left-[0] z-[1000] w-[500%]'
												p="I'm currently a student
														at Babcock University
														earning my B.Sc degree
														in Computer Science.
														I've been dabbling in
														the web dev world for
														about 2 years now."
											/>
											<AboutOptions
												h3='My Skills'
												divClass='about-desc absolute bottom-[-300%] left-[-11.5vw] z-[1000] w-[500%]'
												p="I'm versed in both
														frontend and backend
														languages including but
														not limited to HTML5,
														CSS3, JavaScript, React,
														Node.JS, Python, C, C++,
														etc."
											/>
											<AboutOptions
												h3='My Projects'
												divClass='about-desc absolute bottom-[-300%] left-[-23vw] z-[1000] w-[500%]'
												p="I've built several
														projects which utilized
														various combinations of
														the languages I have
														learnt which you can
														check on the next page."
											/>
										</div>
									</div>
								</li>
								<li className='l-section section'>
									<div className='work'>
										<h2>Selected work</h2>
										<div className='work--lockup'>
											<div className='slider--prev'>
												<svg
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M8.79982 13.5101L10.7698 15.4801L13.9798 18.6901C14.6598 19.3601 15.8198 18.8801 15.8198 17.9201L15.8198 11.6901V6.08007C15.8198 5.12007 14.6598 4.64007 13.9798 5.32007L8.79982 10.5001C7.96982 11.3201 7.96982 12.6801 8.79982 13.5101Z'
														fill='#FFFFFF'
													/>
												</svg>
											</div>
											<ul className='slider'>
												<SliderItem
													liClass='slider--item slider--item-left'
													liveURL='https://tic-tac-toe-ik-18.vercel.app/'
													imageURL={ticTac}
													title='Tic Tac Toe'
													desc='One of my first projects where I had to use a bit more intermediate level JavaScript. Just a basic Tic Tac Toe game to play with a partner. You can find the source code '
													sourceURL='https://github.com/IK-18/Tic-Tac-Toe'
												/>
												<SliderItem
													liClass='slider--item slider--item-center'
													liveURL='https://superhero-database-ik-18.vercel.app/'
													imageURL={supDB}
													title='Superhero Database'
													desc="My first attempt at
															using APIs. It's a
															simple project for
															looking up comic
															book heroes and
															antiheroes as well
															as anime main
															characters. You can
															find the source code "
													sourceURL='https://github.com/IK-18/Superhero-Database'
												/>
												<SliderItem
													liClass='slider--item slider--item-right'
													liveURL='https://rock-paper-scissors-ik-18.vercel.app/'
													imageURL={RPS}
													title='Rock, Paper,
															Scissors'
													desc='A basic project with
															minimal code. A
															rock, paper,
															scissors game to
															play against the
															script. You can find
															the source code '
													sourceURL='https://github.com/IK-18/Rock-Paper-Scissors'
												/>
												<SliderItem
													liClass='slider--item'
													liveURL='https://you-tube-clone-ik-18.vercel.app/'
													imageURL={youtube}
													title='YouTube Clone'
													desc='My first ever page.
															A very basic HTML
															clone of a YouTube
															page. You can find
															the source code '
													sourceURL='https://github.com/IK-18/YouTube-Clone'
												/>
												<SliderItem
													liClass='slider--item'
													liveURL='https://tip-calculator-ik-18.vercel.app/'
													imageURL={tipCalc}
													title='Tip Calculator'
													desc='A project that uses
															intermediate level
															JavaScript. A basic
															tip calulator that
															displays the bill
															for each individual.
															You can find the
															source code'
													sourceURL='https://github.com/IK-18/Tip-Calculator'
												/>
												<SliderItem
													liClass='slider--item'
													liveURL='https://osasula-farms.vercel.app/'
													imageURL={osasula}
													title='Osasula Farms'
													desc='A more in-depth site
															with improved
															styling as well as
															more advanced
															JavaScript. A farm
															website
															commissioined by a
															relative but
															eventually scrapped.
															You can find the
															source code'
													sourceURL='https://github.com/IK-18/Osasula-Farms'
												/>
												<SliderItem
													liClass='slider--item'
													liveURL='https://netfilx-clone-js.vercel.app/'
													imageURL={netJS}
													title='Netflix JS Clone'
													desc="A small project
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
															find the source code"
													sourceURL='https://github.com/IK-18/netfilx-clone-js'
												/>
												<SliderItem
													liClass='slider--item'
													liveURL='https://weather-app-ik-18.vercel.app/'
													imageURL={weather}
													title='Weather Forecast App'
													desc='A significant
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
															find the source code'
													sourceURL='https://github.com/IK-18/Weather-App'
												/>
												<SliderItem
													liClass='slider--item'
													liveURL='https://portfolio-ik-18.vercel.app/'
													imageURL={portfolio}
													title='Portfolio App'
													desc="The plain JavaScript
															version of the
															current portfolio
															you're viewing. The
															site you're viewing
															will probably be
															more recent as I no
															longer update that
															site. You can find
															the source code"
													sourceURL='https://github.com/IK-18/Portfolio'
												/>
											</ul>
											<div className='slider--next'>
												<svg
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M15.2002 10.4899L13.2302 8.51993L10.0202 5.30993C9.34018 4.63993 8.18018 5.11993 8.18018 6.07993V12.3099V17.9199C8.18018 18.8799 9.34018 19.3599 10.0202 18.6799L15.2002 13.4999C16.0302 12.6799 16.0302 11.3199 15.2002 10.4899Z'
														fill='#FFFFFF'
													/>
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
												<Skills
													tag='options-a'
													data={optionsA}
												/>
												<Skills
													tag='options-b'
													data={optionsB}
												/>
												<Skills
													tag='options-c'
													data={optionsC}
												/>
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
											<Map />
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
