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
  }

  span {
    opacity: 0.5;
  }

  /* @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  } */
`
