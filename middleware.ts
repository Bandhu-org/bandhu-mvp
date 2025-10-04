import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Si l'URL commence déjà par une locale, on ne fait rien
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = request.headers.get('accept-language')?.split(',')?.[0]?.split('-')?.[0] || defaultLocale
    function isLocale(value: string): value is typeof locales[number] {
      return locales.includes(value as any)
    }

    const rawLocale = request.headers.get('accept-language')?.split(',')?.[0]?.split('-')?.[0] || defaultLocale

    const redirectLocale = isLocale(rawLocale) ? rawLocale : defaultLocale


    return NextResponse.redirect(new URL(`/${redirectLocale}${pathname}`, request.url))
  }

  return NextResponse.next()
}

// Activer le middleware sur toutes les pages
export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
}
