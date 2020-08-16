import React from "react";
import "./intro.css";
import { useMediaQuery } from "react-responsive";

function Intro(props) {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<div style={{ width: "100%" }}>
			<div
				style={{
					width: "90%",
					margin: "auto",
					position: "relative",
				}}
			>
				<img
					className="introImg"
					src="./assets/undraw/wedding.svg"
					alt="fly"
					style={{
						height: "10%",
					}}
				/>
				<div className="content">
					<h1 className="head">About Us</h1>
					<h5 className="subHead">Fliqaindia for everyone</h5>
					<p className="introCont">
						With this belief, we at Fliqaindia started out jouney 5
						years ago with the belief that everyone has the right to
						quality photograph to help them better capture and
						conserve their special moments. We have been appreciated
						and recommended by the Start Up India, StartUp Bengal,
						imagesbazar and Digital India for over novel initiative.
						We have partnered with Canvera to give you the best
						services possible. WE also trusted by Justdial,
						WedMEGood, Shaadisaga,weddingwire and so many known
						events organisers.
						<br />
						Now, we have expanded out buisness in different parts of
						India owing to our happy customers who believed in us,
						supported us and promoted us through strong
						word-of-mouth. We continue to work hard towards
						realizing our vision of making quality photography
						accessible and affordable for all.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Intro;
