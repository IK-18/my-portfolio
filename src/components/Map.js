import React from "react";
import ReactMapboxGl, {Marker} from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
	accessToken:
		"pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A",
	interactive: false,
});

<Map
	style='mapbox://styles/ik-18/clk2drh4n00ev01pe68sgdnz8'
	center={[5.598889, 6.326944]}
	zoom={17}
	className='mapContainer'
	containerStyle={{width: 40 + "vw", height: 40 + "vw"}}
>
	<Marker coordinate={[5.598889, 6.326944]} anchor='top'></Marker>
</Map>;

export default Map;
