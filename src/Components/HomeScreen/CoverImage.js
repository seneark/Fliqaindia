import React from 'react';
import "./CoverImage.css";
import {useMediaQuery} from 'react-responsive';
import {FaSearch} from 'react-icons/fa'

function CoverImage(props) {
    const isPortrait = useMediaQuery({query: '(orientation: portrait)'});

    return (
        <div>
            {
                isPortrait ?
                    <div className="container-fluid" >
                        <img src="./assets/Carousel2.png" alt="Snow" style={{
                            width: "130%",
                            height: "350px",
                            marginLeft: "-40px"
                        }}/>
                        <div style={{
                            position: 'absolute',
                            top:"40%",
                            left:"5%",
                            fontWeight:'bold'
                        }}>Fliqaindia for<br/> <span style={{color: "#2559BD"}}>Photography</span>
                        </div>
                    </div> :
                    <div className="container-fluid">
                        <img src="./assets/Carousel2.png" alt="Snow" style={{
                            width: "100vw",
                            height: window.innerWidth < 1235 ? 700 : window.innerHeight,
                            marginLeft: "-15px"
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
                            <a className="SideButtons">Logo Design</a>
                            <a className="SideButtons">Website Design</a>
                            <a className="SideButtons">Brochure</a>
                            <a className="SideButtons">Others</a>
                        </div>
                    </div>
            }
        </div>


    )
        ;
}

export default CoverImage;
