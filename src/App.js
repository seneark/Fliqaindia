import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/NavBar";
import CoverImage from "./Components/HomeScreen/CoverImage";
import Responsive from "./Components/Slider/slider";
import Footer from "./Components/Footer/Footer";
import HomeScreenBtn from "./Components/Button/HomeScreenBtn";
import Intro from "./Components/HomeScreen/intro";

import { Row, Col, Container } from "react-bootstrap";

class App extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			Tabs: [
				{ name: "Home", link: "#Home" },
				{ name: "About Us", link: "#About" },
				{ name: "Services", link: "#Services" },
				{ name: "Freelancers", link: "#Freelancers" },
				{ name: "Blog", link: "#Blog" },
				{ name: "Tour & Travels", link: "#Tour" },
				{ name: "Tutorial", link: "#Tutorial" },
				{ name: "Contact Us", link: "#Contact" },
			],
			Caro: [
				{
					title: "Wedding Photography",
					img: "./assets/undraw/wedding.svg",
				},
				{
					title: "Beach Photography",
					img: "./assets/undraw/beach.svg",
				},
				{
					title: "Pre Wedding Shoot",
					img: "./assets/undraw/wedding0.svg",
				},
				{
					title: "Portfolio Shoot",
					img: "./assets/undraw/influencer.svg",
				},
				{
					title: "Drone Services",
					img: "./assets/undraw/drone.svg",
				},
				{
					title: "Graphics",
					img: "./assets/undraw/walk.svg",
				},
			],
			OfferImg: [
				"./assets/Offer/1-min.png",
				"./assets/Offer/2-min.png",
				"./assets/Offer/3-min.png",
				"./assets/Offer/4-min.png",
				"./assets/Offer/5-min.png",
			],
			Blogs: [
				{ title: "adbfns vs f vs fv", img: "./assets/Offer/1-min.png" },
				{ title: "adbfns vs f vs fv", img: "./assets/Offer/2-min.png" },
				{ title: "adbfns vs f vs fv", img: "./assets/Offer/3-min.png" },
				{ title: "adbfns vs f vs fv", img: "./assets/Offer/4-min.png" },
				{ title: "adbfns vs f vs fv", img: "./assets/Offer/5-min.png" },
			],
			Services: [
				"./assets/Services/1-min.png",
				"./assets/Services/2-min.png",
				"./assets/Services/3-min.png",
				"./assets/Services/4-min.png",
				"./assets/Services/5-min.png",
				"./assets/Services/6-min.png",
			],
		};
	}

	render() {
		return (
			<div className="App">
				<NavBar Tabs={this.state.Tabs} />
				<CoverImage />
				<div style={{ display: "flex", justifyContent: "center", margin:40 }}>
					<HomeScreenBtn
						Color="#2B9DB6"
						Width={255}
						Height={196}
						title="Explore Us"
					/>
				</div>

				<Responsive
					bgColor="#EEF9FF"
					center={false}
					imgs={this.state.Caro}
					textTile={true}
					imgWidth={125}
					imgHeight={105}
					HomeSliderVal={6}
				/>

				<Intro/>

				<div>
					<Row xs={1} md={2} lg={3} noGutters={true}>
						{this.state.Services.map((item, idx) => {
							return (
								<Col>
									<img src={item} alt="Images" />
								</Col>
							);
						})}
					</Row>
				</div>
				<Responsive
					bgColor="white"
					center={false}
					imgs={this.state.OfferImg}
					textTile={false}
					HomeSliderVal={5}
				/>
				<div
					style={{
						backgroundImage:
							"linear-gradient(to bottom, rgba(180, 205, 224, 0) 24.22%, rgba(193, 215, 231, 0.83))",
					}}
				>
					<Container>
						<Row xs={1} md={2}>
							<Col
								className="Col"
								style={{
									borderRight:
										"0.01em solid rgba(0,0,0, 0.1)",
								}}
							>
								<img
									src="./assets/undraw/video.svg"
									className="VectorImg"
									alt="Images"
								/>
								<p className="VectorP">Best Quality</p>
								<p>
									The best way to ensure sustainability for
									Fliqaindia is to deliver the highest
									standard of its goods and services. Price
									over quantity is our priority
								</p>
							</Col>
							<Col className="Col">
								<img
									src="./assets/undraw/video.svg"
									className="VectorImg"
									alt="Images"
								/>
								<p className="VectorP">Best Quality</p>
								<p>
									The best way to ensure sustainability for
									Fliqaindia is to deliver the highest
									standard of its goods and services. Price
									over quantity is our priority
								</p>
							</Col>
						</Row>

						<Row xs={1} md={2}>
							<Col
								className="Col"
								style={{
									borderRight:
										"0.01em solid rgba(0,0,0, 0.1)",
								}}
							>
								<img
									src="./assets/undraw/video.svg"
									className="VectorImg"
									alt="Images"
								/>
								<p className="VectorP">Best Quality</p>
								<p>
									The best way to ensure sustainability for
									Fliqaindia is to deliver the highest
									standard of its goods and services. Price
									over quantity is our priority
								</p>
							</Col>
							<Col className="Col">
								<img
									src="./assets/undraw/video.svg"
									className="VectorImg"
									alt="Images"
								/>
								<p className="VectorP">Best Quality</p>
								<p>
									The best way to ensure sustainability for
									Fliqaindia is to deliver the highest
									standard of its goods and services. Price
									over quantity is our priority
								</p>
							</Col>
						</Row>
					</Container>
				</div>
				<Responsive
					bgColor="rgba(169, 194, 217, 0.83)"
					center={true}
					imgs={this.state.Blogs}
					title="latest Blog"
					textTile={true}
					Width="90%"
					HomeSliderVal={3}
				/>
				<Footer bgColor="#6082A7" />
			</div>
		);
	}
}

export default App;
