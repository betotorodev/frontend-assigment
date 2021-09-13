import { useRef, useEffect } from 'react'
import { Title } from 'components/Title'
import json from 'mockup/article'
import styles from 'components/Blog/styles'
import { Star } from 'components/Icons/Star'
import { Comment } from 'components/Icons/Comment'
import { Share } from 'components/Icons/Share'

export const Blog = () => {
  const contentRef = useRef()
  useEffect(() => {
    const paragraph = contentRef.current
    console.log(json, paragraph)
    paragraph ? (paragraph.innerHTML = json.content) : null
  }, [contentRef])
  return (
    <>
      <div className='blog-container'>
        <div className='blog-image'></div>
        <Title title={json.title} />
        <div ref={contentRef}></div>
        <footer>
          <ul>
            <li>
              <Star /> Destacar
            </li>
            <li>
              <Comment /> Comentar
            </li>
            <li>
              <Share /> Compartir
            </li>
          </ul>
        </footer>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
