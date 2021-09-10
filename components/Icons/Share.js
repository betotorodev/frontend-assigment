import * as React from 'react'

export function Share(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={24} width={24} {...props}>
      <path d='M0 0h24v24H0V0z' fill={props.fill} />
      <path d='M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z' />
    </svg>
  )
}
