import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  p {
    display: flex;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
  }

  span {
    color: ${colors.grey_2};
  }
  /* @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  } */
`
