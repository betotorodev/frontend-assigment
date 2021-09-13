import { DropDown } from 'components/DropDown'
import { Logo } from 'components/Logo'
import { Profile } from 'components/Profile'
import { Search } from 'components/search'
import { AppLayout } from 'components/AppLayout'

import styles from 'components/Header/styles'

export const Header = () => {
  return (
    <>
      <header>
        <AppLayout>
          <div className='header-container'>
            <section>
              <Logo />
              <div className='search-container'>
                <Search />
              </div>
              <DropDown />
            </section>
            <Profile />
          </div>
        </AppLayout>
      </header>
      <style jsx>{styles}</style>
    </>
  )
}
