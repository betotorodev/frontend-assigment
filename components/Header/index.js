import { Logo } from 'components/Logo'
import { Search } from 'components/search'

import styles from 'components/Header/styles'

export const Header = () => {
  return (
    <>
      <header>
        <Logo />
        <Search />
      </header>
      <style jsx>{styles}</style>
    </>
  )
}
