import { Arrow } from 'components/Icons/Arrow'
import { HomeIcon } from 'components/Icons/Home'

import styles from 'components/DropDown/styles'

export const DropDown = () => {
  return (
    <>
      <div>
        <HomeIcon />
        <h6>Inicio</h6>
        <Arrow />
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
