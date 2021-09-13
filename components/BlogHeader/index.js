import { Flower } from 'components/Icons/Flower'
import styles from 'components/BlogHeader/styles'

export const BlogHeader = () => {
  return (
    <>
      <section>
        <Flower />
        <div>
          <h3>Noticias DocRed</h3>
          <span>Hace 12h</span>
          <span>Publicado el: 17/01/18</span>
          <span>Lectura: 3 min</span>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  )
}
