import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Layout, Loading } from "./components";
// import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { details, watch } from './assets/mocks';

const LazyPage = {
  Home: React.lazy(() => import('./pages/Home')),
  Details: React.lazy(() => import('./pages/Details')),
  Watcher: React.lazy(() => import('./pages/Watcher')),
}

interface SuspenseProps {
  children: React.ReactNode
}

const Suspense = ({ children }: SuspenseProps) => {
  return (
    <React.Suspense fallback={<Loading />}>
      {children}
    </React.Suspense>
  )
}

const pageLoaders = {
  details: () => ({ ...details }),
  watch: () => ({ ...watch })
}

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Suspense children={<LazyPage.Home />} />} />
      <Route path="details" loader={pageLoaders.details} element={<Suspense children={<LazyPage.Details />} />} />
      <Route path="watch" loader={pageLoaders.watch} element={<Suspense children={<LazyPage.Watcher />} />} />
      {/* <Route path="*" element={<Suspense children={<LazyPage.NoFound />} />} /> */}
    </Route>
  )
);

export default AppRouter;
