import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  div {
    display: flex;
    padding: 0 10px;
  }

  button {
    height: 40px;
    width: 40px;
    padding: 4px 3px;
    margin-right: 2px;
    border: none;
    background-color: ${colors.white};
    border-top-left-radius: 20px;
    outline: none;
    cursor: pointer;
  }

  input {
    height: 40px;
    width: 400px;
    padding: 0 8px;
    border: none;
    font-size: 16px;
    background-color: ${colors.white};
    border-bottom-right-radius: 20px;
    outline: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    input {
      max-width: 400px;
      width: 100%;
    }
  }
`
