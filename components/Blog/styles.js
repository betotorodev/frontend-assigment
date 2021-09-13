import css from 'styled-jsx/css'
import { breakpoints, colors } from 'styles/theme'

export default css`
  .blog-container {
    width: 97%;
    height: 100%;
    margin-right: 15px;
    padding: 40px;
    background-color: ${colors.white};
    border-radius: 15px;
  }

  .blog-image {
    width: 100%;
    height: 500px;
    background: linear-gradient(
      17deg,
      ${colors.gradient_2},
      ${colors.gradient_1} 80%
    );
  }

  h1 {
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    .blog-image {
      height: 300px;
    }
  }
`
