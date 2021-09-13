import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  .new-container {
    display: flex;
    margin-bottom: 15px;
  }

  .icons-container {
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
  }

  .title-container {
    padding-bottom: 1em;
    border-bottom: 1px solid ${colors.grey_2}33;
  }

  figure {
    position: relative;
    height: auto;
    width: 300px;
    margin-right: 15px;
    border-radius: 8px;
    overflow: hidden;
  }

  figure::before {
    position: absolute;
    top: 25px;
    left: 0;
    content: 'Noticias';
    padding: 3px 20px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: 18px;
    color: ${colors.white};
    background-color: ${colors.primary};
  }

  img {
    width: 100%;
    height: 100%;
  }

  h4 {
    color: ${colors.grey_2};
  }

  section {
    padding: 15px 0px;
  }

  /* @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  } */
`
