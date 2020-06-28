import styled from "styled-components"

export const Container = styled.div`
  height: 25vh;
  padding: 0 4vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  background-color: #7557c7;
  h4 {
    font-size: 1.8rem;
    letter-spacing: -1px;
    color: var(--white);
    text-align: center;
    @media (min-width: 765px) {
      text-align: left;
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    width: 240px;
    min-width: 216px;
    border-radius: 25px;
    background-color: transparent;
    font-size: 1rem;
    border: 1px solid var(--white);
    height: 50px;
    font-weight: 400;
    padding: 0.6em 1em;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    align-self: center;
    transition: all 0.3s ease-in;

    &:hover {
      border-color: var(--primary);
      color: var(--primary);
      background-color: var(--white);
    }
  }
  @media (min-width: 765px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 12vw;
    margin-left: 8vw;
  }
`
