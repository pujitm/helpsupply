import { css } from '@emotion/core'
import { Color, Space } from 'lib/theme'

const styles = {
  root: css({
    padding: `${Space.S20}px ${Space.S40}px`,
    width: '100%',
    borderBottom: `2px solid ${Color.GRAY_LIGHT}`,
    display: 'flex',
  }),
  header: css({
    color: Color.CORAL,
    paddingLeft: Space.S10,
  }),
  plus: css({
    alignSelf: 'baseline',
  }),
}

export default styles
