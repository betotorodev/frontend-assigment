import { SearchIcon } from 'components/Icons/Search'

import styles from 'components/Search/styles'

export const Search = () => {
  return (
    <>
      <div>
        <button>
          <SearchIcon />
        </button>
        <input type='text' placeholder='¿Qué estás buscando?' />
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
