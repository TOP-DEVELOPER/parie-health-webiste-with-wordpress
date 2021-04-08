import { styled, keyframes, css } from "frontity";
import Balls from "../../img/balls.svg";

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

const Loading = () => (
  <Container>
    <img src={Balls} alt="Balls" style={{ width: '48px', height: '48px'}}/>
  </Container>
);

export default Loading;

const bar = (index) => css`
  background-color: rgba(12, 17, 43, 0.3);
  width: 4px;
  height: 24px;
  margin: 3px;
  border-radius: 0;
  display: inline-block;
  animation: ${scale} 1s ${index * 0.1}s infinite
    cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-fill-mode: both;
`;

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
