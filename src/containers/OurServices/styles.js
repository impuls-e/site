import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);

  strong {
    color: var(--primary);
  }
  @media (min-width: 765px) {
    margin-left: 8vw;
  }
`
export const Description = styled.div`
  width: 100%;
  padding: 10vh 20vw 10vh;
  background-image: radial-gradient(
    circle,
    #d7d7d7,
    #d7d7d7 1px,
    var(--white) 0,
    var(--white)
  );
  background-size: 28px 28px;

  h3 {
    margin-top: 2vh;
    text-align: center;
    position: relative;
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 6;
    letter-spacing: 0;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      width: 90px;
      height: 4px;
      bottom: -20px;
      margin: auto;
      background: var(--primary);
    }
  }
`
export const Itens = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2vh 4vw 4vh;
  @media (min-width: 765px) {
    padding: 2vh 8vw 4vh;
  }
`
export const Item = styled.div`
  padding: 2vh 2vw 10vh;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  @media (min-width: 765px) {
    width: 33%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1vh;
    justify-content: center;
    list-style: none;
    li {
      margin: 1vw;
      position: relative;

      &:hover {
        opacity: 1;
        visibility: visible;

        span {
          opacity: 1;
          visibility: visible;
        }
      }
      div {
        width: 24px;
        height: 24px;
        @media (min-width: 765px) {
        }
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
        &:before {
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
    }
  }
  svg {
    align-self: center;
    max-width: 100px;
    max-height: 100px;
    margin-bottom: 2vh;
  }

  h4 {
    text-align: center;
    margin-bottom: 3vh;
    text-transform: uppercase;
    font-size: 2.2rem;
    font-weight: 900;
    letter-spacing: -1px;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: -0.5px;
  }
`
