import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15vh 5vw 0;
  box-sizing: border-box;
  background-image: radial-gradient(
    circle,
    #d7d7d7,
    #d7d7d7 1px,
    var(--white) 0,
    var(--white)
  );
  background-size: 28px 28px;

  @media (min-width: 768px) {
    padding: 15vh 8vw 0;

    margin-left: 8vw;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 6rem;
    text-align: center;
    color: var(--gray);
    margin-bottom: 4vh;
  }
  p {
    line-height: 32px;
    font-size: 1.4rem;
    color: var(--gray);
    font-weight: 400;
    text-align: center;
    margin-bottom: 4vh;
  }
  a {
    color: #00000096;
    width: 240px;
    min-width: 216px;
    border-radius: 25px;
    background-color: white;
    font-size: 1rem;
    border: 1px solid #9a9a9a;
    height: 50px;
    font-weight: 400;
    padding: 0.6em 1em;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.3s, border 0.3s, background 0.3s, box-shadow 0.3s,
      opacity 0.3s, color 0.3s;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      color: #fff;
      border-color: #707072;
      background-color: #707072;
    }
    svg {
      margin-left: 1vw;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6vh;
  h4 {
    display: flex;
    flex-direction: column;
    margin: 8vh 0 0;
    text-align: center;
    font-size: 2.3rem;
  }
  @media (min-width: 768px) {
    margin-bottom: 10vh;
  }
`

export const Mockups = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  img {
    width: 80vw;
    max-width: 500px;
    padding: 2vh;
  }
`

export const Techs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 4vh 0 8vh;
  justify-content: center;
  list-style: none;
  li {
    margin: 1vw;
    position: relative;

    img {
      width: 24px;
      height: 24px;
    }
    span {
      width: max-content;
      background: var(--gray);
      padding: 8px;
      border-radius: 4px;
      color: var(--white);
      font-size: 0.8rem;
      font-weight: 400;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s ease-in-out;
      position: absolute;
      bottom: calc(100% + 12px);
      left: 50%;
      transform: translateX(-50%);
      &::before {
        content: "";
        border-style: solid;
        border-color: var(--gray) transparent;
        border-width: 6px 6px 0 6px;
        top: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.2s ease-in-out;
        opacity: 0;
        visibility: hidden;
      }
    }

    &:hover span {
      opacity: 1;
      visibility: visible;

      &::before {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`
