import { Logo } from 'components/Logo'
import { Search } from 'components/search'
import { DropDown } from 'components/DropDown'

import styles from 'components/Header/styles'

export const Header = () => {
  return (
    <>
      <header>
        <Logo />
        <Search />
        <DropDown />
      </header>
      <style jsx>{styles}</style>
    </>
  )
}
