import { useRef, useEffect } from 'react'
import { Title } from 'components/Title'
import json from 'mockup/article'
import styles from 'components/Blog/styles'

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
        <footer>iconos</footer>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
