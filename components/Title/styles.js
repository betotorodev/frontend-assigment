import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  .title-container {
    display: flex;
    margin: 35px 0;
  }

  section {
    width: 50%;
    padding-left: 30px;
  }

  button {
    margin: 15px 0;
    padding: 8px 20px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: none;
    color: ${colors.white};
    background-color: ${colors.secondary};
    outline: none;
    cursor: pointer;
  }

  h1 {
    font-size: 24px;
  }

  ul {
    display: flex;
  }

  li {
    padding: 4px;
    margin-right: 15px;
    color: ${colors.primary};
    background-color: ${colors.grey_3};
  }

  @media (max-width: ${breakpoints.mobile}) {
    .title-container {
      flex-direction: column;
    }

    section {
      width: 100%;
      padding: 0;
    }
  }
`
