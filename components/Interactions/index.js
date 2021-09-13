import { Comment } from 'components/Icons/Comment'
import { Star } from 'components/Icons/Star'
import { Visibility } from 'components/Icons/Visibility'

import styles from 'components/Interactions/styles'

export const Interactions = () => {
  return (
    <>
      <p>
        <Star /> <span>50</span>
      </p>
      <p>
        <Comment /> <span>40</span>
      </p>
      <p>
        <Visibility /> <span>75</span>
      </p>
      <style jsx>{styles}</style>
    </>
  )
}
