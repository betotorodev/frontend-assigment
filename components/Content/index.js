import { Suggestions } from 'components/Suggestions'
import { AppLayout } from 'components/AppLayout'
import { Blog } from 'components/Blog'

import styles from 'components/Content/styles'

export const Content = () => {
  return (
    <>
      <div className='content-container'>
        <AppLayout>
          <article>
            <section className='article-content'>
              <Blog></Blog>
            </section>
            <aside className='article-suggestions'>
              <div className='title-container'>
                <h5>Noticias relacionadas</h5>
                <div className='line'></div>
              </div>
              <Suggestions />
            </aside>
          </article>
        </AppLayout>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
