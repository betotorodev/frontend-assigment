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
    position: relative;
    width: 100%;
    height: 500px;
    background: linear-gradient(
      17deg,
      ${colors.gradient_2},
      ${colors.gradient_1} 80%
    );
  }

  .blog-image::before {
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

  h1 {
    font-size: 24px;
  }

  footer {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 500px;
    width: 100%;
    padding: 8px 0;
    border: 1px solid ${colors.primary};
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  li {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    .blog-image {
      height: 300px;
    }
  }
`
