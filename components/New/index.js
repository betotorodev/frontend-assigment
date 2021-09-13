import { Interactions } from 'components/Interactions'

import styles from 'components/New/styles'

const image =
  'https://images.unsplash.com/photo-1579781354199-1ffd36bd7d30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'

export const New = () => {
  return (
    <>
      <div className='new-container'>
        <figure>
          <img src={image} alt='photo' />
        </figure>
        <section>
          <div className='title-container'>
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
            <h4>Por: lorem ipsum dolor</h4>
          </div>
          <div className='icons-container'>
            <Interactions />
          </div>
        </section>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
