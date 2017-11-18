import { style, media } from 'typestyle'
import { percent, rem, viewWidth } from 'csx'
import { h1 } from '../../style/headings'
import size from '../../style/sizes'

export const tileStyle = style(
  {
    marginTop: rem(1.333),
    marginBottom: rem(1.333),
    transition: '.5s',
    $nest: {
      '&:hover': {
        transform: 'scale3d(1.033,1.033,1.033)'
      },
      'h1': {
        width: percent(85),
        padding: rem(1.333),
        paddingTop: viewWidth(33.333),
        paddingBottom: rem(1.333),
        ...h1.xs
      }
    }
  },
  media(
    { minWidth: size.md },
    {
      $nest: {
        'h1': {
          padding: rem(2.333),
          paddingTop: viewWidth(33.333),
          paddingBottom: rem(2.333),
        }
      }
    }
  ),
  media(
    { minWidth: size.lg },
    {
      marginTop: rem(3.333),
      marginBottom: rem(3.333),
      $nest: {
        'h1': {
          paddingTop: viewWidth(23.333),
          ...h1.lg
        }
      }
    }
  )
)
