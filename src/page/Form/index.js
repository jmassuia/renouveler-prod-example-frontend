import React,{useState} from 'react';

import {Form, Col, Button, Spinner, Alert, OverlayTrigger,Popover} from 'react-bootstrap';

import {useHistory} from 'react-router-dom';

import './styles.css';

import api from '../../api';
import Quiz from '../../components/quiz';

export default function UserForm(){


    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [cpf,setCpf] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [alerts, setAlerts ] = useState(false);
    const [showQuiz,setShowQuiz] = useState(false);

    const history = useHistory();
    let {tag, color, favoritePlace, eventStyle} ='';


    function handleSubmit(e){
        e.preventDefault();       
       
        const day  = new Date().getDate();
        const year =  new Date().getFullYear();
        const month = new Date().getMonth() + 1; 

        const fullDate= String(day + '/' + month + '/' + year);

        const quizResult = localStorage.getItem('quizResult');

        if(quizResult!=null){
            const result = JSON.parse(quizResult);
            tag=result.tag;
            color=result.color;
            favoritePlace=result.favoritePlace;
            eventStyle=result.eventStyle;
        }

        const data={
            name,
            lastname,
            email,
            cpf,
            city,
            state,
            phone,
            fullDate,
            message,
            tag,
            color,
            favoritePlace,
            eventStyle
        }

        try{
            setLoading(true);
            api.post('/sendMail',data)
            .then(res =>{
                setLoading(false);
                history.push('/');
                console.log(res);
            }).catch(err =>{
                setLoading(false);
                setAlerts(true);
                console.log(err);
            });
            localStorage.clear();
        }
        catch{
            setAlerts(true);
            console.log("Something doesn't went well");
        }
    }
    const renderToolTip=(
        <Popover id="popover-basic" className="quizPopover">
            <Popover.Title as="h3">Sobre o quiz</Popover.Title>
            <Popover.Content>
                O Quiz server para que possamos identificar o seu perfil, conhecendo melhor os seus gostos
                e sua personalidade. Com isso, conseguiremos oferecer projetos de forma muito mais efetiva.
                
            </Popover.Content>
            <hr/>
            <p>* Atenção *: Após finalizar o quiz, clique no botão "enviar".</p>
        </Popover>
    );

    return(
        <div className="quiz">
            <Form className="form-quiz" id="top">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Insira seu nome..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control type="text" placeholder="Insira seu sobrenome..." 
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                    required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Insira seu e-mail..." 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required/>
                    </Form.Group>
                    <Form.Group as={Col} sm={4} controlId="formGridAddress1">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Insira seu CPF..." 
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                        required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" placeholder="Insira sua cidade..." 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        required/>
                    </Form.Group>
                    <Form.Group as={Col} sm={4} controlId="formGridState">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control type="text" as="select" 
                        value={state}
                        onChange={e => setState(e.target.value)}
                        required>
                            <option>...</option>
                            <option value={"AC"}>AC</option>
                            <option value={"AL"}>AL</option>
                            <option value={"AP"}>AP</option>
                            <option value={"AM"}>AM</option>
                            <option value={"BA"}>BA</option>
                            <option value={"CE"}>CE</option>
                            <option value={"DF"}>DF</option>
                            <option value={"ES"}>ES</option>
                            <option value={"GO"}>GO</option>
                            <option value={"MA"}>MA</option>
                            <option value={"MT"}>MT</option>
                            <option value={"MS"}>MS</option>
                            <option value={"MG"}>MG</option>
                            <option value={"PA"}>PA</option>
                            <option value={"PB"}>PB</option>
                            <option value={"PR"}>PR</option>
                            <option value={"PE"}>PE</option>
                            <option value={"PI"}>PI</option>
                            <option value={"RJ"}>RJ</option>
                            <option value={"RN"}>RN</option>
                            <option value={"RS"}>RS</option>
                            <option value={"RO"}>RO</option>
                            <option value={"RR"}>RR</option>
                            <option value={"SC"}>SC</option>
                            <option value={"SP"}>SP</option>
                            <option value={"SE"}>SE</option>
                            <option value={"TO"}>TO</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" placeholder="Insira um número..." 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control type="text" as="textarea" row="5" id="textarea"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    />
                </Form.Row>
                {showQuiz?<Quiz/>:null}
                <hr/>
                {loading ? <Spinner className="customized-spinner"animation="border"/> : null}
                <div className="buttonGroup">
                    <Button className="submitForm"variant="outline-none" type="submit" onClick={handleSubmit}>
                        Enviar
                    </Button>
                    <p>ou</p>
                    <OverlayTrigger trigger="hover" placement="right" overlay={renderToolTip}>
                        <a className="showQuiz" variant="outline-none" type="submit" onClick={()=>setShowQuiz(true)}>
                            Realizar quiz
                        </a>
                    </OverlayTrigger>
                </div>
            </Form>
            {alerts ? 
            <Alert className="alert-box"variant="" onClose={() => setAlerts(false)} dismissible>
                <h3>Algo não esperado aconteceu!</h3>
                <hr/>
                <p>
                    Houve um erro na sua requisição, tente novamente mais tarde, por gentilza.
                    Agradecemos pela sua compreensão
                </p>
            </Alert>:null}
        </div>
    )
}