import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Testimony.css";
import { useMediaQuery } from "react-responsive";

const Testimony = () => {
	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
	return (
		<div style={{
			background:"rgba(234, 246, 255, 0.83)"
		}}>
			<br />
			<br />
			<br />
			<h1 style={{
				textShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)"
			}}>Testimony</h1>
			<h3>What People Are Talking About</h3>
			<br />
			<br />
			<br />
			<br />
			<Row
				xs={1}
				md={3}
				lg={3}
				noGutters={true}
				style={{
					overflowX: "hidden",
					display: "flex",
					alignItems: "flex-end",
				}}
			>
				<Col lg={3}>
					<div>
						<img
							className="ProfImg"
							src="./assets/Testim/simson.png"
							alt="profile"
						/>
						<h3 className={isPortrait?"TesHeadSmall": "TesHead"}>
							“Great creativity and nice work.Thanks”
						</h3>
						<h5 className="Letter">Sudipta Jana</h5>
						<h3 className="Letter">Wedmegood</h3>
					</div>
				</Col>
				<Col lg={6}>
					<div>
						<div className={isPortrait?null:"ProfBig"}>
							<img
								className="ProfImg"
								src="./assets/Testim/simson.png"
								alt="profile"
							/>
							<h3 className={isPortrait?"TesHeadSmall": "TesHead"}>
								Love your work.Thanks for spending a good time
								with fliqaindia and impressive beautiful work.
								<span role="image" aria-label="emoji">
									😍
								</span>
							</h3>
						</div>
						<h5 className="Letter">Moon Ray</h5>
						<h3 className="Letter">Google</h3>
					</div>
				</Col>
				<Col lg={3}>
					<div>
						<img
							className="ProfImg"
							src="./assets/Testim/simson.png"
							alt="profile"
						/>
						<h3 className={isPortrait?"TesHeadSmall": "TesHead"}>
							I really believe there are things nobody would see
							if Fliqaindia didn't photograph them.
						</h3>
						<h5 className="Letter">Dipesh Jana</h5>
						<h3 className="Letter">Facebook</h3>
					</div>
				</Col>
			</Row>
			<br />
			<br />
			<br />
		</div>
	);
};

export default Testimony;
