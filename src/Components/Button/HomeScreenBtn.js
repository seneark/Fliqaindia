import React from "react";

const HomeScreenBtn = (props) => {
	return (
		<div
			style={{
				width: props.Width,
				height: 45,
				backgroundColor: props.Color,
				borderRadius: 32,
				boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
			}}
		>
			<p
				style={{
					margin: "auto",
					width: "50%",
					padding: 10,
					color:"white"
				}}
			>
				{props.title}{" "}
			</p>
		</div>
	);
};

export default HomeScreenBtn;
