import React from 'react'

import facebookIcon from '../assets/Images/Facebook_icon.png';
import InstagramIcon from '../assets/Images/Instagram_icon.png';

import{Row, Col} from 'react-bootstrap';


export default function Footer(){
    return(
        <div className="footer">
            <Row className="contacts-compliance">
                <Col className="contacts">
                    <h4>Contatos</h4>
                    <p><strong>Telefone:</strong> (19) 99661-0322</p>
                    <p><strong>E-mail:</strong> renouvelerDesign@gmail.com</p>
                </Col>
                <Col className="social-media">
                    <a href="https://www.facebook.com/Renouveler.Design/" target="_blank">
                        <img src={facebookIcon} alt=""/>
                    </a>
                    <a href="https://www.instagram.com/renouveler_design/" target="_blank">
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
    )
}