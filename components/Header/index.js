import { DropDown } from 'components/DropDown'
import { Logo } from 'components/Logo'
import { Profile } from 'components/Profile'
import { Search } from 'components/search'

import styles from 'components/Header/styles'

export const Header = () => {
  return (
    <>
      <header>
        <section>
          <Logo />
          <div>
            <Search />
          </div>
          <DropDown />
        </section>
        <Profile />
      </header>
      <style jsx>{styles}</style>
    </>
  )
}
