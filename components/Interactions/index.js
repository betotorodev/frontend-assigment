import { Comment } from 'components/Icons/Comment'
import { Star } from 'components/Icons/Star'
import { Visibility } from 'components/Icons/Visibility'

import styles from 'components/Interactions/styles'

export const Interactions = () => {
  return (
    <>
      <p>
        <Star /> 50
      </p>
      <p>
        <Comment /> 40
      </p>
      <p>
        <Visibility /> 75
      </p>
      <style jsx>{styles}</style>
    </>
  )
}
