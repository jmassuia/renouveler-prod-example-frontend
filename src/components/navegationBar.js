import React from 'react';

import{Navbar, Nav} from 'react-bootstrap';
import logo from '../assets/Logo-Renouveler---2.png';

export default function NavegationBar(){
    return(
    <div>
        <Navbar id="navbar"collapseOnSelect expand="lg" variant="">
            <Navbar.Brand className="navbar-brand-tab" href="/#home">
            <img src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="navlink" href="/">Home</Nav.Link>
                <Nav.Link className="navlink" href="/#services">Serviços</Nav.Link>
                <Nav.Link className="navlink" href="/form">Orçamentos</Nav.Link>
                <Nav.Link className="navlink" href="/#footer">Contatos</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
}