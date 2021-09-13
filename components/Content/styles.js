import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  .content-container {
    padding: 0 40px;
    background-color: ${colors.grey};
  }
  article {
    display: flex;
    min-height: 100vh;
    padding: 60px 0;
  }

  .article-content {
    width: 70%;
  }

  .article-suggestions {
    width: 30%;
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h5 {
    display: inline;
    color: ${colors.primary};
  }

  .line {
    width: 55%;
    height: 1px;
    background-color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.desktop}) {
    aside {
      display: none;
    }

    .article-content {
      width: 100%;
    }
  }
`
