import styled, { keyframes } from "styled-components"

const mymove = keyframes`
  0% {
    bottom: 0;
    -webkit-transform:rotate3d(0, 0, 0, 0);
  }
  50% {
    bottom: 20px;
    -webkit-transform:rotate3d(0, 0, 0, 0);
  }
  100% {
    bottom: 0;
    -webkit-transform:rotate3d(0, 0, 0, 0);
  }
`

const titleRotation = keyframes`
  0% {
    transform: rotate3d(0, 0, 0, 0);
    -webkit-transform:rotate3d(0, 0, 0, 0);
  }
  33% {
    transform: rotate3d(0, 1, 0.1, 15deg);
    -webkit-transform:rotate3d(0, 0, 0, 0);
  }
  66% {
    transform: rotate3d(0, 1, 0.1, -15deg);
    -webkit-transform:rotate3d(0, 0, 0, 0);
  }
`

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
    217deg,
    var(--primary),
    var(--transparency) 72.71%
  );

  @media (min-width: 765px) {
    padding: 0 12vw;
    margin-left: 8vw;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;

  h1 {
    color: var(--white);
    font-size: 6rem;
    font-weight: 900;
    margin-bottom: 3vh;
    animation: ${titleRotation} 8s infinite;
    -webkit-animation-name: ${titleRotation};
    -webkit-animation-duration: 8s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
  }
  h2 {
    color: var(--white);
    margin-bottom: 5vh;
    text-align: center;
    font-weight: 400;
    font-size: 2rem;
  }
  .button {
    color: var(--white);
    width: 240px;
    min-width: 216px;
    border-radius: 25px;
    background-color: transparent;
    font-size: 1rem;
    border: 1px solid var(--gray);
    height: 50px;
    font-weight: 400;
    margin-top: 25px;
    padding: 0.6em 1em;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    align-self: center;
    transition: all 0.3s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border-color: var(--white);
      opacity: 0.8;
    }
  }
  .rocket {
    position: absolute;
    bottom: 0;
    font-size: 48px;
    color: #fff;
    transform: rotate(-45deg);
    animation: ${mymove} 2s infinite;
    -webkit-animation-name: ${mymove};
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
  }
`
