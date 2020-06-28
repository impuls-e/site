import styled, { keyframes } from "styled-components"
import BackgroundImage from "gatsby-background-image"

const zoomInOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const Background = styled(BackgroundImage)`
  width: 100vw;
  height: 100vh;
  position: fixed !important;
  animation: ${zoomInOut} 10s infinite;
  z-index: -1;

  &::before {
    background-position: right;
  }
`
