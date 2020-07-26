import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import{Navbar, Nav, Row, Col} from 'react-bootstrap';

import facebookIcon from './assets/Images/Facebook_icon.png';
import InstagramIcon from './assets/Images/Instagram_icon.png';
import logo from './assets/Brand.png';
import './global.css';

function App() {
  return (
  <main>
    <Navbar id="navbar"collapseOnSelect expand="lg" variant="">
            <Navbar.Brand href="/#home">
            <img src={logo} width="150" height="50">
            </img>
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
    <Routes/>
    <div className="footer">
            <Row className="contacts-compliance">
                <Col className="contacts">
                    <h4>Contatos</h4>
                    <p><strong>Telefone:</strong> (19) 33222442</p>
                    <p><strong>E-mail:</strong> renouvelerDesign@gmail.com</p>
                </Col>
                <Col className="social-media">
                    <a href="">
                        <img src={facebookIcon} alt=""/>
                    </a>
                    <a href="">
                        <img src={InstagramIcon} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            <Row className="compliance-container">
                <p>©Todos os direitor Reservados - Renouveler</p>
                <p>Consultoria&Cia MEI - CNPJ 34.322.664/0001-99</p>
            </Row>
    </div>
  </main>
  );
}

export default App;
