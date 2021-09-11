import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  section {
    padding: 20px;
    margin-top: 15px;
    border-radius: 15px;
    background-color: ${colors.white};
  }

  /* @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  } */
`
