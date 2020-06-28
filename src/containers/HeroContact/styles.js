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
    padding: 0 8vw;
    margin-left: 8vw;
    justify-content: space-between;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 3.5rem;
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
      &:hover {
        color: #fff;
        border-color: #707072;
        background-color: #707072;
      }
      svg {
        margin-left: 1vw;
      }
    }
    @media (min-width: 768px) {
      position: relative;
      z-index: 1;
      width: 65%;
      justify-content: center;
    }
  }
  aside {
    display: none;

    @media (min-width: 768px) {
      width: 30%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (min-width: 768px) {
    height: 80vh;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Form = styled.form`
  margin: 0 0 5vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;

  h3 {
    position: relative;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 900;
    margin: 10vh 0 10vh;
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
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 4vh;
      font-size: 1.2rem;

      input {
        margin-top: 1vh;
        display: block;
        width: 100%;
        height: calc(2em + 0.75rem + 2px);
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 2;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        -webkit-transition: border-color 0.05s ease-in, box-shadow 0.05s ease-in;
        transition: border-color 0.05s ease-in, box-shadow 0s ease-in;

        &:focus {
          color: #495057;
          background-color: #fff;
          border-color: #646282;
          outline: 0;
          box-shadow: 0 0 0 0.2rem rgba(44, 43, 57, 0.25);
        }
      }
      textarea {
        margin-top: 1vh;
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 2;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        -webkit-transition: border-color 0.05s ease-in-out,
          box-shadow 0.05s ease-in-out;
        transition: border-color 0.05s ease-in-out, box-shadow 0.05s ease-in-out;

        &:focus {
          color: #495057;
          background-color: #fff;
          border-color: #646282;
          outline: 0;
          box-shadow: 0 0 0 0.2rem rgba(44, 43, 57, 0.25);
        }
      }
    }
    @media (min-width: 768px) {
      position: relative;
      z-index: 1;
      width: 65%;
      justify-content: center;
    }
  }
  button {
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
    align-self: center;
    align-items: center;
    justify-content: center;
    &:hover {
      color: #fff;
      border-color: #707072;
      background-color: #707072;
    }
  }
  @media (min-width: 768px) {
    align-items: center;
  }
`
