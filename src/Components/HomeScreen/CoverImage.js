import React from 'react';
import "./CoverImage.css";
import {useMediaQuery} from 'react-responsive';
import {FaSearch} from 'react-icons/fa'

function CoverImage(props) {
    const isTabletOrMobileDevice =useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    return (
        <div>
            {
                isTabletOrMobileDevice ?
                    <div className="container-fluid" >
                        <img src="./assets/Carousel2.png" alt="Snow" style={{
                            width: "130%",
                            height: isPortrait?null:"650px",
                            minHeight:"350px",
                            marginLeft: "-40px",
                            marginTop:-10
                        }}/>
                        <div style={{
                            position: 'absolute',
                            top:"40%",
                            left:"5%",
                        }}><h1>Fliqaindia for<br/> <span style={{color: "#2559BD"}}>Photography</span></h1>
                        </div>
                    </div> :
                    <div className="container-fluid">
                        <img src="./assets/Carousel2.png" alt="Snow" style={{
                            width: "100vw",
                            height:window.innerWeight,
                            marginLeft: "-20px",
                            marginTop:-10,
                            maxHeight:window.innerHeight
                        }}/>
                        <div className="heading">Fliqaindia for <span style={{color: "#2559BD"}}>Photography</span>
                        </div>
                        <div className="Search">
                            <form>
                                <FaSearch size={27} color={"black"} style={{
                                    position: "absolute",
                                    top: "20%",
                                    left: "5%"
                                }}/>
                                <input type="text" placeholder="What are you looking for e.g. Wedding Photography?"/>
                            </form>
                        </div>
                        <div className="RowButtons">
                            <span className="ButtonHeading">Popular</span>
                            <a href="#Home" className="SideButtons">Logo Design</a>
                            <a href="#Home" className="SideButtons">Website Design</a>
                            <a href="#Home" className="SideButtons">Brochure</a>
                            <a href="#Home" className="SideButtons">Others</a>
                        </div>
                    </div>
            }
        </div>


    )
        ;
}

export default CoverImage;
