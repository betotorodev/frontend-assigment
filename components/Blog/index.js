import { useRef, useEffect } from 'react'
import styles from 'components/Blog/styles'
import json from 'mockup/article'
import { Title } from 'components/Title'

export const Blog = () => {
  const contentRef = useRef()
  const paragraph = contentRef.current
  useEffect(() => {
    console.log(json, paragraph)
    paragraph ? (paragraph.innerHTML = json.content) : null
  }, [paragraph])
  return (
    <>
      <div className='blog-container'>
        <div className='blog-image'></div>
        <Title title={json.title} />
        <p ref={contentRef}></p>
        <footer>iconos</footer>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
