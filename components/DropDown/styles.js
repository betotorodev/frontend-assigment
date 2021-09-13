import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  div {
    display: flex;
    align-items: center;
  }

  h5 {
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.tablet}) {
    div {
      display: none;
    }
  }
`
