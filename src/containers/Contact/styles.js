import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  background-color: var(--black);
  color: var(--white);
  @media (min-width: 765px) {
    margin-left: 8vw;
  }
`

export const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--white);

  .map {
    width: 100%;
    height: 80vh;

    @media (min-width: 1024px) {
      width: 50%;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-size: 28px 28px;
  padding: 4vw;

  .gatsby-image-wrapper {
    width: 200px;
    height: 80px;
    margin-bottom: 8vh;
  }
  h4 {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 6vh;
  }
  div {
    display: flex;
    flex-direction: column;
    a {
      justify-content: center;
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      text-decoration: none;
      margin-bottom: 6vh;
      color: var(--white);

      svg {
        margin-right: 0.5vw;
      }
    }
    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }
  .button {
    color: var(--white);
    width: 240px;
    min-width: 216px;
    border-radius: 25px;
    background-color: transparent;
    font-size: 1rem;
    border: 1px solid var(--primary);
    height: 50px;
    font-weight: 400;
    padding: 0.6em 1em;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in;
    &:hover {
      border-color: var(--white);
      color: var(--white);
      background-color: var(--gray);
    }
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`

export const Footer = styled.section`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), 0 0 9px 0 rgba(44, 43, 57, 0.16);
  padding: 0 4vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  div {
    display: flex;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      min-width: 48px;
      min-height: 48px;
      color: var(--white);

      cursor: pointer;
      &:hover {
        transition: all 0.2s ease-in-out;
        color: var(--primary);
      }
    }
  }

  ul {
    display: flex;
    margin-bottom: 2vh;
    list-style: none;
    li a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 2vw;
      text-decoration: none;
      font-size: 1.3rem;
      min-width: 48px;
      min-height: 48px;
      color: var(--white);

      &:hover {
        transition: all 0.2s ease-in-out;
        color: var(--primary);
      }
    }
  }

  @media (min-width: 765px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
