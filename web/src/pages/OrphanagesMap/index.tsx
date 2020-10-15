import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';

import { Container } from './styles';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :D</p>
        </header>

        <footer>
          <strong>Cascavel</strong>
          <span>Ceará</span>
        </footer>
      </aside>

      <div />

      <Link to="/" className="createOrphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
