import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    width: 100%;
    height: 70px;
    padding: 0 40px;
    background-color: ${colors.primary};
  }

  section {
    display: flex;
  }

  .search-container {
    margin: 0 50px;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
  }

  /* @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  } */
`
