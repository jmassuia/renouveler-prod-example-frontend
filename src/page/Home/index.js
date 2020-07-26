import React,{useState} from 'react'

import{ Jumbotron, Card, CardDeck, Container, Button, Row, Col, Carousel, OverlayTrigger, Popover} from 'react-bootstrap';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import { Icon } from '@material-ui/core';
import {useHistory} from 'react-router-dom';


import image from '../../assets/Images/Home office.jpg'


import lifeQuality from '../../assets/Images/Saúde.png';
import transformation from '../../assets/Images/Transformatino.jpeg';
import Payment from '../../assets/Images/E-Payment-Transaction-Facilities-and-Their-Strengths-and-Weaknesses_Feature-Image.jpg';

import homeOffice from '../../assets/Images/Home office.jpg';
import minimalista from '../../assets/Images/Minimalista.jpeg';
import sofisticado from '../../assets/Images/Sofisticado.jpg';

import values from '../../assets/Images/Values.png';
import mission from '../../assets/Images/Mission.png';
import vision from '../../assets/Images/Vision.png';

import './style.css';

export default function Home(){
    
    const history = useHistory();

    function handleContactRequest(){
        history.push('/form');
    }
    function handleTestRequest(){
        history.push('/form');
        
    }
    const valuesOver =(
        <Popover id="popover-basic" className="container-popover">
            <Popover.Title as="h3" className="popover-text">Valor</Popover.Title>
            <Popover.Content>
                Em nossa empresa sua experiência será atendida de forma essencial.
            </Popover.Content>
        </Popover>
    );
    const missionOver =(
        <Popover id="popover-basic" className="container-popover">
            <Popover.Title as="h3" className="popover-text">Missão</Popover.Title>
            <Popover.Content>
                Atender nossos clientes de forma única, oferecendo atendimento responsivo de qualidade.
            </Popover.Content>
        </Popover>
    );
    const visionOver =(
        <Popover id="popover-basic" className="container-popover">
            <Popover.Title as="h3" className="popover-text">Visão</Popover.Title>
            <Popover.Content>
                A Renouveler tem o alvo de crescimento nacional como referência em tendências e opções de decoração.
            </Popover.Content>
        </Popover>
    );

    return(
    <div className="page">  
        <Jumbotron fluid className="jumbotron">
                <div className="slogan">
                    <h1>Bem vindo!</h1>
                    <p>Arrumamos sua casa, realizamos seu sonho!!</p>
                    <Button className="button" variant="outline" size="lg" onClick={handleContactRequest} active>
                    Faça já seu orçamento
                    </Button>
                </div>
        </Jumbotron>
        <h2>Destaques</h2>
        <Icon className="star-icon">star</Icon>
        <CardDeck className="Card-Deck">
            <Card className="cards">
            <Card.Img variant="top" src={homeOffice} />
            <Card.Body className="cardBody">
                <Card.Title>Home Office</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="cardFooter">
                <a href="">
                    <ListOutlinedIcon/>
                    Detalhes
                </a>
                <Button className="button" onClick={handleContactRequest}>Solicitar um Orçamento</Button>
            </Card.Footer>
            </Card>
            <Card className="cards">
            <Card.Img variant="top" src={minimalista} />
            <Card.Body className="cardBody">
                <Card.Title>Minimalista</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="cardFooter">
                <a href="">
                    <ListOutlinedIcon/>
                    Detalhes
                </a>
                <Button className="button" onClick={handleContactRequest}>Solicitar um Orçamento</Button>
            </Card.Footer>
            </Card>
            <Card className="cards">
            <Card.Img variant="top" src={sofisticado} />
            <Card.Body className="cardBody">
                <Card.Title>Sofisticado</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="cardFooter">
                <a href="">
                    <ListOutlinedIcon/>
                    Detalhes
                </a>
                <Button className="button" onClick={handleContactRequest}>Solicitar um Orçamento</Button>
            </Card.Footer>
            </Card>
        </CardDeck>
        
        <h2>Muito <Icon className="plus-icon">add_circle</Icon></h2>
        <Container className="container-info" fluid>
            <Row className="Rows">
                <Col className="img-col" sm={6}>
                    <img src={transformation}/>
                </Col>
                <Col className="text-col">
                    <h3>Tecnologia</h3>
                    <p>A marca de nossa empresa em soluções inteligentes para sua construção,
                    arte, finalização e projetos com que á de melhor em automação e controle
                    </p>
                </Col>
            </Row>
            <Row className="Rows">
                <Col className="text-col" xs={12} sm={7}>
                    <h3>Qualidade de Vida</h3>
                        <p>Temos em nosso portfólio opções de projetos 100% sustentáveis,
                        voltados à saúde que promovem atividades físicas e sociais.</p>
                </Col>
                <Col className="img-col img-left">
                    <img src={lifeQuality}/>
                </Col>
            </Row>
            <Row className="Rows">
                <Col className="img-col">
                    <img src={Payment}/>
                </Col>
                <Col className="text-col">
                    <h3>Facilidade</h3>
                        <p>Nossa empresa tem como prioridade o relacionamento com nossos clientes
                        e a facilidade de pagamentos, entrada parcelada, boleto e descontos à
                        vista.</p>
                </Col>
            </Row>
        </Container>
        <h2 id="services">Serviços</h2>
        <Carousel className="carousel-container">
            <Carousel.Item className="carousel-item">
                    <img src={image} alt=""/>
                    <img src={image} alt=""/>
                    <img src={image} alt=""/>
                    <img src={image} alt=""/>
                    <img src={image} alt=""/>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                    <img src={image} alt=""/>
                    <img src={image} alt=""/>
                    <img src={image} alt=""/>
                    <img src={image} alt=""/>
                    <img src={image} alt=""/>
            </Carousel.Item>
        </Carousel>  
        <h2>Nossa empresa</h2>
        <Container className="company-information" fluid>
            <Row className="Rows">
                <Col className="about-us cols" xs={12} md={8}>
                    <p>Nossa empresa surgiu em 2019 com a ideia de organizar sua casa e cuidar de seus sonhos e projetos, valorizamos
                    muito sua oportunidade de conhecer nosso portfólio de forma essencial para um atendimento único, conosco terá
                    a opção de fazer escolhas de forma personalizada de acordo com as cores de seu ambiente em diversos estilos
                    clássico, arrojado, vintage, tecnológico e contemporâneo.</p>
                </Col>
                <Col className="ribbon cols" xs={6} md={4}>
                    <div className="img-group">
                        <OverlayTrigger trigger="hover" placement="top" overlay={valuesOver} className="ent-cicle">
                            <img src={values}/>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={missionOver} className="ent-cicle">
                            <img src={mission}/>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="hover" placement="top" overlay={visionOver} className="ent-cicle">
                            <img src={vision}/>
                        </OverlayTrigger>
                    </div>
                </Col>
            </Row>
            <Row className="our-team">
                <h5>Conheça nosso time</h5> 
                <Container className="team-container">
                    <Col className="cols">
                        <img src={image} alt=""/>
                        <div className="employee-content">
                            <h6>Nome:</h6>
                            <p>Profissao</p>
                        </div>
                    </Col>
                    <Col className="cols">
                        <img src={image} alt=""/>
                        <div className="employee-content">
                            <h6>Nome:</h6>
                            <p>Profissao</p>
                        </div>
                    </Col>
                    <Col className="cols">
                        
                        <img src={image} alt=""/>
                        <div className="employee-content">
                            <h6>Nome:</h6>
                            <p>Profissao</p>
                        </div>
                    </Col>
                </Container>
            </Row>
        </Container>
        <Container className="contact-us" fluid>
            <Button variant="outline-none" type="submit" onClick={handleContactRequest}>Fale conosco</Button>
        </Container>
    </div>
    )
}