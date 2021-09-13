import css from 'styled-jsx/css'

import { breakpoints } from 'styles/theme'

export default css`
  p {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
  /* @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  } */
`
