import { GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'

type TContext<E extends ParsedUrlQuery = ParsedUrlQuery> = E
type TComposeFunction<TProps> = (
  ctx: TContext
) => Promise<TStaticPropsResult<TProps>>
type TStaticPropsResult<TProps> = GetStaticPropsResult<TProps>

export const compose = <TProps>(funcs: TComposeFunction<TProps>[]) => {
  return async (ctx: TContext): Promise<TStaticPropsResult<TProps>> =>
    funcs.reduce<Promise<TStaticPropsResult<TProps>>>(
      async (result, fn) => ({ ...result, ...(await fn(ctx)) }),
      Promise.resolve(<TStaticPropsResult<TProps>>{ props: {} })
    )
}

export default compose
