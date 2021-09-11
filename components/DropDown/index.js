import { Arrow } from 'components/Icons/Arrow'
import { HomeIcon } from 'components/Icons/Home'

import styles from 'components/DropDown/styles'

export const DropDown = () => {
  return (
    <>
      <div>
        <HomeIcon />
        <h5>Inicio</h5>
        <Arrow />
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
