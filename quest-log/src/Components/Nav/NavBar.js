import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
    return (
        <Navbar fixed="top"
        bg="light"
        className="justify-content-end"
        style={{height: 50}}>
                <Nav className="">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
        </Navbar>
    )   
}