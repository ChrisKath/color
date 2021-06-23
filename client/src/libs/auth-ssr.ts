import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { NextApiRequestCookies } from 'next/dist/next-server/server/api-utils'
import { configs } from '@/libs/configs'

export type Context = GetServerSidePropsContext
export type ContextResult = GetServerSidePropsResult<{}>

export function getPassportToken(cookies: NextApiRequestCookies): string | null {
  return cookies[configs.APP_AUTH] || null
}

export function requiresPageAuth(callback?: Function) {
  return (context: Context): ContextResult => {
    const passport = getPassportToken(context.req.cookies)

    if (!passport) {
      return {
        redirect: {
          destination: '/login',
          statusCode: 307
        }
      }
    }

    // Pass data to the page via props
    return callback ? callback(context) : { props: {} }
  }
}

export function isAuthenticated(context: Context): ContextResult {
  const passport = getPassportToken(context.req.cookies)

  if (passport) {
    return {
      redirect: {
        destination: '/browse',
        statusCode: 307
      }
    }
  }

  return { props: {} }
}
