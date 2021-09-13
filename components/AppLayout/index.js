import styles from 'components/AppLayout/styles'

export const AppLayout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{styles}</style>
    </>
  )
}
