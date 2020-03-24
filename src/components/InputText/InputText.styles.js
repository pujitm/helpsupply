import { css } from '@emotion/core'
import { Color, Radius, Space } from 'lib/theme'

const styles = {
  active: css({
    borderColor: Color.GRAY
  }),
  activeLabel: css({
    fontSize: 12,
    paddingTop: Space.S10,
    transition: '0.2s all ease-in-out',
  }),
  input: css({
    appearance: 'none',
    background: 'transparent',
    border: 0,
    display: 'block',
    height: '100%',
    fontSize: 16,
    padding: `${Space.S10}px ${Space.S20}px 0 ${Space.S20}px`,
    width: '100%',

    '::placeholder': { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: Color.GRAY_50,
      opacity: 1, /* Firefox */
    },
    ':-ms-input-placeholder': { /* Internet Explorer 10-11 */
      color: Color.GRAY_50,
    },
    '::-ms-input-placeholder': { /* Microsoft Edge */
      color: Color.GRAY_50,
    },
  }),
  label: css({
    color: Color.GRAY_50,
    fontSize: 16,
    position: 'absolute',
    height: '100%',
    paddingTop: Space.S20,
    left: Space.S20,
    pointerEvents: 'none',
    transition: '0.2s all ease-in-out',

  }),
  root: css({
    border: `1.5px solid ${Color.GRAY_50}`,
    borderRadius: Radius.ROUNDED,
    display: 'flex',
    flexDirection: 'column',
    height: 65,
    position: 'relative'
  }),
}

export default styles