import { Arrow } from 'components/Icons/Arrow'
import { Notifications } from 'components/Icons/Notifications'
import { Settings } from 'components/Icons/Settings'

import styles from 'components/Profile/styles'

const image = 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg'

export const Profile = () => {
  return (
    <>
      <section>
        <div className='notificationNumber'>
          <Notifications />
        </div>
        <div className='imageProfile'>
          <figure>
            <img src={image} alt='profile' />
          </figure>
          <Arrow />
        </div>
        <Settings />
      </section>
      <style jsx>{styles}</style>
    </>
  )
}
