import React from 'react';
import { useMediaQuery } from 'react-responsive'

import {Row, Col} from 'react-bootstrap';
import './Footer.css';

const Footer = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <div style={{backgroundColor: props.bgColor, color: "white"}}>
            <div style={{margin: "auto", width: "90%"}}>
                {/*<Container>*/}
                <Row xs={1} md={1} lg={3}>
                    <Col>1 of 3</Col>
                    <Col>
                        <h4>Useful Links</h4>
                        <Row style={{
                            textAlign: isTabletOrMobile?"center":"left",
                        }}>
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
                        <div style={{
                            textAlign: isTabletOrMobile?"center":"left",
                        }}>
                            <h4>Support</h4>
                            <h6>Contact Us!</h6>
                            <h6>FAQ</h6>
                            <h6>Terms and Conditions</h6>
                            <h6>Privacy Policy</h6>
                        </div>
                    </Col>
                </Row>
                {/*</Container>*/}
            </div>
        </div>
    );
};

export default Footer;
