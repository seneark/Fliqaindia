import React from "react";
import { useMediaQuery } from "react-responsive";

import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import {
	FaFacebook,
	FaWhatsapp,
	FaLinkedin,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa";

const Footer = (props) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<div style={{ backgroundColor: props.bgColor, color: "white" }}>
        <br/>
        <br/>
        <br/>
			<div style={{ margin: "auto", width: "90%" }}>
				{/*<Container>*/}
				<Row xs={1} md={1} lg={3}>
					<Col>
						<div
							style={{
								textAlign: isTabletOrMobile ? "center" : "left",
							}}
						>
							<h4>Never miss a thing</h4>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: isTabletOrMobile
										? "center"
										: "flex-start",
									textAlign: "center",
								}}
							>
								<input
									type="text"
									placeholder="Email Address"
									style={{
										width: "24vw",
										padding: 0,
										paddingLeft: 10,
										height: "4vh",
										borderRadius: 100,
										position: "relative",
										minWidth: 300,
									}}
								/>
								<p
									style={{
										backgroundColor: "#5DC6E8",
										paddingTop: "0.5vh",
										width: 100,
										height: "4vh",
										marginLeft: -90,
										zIndex: 1,
										borderRadius: 100,
									}}
								>
									Sign Up
								</p>
							</div>
							<h4>Be in touch</h4>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: isTabletOrMobile
										? "center"
										: "flex-start",
									color: "white",
								}}
							>
								<FaFacebook
									size={27}
									style={{ marginRight: 10 }}
								/>
								<FaWhatsapp
									size={27}
									style={{ marginRight: 10 }}
								/>
								<FaLinkedin
									size={27}
									style={{ marginRight: 10 }}
								/>
								<FaYoutube
									size={27}
									style={{ marginRight: 10 }}
								/>
								<FaInstagram
									size={27}
									style={{ marginRight: 10 }}
								/>
							</div>
						</div>
					</Col>
					<Col>
						<h4>Useful Links</h4>
						<Row
							style={{
								textAlign: isTabletOrMobile ? "center" : "left",
							}}
						>
							<Col>
								<h6>Services</h6>
								<h6>Blogs</h6>
								<h6>Tutorial</h6>
							</Col>
							<Col>
								<h6>Find Your Photographer</h6>
								<h6>Apply as a Free Lancer</h6>
								<h6>Sign up</h6>
							</Col>
						</Row>
					</Col>
					<Col>
						<div
							style={{
								textAlign: isTabletOrMobile ? "center" : "left",
							}}
						>
							<h4>Support</h4>
							<h6>Contact Us!</h6>
							<h6>FAQ</h6>
							<h6>Terms and Conditions</h6>
							<h6>Privacy Policy</h6>
						</div>
					</Col>
				</Row>
				<br/>
                <Container>
                    <h6>COPYRIGHT © 2019 FLIQAINDIA PVT. LTD. &nbsp;&nbsp;&nbsp;- ALL RIGHT RESERVED.</h6>
                    <h6>POWERED BY FLIQAINDIA PVT. LTD.</h6>
                    <h6>VERSION 5.0.0 </h6>
                </Container>
                <br/>
                <br/>
                <br/>
			</div>
		</div>
	);
};

export default Footer;
