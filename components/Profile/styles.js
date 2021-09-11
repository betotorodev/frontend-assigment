import css from 'styled-jsx/css'

import { breakpoints, colors } from 'styles/theme'

export default css`
  section {
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-left: 1px solid #ffffff50;
  }

  .notificationNumber {
    position: relative;
  }

  .notificationNumber::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '1';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    font-size: 7px;
    text-align: center;
    color: ${colors.white};
    background-color: ${colors.secondary};
  }

  .imageProfile {
    display: flex;
    align-items: center;
    margin: 0 15px;
  }

  figure {
    margin: 0;
    height: 40px;
    width: 40px;
    border: 2px solid ${colors.white};
    border-radius: 50%;
    overflow: hidden;
  }

  img {
    width: 100%;
  }

  /* @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  } */
`
