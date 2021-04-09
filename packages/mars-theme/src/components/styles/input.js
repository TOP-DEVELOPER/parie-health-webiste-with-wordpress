import { styled } from "frontity";

const Input = styled.input`
  background: transparent;
  border-radius: 0;
  border: 0;
  box-shadow: none;
  display: block;
  font-size: 1.1rem;
  letter-spacing: -0.015em;
  max-width: 100%;
  padding: 0.5rem 0rem;
  width: 100%;
  text-align: center;
  outline: 0;
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

export default Input;
