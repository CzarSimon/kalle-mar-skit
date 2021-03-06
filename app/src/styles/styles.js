import { portraitMode } from '../methods/helper-methods'

export const font = {
  type: {
    sans: 'Lato'
  },
  size: {
    small: '1.0em',
    medium: '1.2em',
    large: '1.5em',
    huge: '2.5em'
  }
}

export const color = {
  blue: '#357AE8',
  green: '#00BD76',
  red: '#EF472F',
  yellow: '#FFBD55',
  white: '#FFFFFF',
  grey: {
    dark: '#969696',
    light: '#C5C5C5',
    background: '#F8F8F8'
  }
}

export const length = {
  tiny: '1px',
  mini: '10px',
  small: '15px',
  medium: '20px',
  large: '30px'
}

const makeLength = (length, unit = 'vw') => length.toString() + unit

export const content = (isPortrait = portraitMode()) => {
  const horizontalMargin = (isPortrait) ? 5 : 30
  return {
    width: makeLength(100 - 2 * horizontalMargin),
    marginLeft: makeLength(horizontalMargin),
    marginRight: makeLength(horizontalMargin),
    marginTop: '3vh'
  }
}
