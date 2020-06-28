import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: radial-gradient(
    circle,
    #d7d7d7,
    #d7d7d7 1px,
    var(--white) 0,
    var(--white)
  );
  background-size: 28px 28px;
  padding: 2vh 4vw 2vh;
  h3 {
    position: relative;
    font-size: 2.5rem;
    font-weight: 900;
    margin: 6vh 0 10vh;
    letter-spacing: -1px;
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

  @media (min-width: 765px) {
    padding: 2vh 8vw 2vh;
    margin-left: 8vw;
  }
`
