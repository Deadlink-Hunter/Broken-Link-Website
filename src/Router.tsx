import { lazy, Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { ErrorComponent } from './components/ErrorBoundary/components/ErrorComponent';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Loader } from './components/UI/Loader/Loader';
import { ROUTES } from './constants/routes.consts';
import { routerStyles } from './router.styles';

const HomePage = lazy(() =>
  import('./pages/Home/Home.page').then((module) => ({ default: module.HomePage }))
);
const AboutPage = lazy(() => import('./pages/About/About.page'));
const ScannerPage = lazy(() => import('./pages/Scanner/Scanner.page'));
const StatisticsPage = lazy(() => import('./pages/Statistics/Statistics.page'));

const withErrorBoundary = (element: React.ReactNode) => (
  <ErrorBoundary>
    <Suspense
      fallback={
        <div style={routerStyles.suspenseFallback}>
          <Loader />
        </div>
      }
    >
      {element}
    </Suspense>
  </ErrorBoundary>
);

const router = createHashRouter([
  {
    path: ROUTES.HOME,
    element: <AppLayout />,
    errorElement: (
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: withErrorBoundary(<HomePage />),
      },
      {
        path: ROUTES.ABOUT,
        element: withErrorBoundary(<AboutPage />),
      },
      {
        path: ROUTES.SCANNER,
        element: withErrorBoundary(<ScannerPage />),
      },
      {
        path: ROUTES.STATISTICS,
        element: withErrorBoundary(<StatisticsPage />),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
