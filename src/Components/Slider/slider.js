import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "#6e6c6c" }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "#6e6c6c" }}
			onClick={onClick}
		/>
	);
}

export default class Responsive extends Component {
	constructor(props) {
		super(props);
		this.state = {
			center: this.props.center,
		};
	}

	render() {
		const settings = {
			dots: false,
			infinite: !!this.state.center,
			speed: 500,
			slidesToShow: this.state.center ? 3 : 5,
			slidesToScroll: this.state.center ? 2 : 2,
			initialSlide: 0,
			arrows: true,
			centerMode: this.state.center,
			className: this.state.center ? "center" : "slides",
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<div style={{ width: "100%",height:this.props.Height, backgroundColor: this.props.bgColor }}>
				<h2>{this.props.title}</h2>
				<br />
				{this.props.textTile ? (
					<div style={{ width: this.props.Width, margin: "auto" }}>
						<Slider {...settings}>
							{this.props.imgs.map((item, idx) => {
								return (
									<div>
										<img
											className="centered"
											src={item.img}
											alt="Images"
                                            style={{
                                                width: this.props.imgWidth,
                                                height:this.props.imgHeight
                                            }}
										/>
										<p>{item.title}</p>
									</div>
								);
							})}
						</Slider>
					</div>
				) : (
					<Slider {...settings}>
						{this.props.imgs.map((item, idx) => {
							return (
								<div>
									<img src={item} alt="Images" />
								</div>
							);
						})}
					</Slider>
				)}
			</div>
		);
	}
}
