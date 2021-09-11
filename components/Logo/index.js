import { LogoIcon } from 'components/Icons/Logo'
import styles from 'components/Logo/styles'

export const Logo = () => {
  return (
    <>
      <div>
        <LogoIcon />
        <p>
          doc <span>red</span>
        </p>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
