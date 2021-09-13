import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  div {
    display: flex;
    align-items: center;
    width: 140px;
  }

  p {
    width: 100px;
    color: ${colors.white};
    font-weight: light;
    font-size: 24px;
  }

  span {
    color: ${colors.white};
    font-weight: bold;
  }

  /* @media (max-width: ${breakpoints.mobile}) {
    p {
      font-size: 16px;
    }
  } */
`
