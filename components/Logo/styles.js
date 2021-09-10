import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  div {
    display: flex;
    align-items: center;
  }

  p {
    color: ${colors.white};
    font-weight: light;
    font-size: 24px;
  }

  span {
    color: ${colors.white};
    font-weight: bold;
  }

  /* @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  } */
`
