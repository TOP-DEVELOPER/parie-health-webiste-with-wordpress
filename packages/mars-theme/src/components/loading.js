import React from "react";
import { styled, keyframes, css } from "frontity";
import Balls from "../../img/balls.svg";

const Loading = () => (
  <Container>
    <img src={Balls} alt="Balls" style={{ width: '48px', height: '48px'}}/>
  </Container>
);

export default Loading;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 89px;
    margin-bottom: 96px;
  }
`;
