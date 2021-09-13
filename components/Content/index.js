import { Suggestions } from 'components/Suggestions'
import styles from 'components/Content/styles'

export const Content = () => {
  return (
    <>
      <article>
        <section className='article-content'>blog</section>
        <aside className='article-suggestions'>
          <div className='title-container'>
            <h5>Noticias relacionadas</h5>
            <div className='line'></div>
          </div>
          <Suggestions />
        </aside>
      </article>
      <style jsx>{styles}</style>
    </>
  )
}
