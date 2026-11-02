/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as BriefRouteImport } from './routes/brief'
import { Route as CompanyRouteImport } from './routes/company'
import { Route as ConcernsRouteImport } from './routes/concerns'
import { Route as ConcernsSlugRouteImport } from './routes/concerns.$slug'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as PortfolioRouteImport } from './routes/portfolio'
import { Route as ServicesRouteImport } from './routes/services'
import { Route as ServicesSlugRouteImport } from './routes/services.$slug'
import { Route as WorkRouteImport } from './routes/work'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const BriefRoute = BriefRouteImport.update({
  id: '/brief',
  path: '/brief',
  getParentRoute: () => rootRouteImport,
} as any)
const CompanyRoute = CompanyRouteImport.update({
  id: '/company',
  path: '/company',
  getParentRoute: () => rootRouteImport,
} as any)
const ConcernsRoute = ConcernsRouteImport.update({
  id: '/concerns',
  path: '/concerns',
  getParentRoute: () => rootRouteImport,
} as any)
const ConcernsSlugRoute = ConcernsSlugRouteImport.update({
  id: '/concerns/$slug',
  path: '/concerns/$slug',
  getParentRoute: () => rootRouteImport,
} as any)
const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)
const PortfolioRoute = PortfolioRouteImport.update({
  id: '/portfolio',
  path: '/portfolio',
  getParentRoute: () => rootRouteImport,
} as any)
const ServicesRoute = ServicesRouteImport.update({
  id: '/services',
  path: '/services',
  getParentRoute: () => rootRouteImport,
} as any)
const ServicesSlugRoute = ServicesSlugRouteImport.update({
  id: '/services/$slug',
  path: '/services/$slug',
  getParentRoute: () => rootRouteImport,
} as any)
const WorkRoute = WorkRouteImport.update({
  id: '/work',
  path: '/work',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/brief': typeof BriefRoute
  '/company': typeof CompanyRoute
  '/concerns': typeof ConcernsRoute
  '/concerns/$slug': typeof ConcernsSlugRoute
  '/contact': typeof ContactRoute
  '/portfolio': typeof PortfolioRoute
  '/services': typeof ServicesRoute
  '/services/$slug': typeof ServicesSlugRoute
  '/work': typeof WorkRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/brief': typeof BriefRoute
  '/company': typeof CompanyRoute
  '/concerns': typeof ConcernsRoute
  '/concerns/$slug': typeof ConcernsSlugRoute
  '/contact': typeof ContactRoute
  '/portfolio': typeof PortfolioRoute
  '/services': typeof ServicesRoute
  '/services/$slug': typeof ServicesSlugRoute
  '/work': typeof WorkRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/brief': typeof BriefRoute
  '/company': typeof CompanyRoute
  '/concerns': typeof ConcernsRoute
  '/concerns/$slug': typeof ConcernsSlugRoute
  '/contact': typeof ContactRoute
  '/portfolio': typeof PortfolioRoute
  '/services': typeof ServicesRoute
  '/services/$slug': typeof ServicesSlugRoute
  '/work': typeof WorkRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/brief'
    | '/company'
    | '/concerns'
    | '/concerns/$slug'
    | '/contact'
    | '/portfolio'
    | '/services'
    | '/services/$slug'
    | '/work'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/brief'
    | '/company'
    | '/concerns'
    | '/concerns/$slug'
    | '/contact'
    | '/portfolio'
    | '/services'
    | '/services/$slug'
    | '/work'
  id:
    | '__root__'
    | '/'
    | '/brief'
    | '/company'
    | '/concerns'
    | '/concerns/$slug'
    | '/contact'
    | '/portfolio'
    | '/services'
    | '/services/$slug'
    | '/work'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BriefRoute: typeof BriefRoute
  CompanyRoute: typeof CompanyRoute
  ConcernsRoute: typeof ConcernsRoute
  ConcernsSlugRoute: typeof ConcernsSlugRoute
  ContactRoute: typeof ContactRoute
  PortfolioRoute: typeof PortfolioRoute
  ServicesRoute: typeof ServicesRoute
  ServicesSlugRoute: typeof ServicesSlugRoute
  WorkRoute: typeof WorkRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/brief': {
      id: '/brief'
      path: '/brief'
      fullPath: '/brief'
      preLoaderRoute: typeof BriefRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/company': {
      id: '/company'
      path: '/company'
      fullPath: '/company'
      preLoaderRoute: typeof CompanyRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/concerns': {
      id: '/concerns'
      path: '/concerns'
      fullPath: '/concerns'
      preLoaderRoute: typeof ConcernsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/concerns/$slug': {
      id: '/concerns/$slug'
      path: '/concerns/$slug'
      fullPath: '/concerns/$slug'
      preLoaderRoute: typeof ConcernsSlugRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/portfolio': {
      id: '/portfolio'
      path: '/portfolio'
      fullPath: '/portfolio'
      preLoaderRoute: typeof PortfolioRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services': {
      id: '/services'
      path: '/services'
      fullPath: '/services'
      preLoaderRoute: typeof ServicesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services/$slug': {
      id: '/services/$slug'
      path: '/services/$slug'
      fullPath: '/services/$slug'
      preLoaderRoute: typeof ServicesSlugRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/work': {
      id: '/work'
      path: '/work'
      fullPath: '/work'
      preLoaderRoute: typeof WorkRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BriefRoute: BriefRoute,
  CompanyRoute: CompanyRoute,
  ConcernsRoute: ConcernsRoute,
  ConcernsSlugRoute: ConcernsSlugRoute,
  ContactRoute: ContactRoute,
  PortfolioRoute: PortfolioRoute,
  ServicesRoute: ServicesRoute,
  ServicesSlugRoute: ServicesSlugRoute,
  WorkRoute: WorkRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { createStart } from '@tanstack/react-start'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
  }
}
