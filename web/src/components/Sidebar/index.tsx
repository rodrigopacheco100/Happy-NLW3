import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

import mapMarkerImg from '../../images/map-marker.svg';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <aside>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    </Container>
  );
};

export default Sidebar;
