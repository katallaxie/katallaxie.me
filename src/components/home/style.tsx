import { style, media } from 'typestyle'
import { rem, percent, px, rgba } from 'csx'
import sizes from '../../style/sizes'
import styled from 'vue-styled-components'
import size from '../../style/sizes'

export const wrap = style(
  {
    marginTop: rem(2.333),
    marginBottom: rem(2.333),
    marginLeft: rem(0.333),
  },
  media(
    { minWidth: size.sm },
    {
      margin: '4.333rem auto 0',
      maxWidth: percent(81),
    }
  ),
  media(
    { maxWidth: size.sm },
    {
      marginRight: px(35)
    }
  ),
  media(
    { minWidth: size.md },
    {
      margin: '6.333rem auto 0',
      maxWidth: percent(79)
    }
  ),
  media(
    { minWidth: size.lg },
    {
      margin: '8.3333rem auto 0',
      maxWidth: percent(77)
    }
  ),
  media(
    { minWidth: size.xl },
    {
      margin: '8.3333rem auto 0',
      maxWidth: percent(75)
    }
  )
)


export const twentyPercent = style(
  {
    background: 'radial-gradient(at 60% bottom, #6c388e, #38458e)',
  }
)

export const openSource = style(
  {
    background: 'radial-gradient(at 60% top, #64e2d1, #026469)'
  }
)

export const dataCol = style(
  {
    marginTop: rem(1.333),
    marginBottom: rem(1.333)
  }
)

export const StyledData = styled.span`
  display: block;
`

export const styledTable = style(
  {
    $nest: {
      'tbody td:nth-last-child(1)': {
        width: percent(30)
      }
    }
  },
  media({
    minWidth: sizes.lg
  }, {
      $nest: {
        'tbody td:nth-last-child(1)': {
          textAlign: 'right',
          width: percent(50)
        }
      }
    }),
  {
    width: percent(100),
    $nest: {
      'tbody td': {
        paddingTop: rem(0.333),
        paddingBottom: rem(0.333),
      },
      'tbody td > span': {
        display: 'block',
        fontWeight: 400,
        color: rgba(200, 200, 200, 1).toString()
      },

      'thead': {
        display: 'none'
      }
    }
  }
)
