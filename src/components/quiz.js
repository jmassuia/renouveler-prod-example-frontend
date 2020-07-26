import React, { useState } from 'react'


import icon from '.././assets/Images/img-icon.png';
import {Form, Col, Button,Container} from 'react-bootstrap';
import { SliderPicker } from 'react-color';
import Emoji from 'react-emoji-render';

import classic from '.././assets/Images/classic.jpg';
import modern from '.././assets/Images/modern.jpg';
import rustic from '.././assets/Images/rustic.jpg';
import minimalist from '.././assets/Images/minimalist.jpeg';
import sustainable from '.././assets/Images/sustainable.jpg';


import './quiz.css';
export default function Quiz(){

    const [image,setImage] = useState(icon);
    const [tag,setTag] = useState('');
    const [color,setColor] = useState('');
    const [favoritePlace,setFavoritePlace] = useState('');
    const [eventStyle, setEventStyle] = useState('');

    const handleSubmit = () =>{
        const quizResult ={
            tag: tag,
            color: color.hex,
            favoritePlace: favoritePlace,
            eventStyle: eventStyle 
        }
        /* To store objects in localStorage is required to serialize it as JSON structure*/
        localStorage.setItem('quizResult',JSON.stringify(quizResult));
    }
    const handleChange =(color) =>{
        setColor(color);
    }

    return(
        <Form className="quiz">
            <Form.Row>
                <Form.Group>
                <Form.Label>Qual das TAGs mais representa seu estilo?</Form.Label>
                    <Container className="default-container">
                        <Button className="default-button" variant="outline-none"
                          onClick={() => {setTag('Clássico'); setImage(classic);}}>#Clássico</Button>
                        <Button className="default-button" variant="outline-none"
                          onClick={() => {setTag('Moderno'); setImage(modern)}}>#Moderno</Button>
                        <Button className="default-button" variant="outline-none"
                          onClick={() => {setTag('Rústico'); setImage(rustic)}}>#Rústico</Button>
                        <Button className="default-button" variant="outline-none"
                          onClick={() => {setTag('Minimalista'); setImage(minimalist)}}>#Minimalista</Button>
                        <Button className="default-button" variant="outline-none"
                          onClick={() => {setTag('Sustentável'); setImage(sustainable)}}>#Sustentável</Button>
                    </Container>
                    <Container className="img-container">
                        <img src={image} alt="tag-img"/>
                    </Container>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group>
                    <Form.Label>Qual é o seu ambiente favorito na sua casa?</Form.Label>
                    <Container className="default-container">
                        <Button className="default-button" variant="outline-none"
                          onClick={()=>setFavoritePlace('Cozinha')}
                        >Cozinha</Button>
                        <Button className="default-button" variant="outline-none"
                          onClick={()=>setFavoritePlace('Quarto')}
                        >Quarto</Button>
                        <Button className="default-button" variant="outline-none"
                          onClick={()=>setFavoritePlace('Sala')}
                        >Sala</Button>
                        <Button className="default-button" variant="outline-none"
                          onClick={()=>setFavoritePlace('Jardim')}
                        >Jardim</Button>
                        <Button className="default-button" variant="outline-none"
                          onClick={()=>setFavoritePlace('Banheiro')}
                        >Banheiro</Button>
                    </Container>
                </Form.Group>
            </Form.Row>
            <Form.Label>Qual é sua cor favorita? </Form.Label>
            <SliderPicker color={color} onChangeComplete={handleChange}/>
            <Form.Row>
                <Form.Group>
                    <Form.Label>Qual das TAGs de evento você mais se identifica?</Form.Label>
                    <Container className="default-container">
                            <Button className="default-button" variant="outline-none"
                             onClick={() =>setEventStyle('Balada_e/ou_Festivais músicais')}
                            >#Balada_e/ou_Festivais músicais
                                <Emoji text=":dancer:"/>
                            </Button>
                            <Button className="default-button" variant="outline-none"
                             onClick={() =>setEventStyle('Eventos_de_Games')}
                            >#Eventos_de_Games
                                <Emoji text=":video_game:"/>
                            </Button>
                            <Button className="default-button" variant="outline-none"
                             onClick={() =>setEventStyle('Festivais_de_Grastronomia')}
                            >#Festivais_de_Grastronomia
                                <Emoji text=":spaghetti:"/>
                            </Button>
                            <Button className="default-button" variant="outline-none"
                             onClick={() =>setEventStyle('Barres_e/ou_Churrascarias')}
                            >#Barres_e/ou_Churrascarias
                            <Emoji text=":beers:"/>
                            </Button>
                            <Button className="default-button" variant="outline-none"
                             onClick={() =>setEventStyle('Passeios_em_fámilia')}
                            >#Passeios_em_fámilia
                            <Emoji text=":family:"/></Button>
                            <Button className="default-button" variant="outline-none"
                             onClick={() =>setEventStyle('Viagens')}
                            >#Viagens
                            <Emoji text=":airplane:"/>
                            </Button>
                            <Button className="default-button" variant="outline-none"
                             onClick={() =>setEventStyle('Reservado')}
                            >#Reservado
                            <Emoji text=":round_pushpin:"/>
                            </Button>
                    </Container>
                </Form.Group>
            </Form.Row>
            <Button type='button' className="confirm-button" variant={'outline-none'} onClick={handleSubmit}>Confirmar</Button>
        </Form>
    )   
}