import React from "react";
import "./intro.css";
import { useMediaQuery } from "react-responsive";

function Intro(props) {
	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
	return (
		<div
			style={{
				width: "100%",
				overflow: "hidden",
				height: isPortrait ? "100vw" : null,
				display:"flex",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			<img
				src="./intro.png"
				alt="Intro_Image"
				style={{
					width: "80%",
					margin: "auto",
					transform: isPortrait ? "scale(1.8)" : null,
				}}
			/>
		</div>
	);
}

export default Intro;
