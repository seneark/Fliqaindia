import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import {
	FaFacebook,
	FaWhatsapp,
	FaLinkedin,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa";

const NavBar = (props) => {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#D0E1FA'}}>
                    <Navbar.Brand href="#home">Fliqaindia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            {props.Tabs.map( (items, idx) => {
                                return (
                                    <Nav.Link key={idx} href={items.link} style={{
                                        marginLeft:10
                                    }}>{items.name}</Nav.Link>
                                )
                            })}
                        </Nav>
                        <Nav>
                            <Nav.Link>
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
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
}

export default NavBar;
