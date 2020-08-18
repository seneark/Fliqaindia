import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/NavBar";
import CoverImage from "./Components/HomeScreen/CoverImage";
import Responsive from "./Components/Slider/slider";
import Footer from "./Components/Footer/Footer";
import HomeScreenBtn from "./Components/Button/HomeScreenBtn";
import Intro from "./Components/HomeScreen/intro";
import Tenstim from "./Components/HomeScreen/Testimony";

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
				{ title: "Horrible Mistakes People Do In Photography", img: "./assets/blogs/girl.png" },
				{ title: "Creative Industries are on the verge of depletion due to COVID-19", img: "./assets/blogs/dep.png" },
				{ title: "Is covid-19 writing a new world?", img: "./assets/blogs/cinema.png" },
				{ title: "Crop vs Full Frame – Which Camera Do You Need", img: "./assets/blogs/cam.png" },
				{ title: "Where is Photography Banned?", img: "./assets/blogs/banCam.png" },
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
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						margin: 40,
					}}
				>
					<HomeScreenBtn
						Color="#2B9DB6"
						Width={255}
						Height={46}
						title="Explore Us"
					/>
				</div>

				<Responsive
					bgColor="#EEF9FF"
					center={false}
					imgs={this.state.Caro}
					textTile={true}
					HomeSliderVal={6}
				/>

				<div
					style={{
						backgroundImage:
							"linear-gradient(270deg, #D5F0FF 28.34%, rgba(238, 249, 255, 0) 88.72%)",
						height: "10vw",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							width: "80%",
						}}
					>
						<img
							src={"https://images.vexels.com/media/users/3/193093/isolated/preview/83f23fec75cc6474e19d33a4bec06d7d-covid-19-virus-icons-by-vexels.png"}
							alt="Virus"
							style={{
								width: "14vw",
								height: "10vw",
								margin: 0,
								padding: 0,
							}}
						/>
						<p
							style={{
								fontWeight: "500",
								fontSize: "2vw",
								textAlign: "center",
								padding: 10,
							}}
						>
							Be Smart About where you click
						</p>
						<div
							style={{
								borderRight: "1px solid #000000",
								height: "3.5vw"
							}}
						></div>
						<p
							style={{
								fontWeight: "500",
								fontSize: "2vw",
								textAlign: "center",
								padding: 10,
							}}
						>
							We Are Here for You
						</p>
					</div>
				</div>

				<Intro />

				<div>
					<h1
						style={{
							fontSize: 36,
							letterSpacing: 0.5,
							textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
						}}
					>
						Services We Provide
					</h1>
					<br />
					<Row xs={1} md={2} lg={3} noGutters={true}>
						{this.state.Services.map((item, idx) => {
							return (
								<Col key={idx}>
									<img src={item} alt="Images" />
								</Col>
							);
						})}
					</Row>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						margin: 20,
					}}
				>
					<HomeScreenBtn
						Color="#565779"
						Width={255}
						Height={60}
						title="Explore Us"
					/>
				</div>
				<br />

				<Responsive
					bgColor="white"
					center={false}
					imgs={this.state.OfferImg}
					textTile={false}
					HomeSliderVal={5}
					title="Offers For You"
				/>
				<h1
					style={{
						fontSize: 36,
						letterSpacing: 0.5,
						textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					}}
				>
					Our Key Features
				</h1>
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
									src="./assets/undraw/droneDelivery.svg"
									className="VectorImg"
									alt="Images"
								/>
								<p className="VectorP">Hassle free Delivery</p>
								<p>
									We are now eligible for instant delivery.
									Fortunately, Fliqaindia typically takes on
									the complexities of the design cycle more
									than gladly, because we know what our
									customers want.
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
									src="./assets/undraw/celebration.svg"
									className="VectorImg"
									alt="Images"
								/>
								<p className="VectorP">Customer Satisfaction</p>
								<p>
									Loyalty contributes to continuing
									fulfillment. Fliqaindia therefore considers
									customer satisfaction to be its top
									priority. What we do highlight more than
									what we speak.
								</p>
							</Col>
							<Col className="Col">
								<img
									src="./assets/undraw/payment.svg"
									className="VectorImg"
									alt="Images"
								/>
								<p className="VectorP">Secure Payment</p>
								<p>
									Using a skilled firm by your side will save
									the expense of hiring a custom photographer
									per case and client demand. At Fliqaindia,
									we work according to your priorities and
									restrictions.
								</p>
							</Col>
						</Row>
					</Container>
				</div>
				<Responsive
					bgColor="rgba(169, 194, 217, 0.83)"
					center={true}
					imgs={this.state.Blogs}
					title="Latest Blog"
					textTile={true}
					Width="90%"
					HomeSliderVal={3}
					imgHeight={250}
				/>
				<Tenstim/>
				<Footer bgColor="#6082A7" />
			</div>
		);
	}
}

export default App;
