import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  header {
    display: flex;
    align-items: center;
    max-width: 100%;
    width: 100%;
    height: 70px;
    background-color: ${colors.primary};
  }

  /* @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  } */
`
