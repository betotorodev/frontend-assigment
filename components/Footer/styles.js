import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  div {
    margin: 0;
    width: 100%;
  }
  footer {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 0 40px;
    background-color: ${colors.primary};
  }

  nav {
    display: flex;
    align-items: center;
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li {
    color: ${colors.white};
    cursor: pointer;
  }

  span {
    opacity: 0.5;
  }

  @media (max-width: ${breakpoints.tablet}) {
    footer {
      height: auto;
    }

    ul {
      flex-direction: column;
    }

    li {
      font-size: 12px;
      margin: 10px 0;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    li {
      font-size: 12px;
    }
  }
`
