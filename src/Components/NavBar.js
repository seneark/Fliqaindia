import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = (props) => {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#D0E1FA'}}>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
}

export default NavBar;
