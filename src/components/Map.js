/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, {useEffect, useRef, useState} from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(5.598889);
	const [lat, setLat] = useState(6.326944);
	const [zoom, setZoom] = useState(17);

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
		<div
			ref={mapContainer}
			className='map-container'
			style={{
				width: 40 + "vmax",
				height: 40 + "vmax",
			}}
		></div>
	);
}
