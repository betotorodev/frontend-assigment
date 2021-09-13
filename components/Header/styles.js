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
    align-items: center;
  }

  .search-container {
    margin: 0 50px;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
  }

  .menu {
    display: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    section {
      width: 100%;
      justify-content: space-between;
    }
    .search-container {
      max-width: 400px;
      width: 100%;
      margin: 0;
    }
    .menu {
      display: block;
    }
  }
`
