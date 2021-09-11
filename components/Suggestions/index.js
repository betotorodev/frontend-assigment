import { New } from 'components/New'
import styles from 'components/Suggestions/styles'

export const Suggestions = () => {
  const news = Array(5).fill(1)
  return (
    <>
      <section>
        {news.map((item, index) => (
          <New key={index} />
        ))}
      </section>
      <style jsx>{styles}</style>
    </>
  )
}
