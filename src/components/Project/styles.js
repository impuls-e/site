import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4vh 0 8vh;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`

export const Image = styled.div`
  width: 100%;
  .gatsby-image-wrapper {
    width: 100%;

    img {
      left: auto !important;
    }
  }
  @media (min-width: 768px) {
    width: 45%;
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  h4 {
    font-size: 1.8rem;
    text-align: center;
    color: var(--gray);
    font-weight: 900;
    margin: 0vh 0 4vh;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
    color: var(--gray);
    letter-spacing: -0.5px;
    margin-bottom: 4vh;
  }

  @media (min-width: 768px) {
    align-self: center;
    width: 50%;
  }
`

export const Techs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1vh;
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

      &:hover span::before {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`
export const Button = styled(Link)`
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

  &:hover {
    color: #fff;
    border-color: #707072;
    background-color: #707072;
  }
`
