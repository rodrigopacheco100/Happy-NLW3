import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg'

import { Container } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Cascavel</strong>
          <span>Ceará</span>
        </div>

        <Link to="app">
          <FiArrowRight size={20} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </Container>
  );
}

export default Landing;