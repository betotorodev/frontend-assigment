import * as React from 'react'

export function LogoIcon(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height={24} width={24} {...props}>
      <path d='M0 0h24v24H0V0z' fill='none' stroke={props.stroke} />
      <path
        d='M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z'
        fill='white'
      />
    </svg>
  )
}
