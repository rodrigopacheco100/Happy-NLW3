import styled from 'styled-components';
import landingImg from '../../images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  .content-wrapper {
    position: relative;

    width: 100%;
    max-width: 1100px;

    height: 100%;
    max-height: 680px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    background: url(${landingImg}) no-repeat 80% center;

    @media (max-width: 970px) {
      background-size: 50%;
      background-position: 80% 10%;
    }

    main {
      max-width: 350px;
      h1 {
        font-size: 76px;
        font-weight: 900;
        line-height: 70px;
      }

      p {
        margin-top: 40px;
        font-size: 24px;
        line-height: 34px;
      }
    }

    .location {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      font-size: 24px;
      line-height: 34px;

      strong {
        font-weight: 800;
      }
    }

    a {
      position: absolute;
      bottom: 0;
      right: 0;

      width: 80px;
      height: 80px;
      background: #ffd666;
      border-radius: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color 0.2s;

      &:hover {
        background: #96feff;
      }
    }
  }
`;
