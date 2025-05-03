import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;

  a {
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const ContainerHome = styled.a`
  background-color: #e75b16;
  border-radius: 5px;
  padding: 8px 15px;
  text-transform: uppercase;
  margin-top: 20px;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 170px;
  h1 {
    text-transform: uppercase;
    font-size: 52px;
    font-family: "Anton", sans-serif;

    span {
      color: #e75b16;
    }
  }

  p {
    font-family: sans-serif;

    @media(max-width: 375px) {
      text-align: center;
    }
  }
`;

export const Button = styled.a`
  background-color: #e75b16;
  padding: 15px;
  border-radius: 5px;
  width: 180px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 20px;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 200px;
`;
