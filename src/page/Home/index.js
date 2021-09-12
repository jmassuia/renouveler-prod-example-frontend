import React,{useEffect,useState} from 'react'

import{ Jumbotron, Card, CardDeck, Container, Button, Row, Col, Carousel, OverlayTrigger, Popover} from 'react-bootstrap';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import { Icon } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase';
import firebaseConfig from '../../configs/firebase';

import image from '../../assets/Images/Home office.jpg'


import lifeQuality from '../../assets/Images/quality-of-work-life-featured.png';
import transformation from '../../assets/Images/Transformatino.jpeg';
import Payment from '../../assets/Images/E-Payment-Transaction-Facilities-and-Their-Strengths-and-Weaknesses_Feature-Image.jpg';

import homeOffice from '../../assets/Images/Home office.jpg';
import minimalista from '../../assets/Images/Minimalista.jpeg';
import sofisticado from '../../assets/Images/Sofisticado.jpg';

import values from '../../assets/Images/Values.png';
import mission from '../../assets/Images/Mission.png';
import vision from '../../assets/Images/Vision.png';

import image1 from '../../assets/Images/image (2).png';
import image2 from '../../assets/Images/image (3).png';
import image3 from '../../assets/Images/image (4).png';
import image4 from '../../assets/Images/image (5).png';
import image5 from '../../assets/Images/image (6).png';
import image6 from '../../assets/Images/image (7).png';
import image7 from '../../assets/Images/image (8).png';
import image8 from '../../assets/Images/image (9).png';
import image9 from '../../assets/Images/image (10).png';
import image10 from '../../assets/Images/image (11).png';
import image11 from '../../assets/Images/image (12).png';
import image12 from '../../assets/Images/image (13).png';


import './style.css';

export default function Home(){

    /* Connection to firebase Storage*/        
        const storage = firebase.storage();
    /* Creating Firebase reference path*/    
        const storageRef = storage.ref();
    /* Creating Child reference */
        const images = storageRef.child('images');
    /* List all images inside images bucket */

    const [imageArray,setImageArray] = useState([]);

    useEffect(()=>{

        function handleImageList(){
            images.listAll()
                .then(res =>{
                    handleImageURL(res.items); 
                }).catch(error =>{
                    return error;
                });
            
        }
        function handleImageURL(imageList){
          imageList.map(image => {
               image.getDownloadURL()
                .then(url =>{
                    imageArray.push(url);
                }).catch(error => {return error});
            });
        }
        handleImageList();
    },[])
    
    const history = useHistory();

    function handleContactRequest(){
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
                    Opções com muito estilo e sofisticação para seu escritório em sua casa, de acordo 
                    com sua necessidade, seja ela compacta ou arrojada! “Nossa missão e trazer a melhor
                    experiência em arte e design de acordo com seu sonho”
                </Card.Text>
            </Card.Body>
            <Card.Footer className="cardFooter">
                <Button className="button" onClick={handleContactRequest}>Solicitar um Orçamento</Button>
            </Card.Footer>
            </Card>
            <Card className="cards">
            <Card.Img variant="top" src={minimalista} />
            <Card.Body className="cardBody">
                <Card.Title>Minimalista</Card.Title>
                <Card.Text>
                    Ambientes com toque clássico e com mínimo, criando maior espaço entre cores,
                    panorama e detalhes e fazendo a harmonia entre a decoração e transparência. Sua 
                    experiência com certeza será única ao vislumbrar nosso portfólio de detalhes.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="cardFooter">
                <Button className="button" onClick={handleContactRequest}>Solicitar um Orçamento</Button>
            </Card.Footer>
            </Card>
            <Card className="cards">
            <Card.Img variant="top" src={sofisticado} />
            <Card.Body className="cardBody">
                <Card.Title>Sofisticado</Card.Title>
                <Card.Text>
                    Cozinhas e ambientes sofisticados de acordo com sua escolha através do projeto; seja ele rústico, 
                    vintage, clássico, contemporâneo ou tecnológico. “Opções em plafons em led, interruptores 
                    digitais e muito +”.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="cardFooter">
                <Button className="button" onClick={handleContactRequest}>Solicitar um Orçamento</Button>
            </Card.Footer>
            </Card>
        </CardDeck>
        
        <h2>Muito <Icon className="plus-icon">add_circle</Icon></h2>
        <div className="diagonal-container">
            <div className="diagonal-box">
                <div className="content">
                    <h3>Tecnologia</h3>
                    <p>A marca de nossa empresa em soluções inteligentes para sua construção,
                    arte, finalização e projetos com que á de melhor em automação e controle
                    </p>
                </div>
                <div className="image">
                    <img src={transformation} alt=""/>
                </div>
            </div>
        </div>
        <div className="diagonal-container">
            <div className="diagonal-box">
                <div className="image">
                    <img src={lifeQuality} alt=""/>
                </div>
                <div className="content">
                    <h3>Qualidade de Vida</h3>
                    <p>Temos em nosso portfólio opções de projetos 100% sustentáveis,
                        voltados à saúde que promovem atividades físicas e sociais.
                    </p>
                </div>
            </div>
        </div>
        <div className="diagonal-container">
            <div className="diagonal-box">
                <div className="content">
                    <h3>Facilidade</h3>
                    <p>Nossa empresa tem como prioridade o relacionamento com nossos clientes
                        e a facilidade de pagamentos, entrada parcelada, boleto e descontos à
                        vista.
                    </p>
                </div>
                <div className="image">
                    <img src={Payment} alt=""/>
                </div>
            </div>
        </div>
        <h2 id="services">Serviços</h2>
        <Carousel className="carousel-container">
            <Carousel.Item className="carousel-item">
                <div className="items">
                    <div className="image-container">
                        <img src={image1} alt=""/>
                    </div>
                    <div className="image-container">
                        <img src={image2} alt=""/>
                    </div>
                    <div className="image-container">
                        <img src={image3} alt=""/>
                    </div>
                    <div className="image-container">
                        <img src={image4} alt=""/>
                    </div>
                    <div className="image-container">
                        <img src={image5} alt=""/>
                    </div>    
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="items">
                    <div className="image-container">
                        <img src={image6} alt=""/>
                    </div>
                    <div className="image-container">
                        <img src={image7} alt=""/>
                    </div>
                    <div className="image-container">
                        <img src={image8} alt=""/>
                    </div>
                    <div className="image-container">
                        <img src={image9} alt=""/>
                    </div>
                    <div className="image-container">
                        <img src={image10} alt=""/>
                    </div>    
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="items">
                    <div className="image-container">
                        <img src={image11}/>
                    </div>
                    <div className="image-container">
                        <img src={image12}/>
                    </div>
                </div>
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
                <Col className="ribbon cols" md={4}>
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
        </Container>
        <Container className="contact-us" fluid>
            <Button variant="outline-none" type="submit" onClick={handleContactRequest}>Fale conosco</Button>
        </Container>
    </div>
    )
}