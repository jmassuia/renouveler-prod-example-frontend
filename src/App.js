import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import{Navbar, Nav, Row, Col} from 'react-bootstrap';

import facebookIcon from './assets/Images/Facebook_icon.png';
import InstagramIcon from './assets/Images/Instagram_icon.png';

import './global.css';

import NavegationBar from '../src/components/navegationBar';
import Footer from '../src/components/footer';

function App() {
  return (
  <main>
    <NavegationBar/>
    <Routes/>
    <Footer/>
  </main>
  );
}

export default App;
