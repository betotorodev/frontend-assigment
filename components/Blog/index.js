import { useRef, useEffect } from 'react'
import styles from 'components/Blog/styles'
import json from 'mockup/article'

export const Blog = () => {
  const contentRef = useRef()
  const paragraph = contentRef.current
  useEffect(() => {
    paragraph.innerHTML = json.content
  }, [])
  return (
    <>
      <div className='blog-container'>
        <div className='blog-image'></div>
        <h1>Title</h1>
        <p ref={contentRef}></p>
        <footer>iconos</footer>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
