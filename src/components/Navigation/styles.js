import styled from "styled-components"

import { AnchorLink } from "gatsby-plugin-anchor-links"

export const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), 0 0 9px 0 rgba(44, 43, 57, 0.16);
  background-color: var(--white);
  z-index: 2;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 8vw;
    height: 100vh;
  }
`
export const Hamburguer = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  pointer-events: visible;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 48px;
  height: 48px;
  margin-left: 4vw;
  align-items: center;

  div {
    width: 40px;
    border: 2px solid var(--gray);
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    transform: rotate(0);
  }

  &:hover div {
    border: 2px solid var(--primary) !important;
  }

  &.click div:nth-child(1) {
    transform: rotate(45deg) translate(9px, 8px);
    border: 2px solid var(--gray);
  }
  &.click div:nth-child(2) {
    opacity: 0;
    visibility: hidden;
  }
  &.click div:nth-child(3) {
    transform: rotate(-45deg) translate(10px, -10px);
    border: 2px solid var(--gray);
  }

  @media (min-width: 768px) {
    margin-top: 4vh;
    margin-left: 0;
  }
`

export const Logo = styled(AnchorLink)`
  margin-right: 4vw;
  font-size: 32px;
  color: var(--gray);
  transition: all 0.2s ease-in-out;
  display: flex;

  &:hover {
    color: var(--primary);
  }
  @media (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 4vh;
  }
`

export const HeaderMenu = styled.ul`
  visibility: hidden;
  opacity: 0;
  display: flex;
  position: absolute;
  background: var(--white);
  align-items: flex-end;
  padding: 0 4vw;
  height: 25vh;
  width: 100vw;
  transition: opacity 0.2s ease-out, visibility 0.2s ease-out,
    box-shadow 2s ease-in-out;
  z-index: -2;

  &.click {
    visibility: visible;
    opacity: 1;

    li a {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
      min-height: 48px;
      min-width: 48px;
    }
  }
  li {
    display: flex;
    align-items: center;
    height: 50px;
    margin: 1vh 3vw;
    border-radius: 0 5px 5px 0;

    a {
      position: relative;
      color: var(--gray);
      font-size: 1.5rem;
      outline: none;
      display: flex;
      text-decoration: none;
      transform: translateX(-10vw);
      visibility: hidden;
      opacity: 0;

      min-height: 48px;
      min-width: 48px;

      &:after {
        content: "";
        position: absolute;
        bottom: 1.5rem;
        left: 0;
        width: 55%;
        height: 2px;
        background-color: var(--gray);
        transition: all 0.4s ease-in-out;
      }
    }

    &:hover a {
      color: var(--primary);

      &:after {
        background-color: var(--primary);
      }
    }

    &:nth-child(1) a {
      transition: color 0.2s ease-in, visibility 0.4s ease-in-out,
        transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }

    &:nth-child(2) a {
      transition: color 0.2s ease-in, visibility 0.6s ease-in-out,
        transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    }
    &:nth-child(3) a {
      transition: color 0.2s ease-in, visibility 0.8s ease-in-out,
        transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
    }
    &:nth-child(4) a {
      transition: color 0.2s ease-in, visibility 0.8s ease-in-out,
        transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    padding: 18vh 0vw 18vh 3vw;
    margin-left: 4.5vw;
    align-items: flex-start;
    width: 16vw;
    height: 100vh;

    li {
      margin-left: 4vh;
      height: 50px;
      padding: 0;
      & a:after {
        bottom: 0.5rem;
      }
    }
  }
`
