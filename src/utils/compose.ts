import { GetStaticPropsResult, GetStaticPropsContext } from 'next'

export type TContext = GetStaticPropsContext
export type TComposeFunction<TProps> = (
  ctx: TContext
) => Promise<TStaticPropsResult<TProps>>
export type TStaticPropsResult<TProps> = GetStaticPropsResult<TProps>

export const compose = <TProps>(...funcs: TComposeFunction<TProps>[]) => {
  return async (ctx: TContext): Promise<TStaticPropsResult<TProps>> =>
    funcs.reduce<Promise<TStaticPropsResult<TProps>>>(
      async (result, fn) => ({ ...result, ...(await fn(ctx)) }),
      Promise.resolve(<TStaticPropsResult<TProps>>{ props: {} })
    )
}

export default compose
