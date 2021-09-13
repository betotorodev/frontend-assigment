import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export default css`
  section {
    display: flex;
    margin: 20px 0;
  }

  span {
    font-size: 14px;
    color: ${colors.grey_2};
  }

  span:nth-child(3n) {
    margin: 0 15px;
    padding: 0 15px;
    border-left: 1px solid ${colors.grey_2};
    border-right: 1px solid ${colors.grey_2};
  }
`
