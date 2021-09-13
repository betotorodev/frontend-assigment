import { BlogHeader } from 'components/BlogHeader'
import styles from 'components/Title/styles'

export const Title = ({ title }) => {
  return (
    <>
      <div className='title-container'>
        <section>
          <h1>{title}</h1>
          <BlogHeader />
          <div>
            <ul>
              <li>Medicina interna</li>
              <li>Pediatria</li>
              <li>Obstreticia</li>
            </ul>
          </div>
        </section>
        <section>
          <button>Guardar</button>
        </section>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
