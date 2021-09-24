import React,{useEffect,useState} from 'react'

import{ Jumbotron, Card, CardDeck, Container, Button, Row, Col, Carousel, OverlayTrigger, Popover} from 'react-bootstrap';
import { Icon, InputAdornment } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase';
import firebaseConfig from '../../configs/firebase';

//Components
import ServiceItem from '../../components/serviceItem';

//Images
import lifeQuality from '../../assets/Images/quality-of-work-life-featured.png';
import transformation from '../../assets/Images/Transformatino.jpeg';
import Payment from '../../assets/Images/E-Payment-Transaction-Facilities-and-Their-Strengths-and-Weaknesses_Feature-Image.jpg';

import homeOffice from '../../assets/Images/Home office.jpg';
import minimalista from '../../assets/Images/Minimalista.jpeg';
import sofisticado from '../../assets/Images/Sofisticado.jpg';

import tshirtIcon from '../../assets/Images/t-shirt-icon.png';
import switchIcon from '../../assets/Images/switch-icon.png';
import paintBrushIcon from '../../assets/Images/paint-brush-icon.png';

import './style.css';

export default function Home(){

    /* Connection to firebase Storage*/        
        const storage = firebase.storage();
    /* Creating Firebase reference path*/    
        const storageRef = storage.ref();
    /* Creating Child reference */
        const images = storageRef.child('images');

    /* List all images inside images bucket */
    
    const history = useHistory();
    const [imageRef, setImageRef] = useState([]);

    useEffect(()=>{
        async function getListOfImages(){
        const result = await images.listAll();

        if(!result) console.log('No images were found!');

        let imageURL = result.items.map((image)=>image.getDownloadURL());

        return Promise.all(imageURL);
        }
        getListOfImages().then((res)=>{
            setImageRef(res);
        });
    },[]);
    
    function handleContactRequest(){
        history.push('/form');
    }

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
         <div className="services">
            <ServiceItem context='Organização de Roupas' imagePath={tshirtIcon}/>
            <ServiceItem context='Decoração de Interiores' imagePath={paintBrushIcon}/>
            <ServiceItem context='Instalação de Periféricos' imagePath={switchIcon}/>
         </div>
        <h2>Nosso portfólio</h2>
        <Carousel>
            {imageRef.map((image)=>(
                <Carousel.Item key={image}>
                    <img 
                    src={image} 
                    alt=''/>
                </Carousel.Item>
            ))
           }
        </Carousel>
        <Container className="contact-us" fluid>
            <Button variant="outline-none" type="submit" onClick={handleContactRequest}>Fale conosco</Button>
        </Container>
    </div>
    )
}