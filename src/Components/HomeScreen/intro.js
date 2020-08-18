import React from "react";
import "./intro.css";
import { useMediaQuery } from "react-responsive";

function Intro(props) {
	return (
		<div style={{ width: "100%" }}>
			<img src="./intro.png" alt="Intro_Image" style={{
				width:"80%",
				margin: "auto"
			}} />
		</div>
	);
}

export default Intro;
