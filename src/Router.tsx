import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorComponent } from './components/ErrorBoundary/components/ErrorComponent';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ROUTES } from './constants/routes.consts';
import AboutPage from './pages/About/About.page';
import { HomePage } from './pages/Home/Home.page';
import ScannerPage from './pages/Scanner/Scanner.page';
import StatisticsPage from './pages/Statistics/Statistics.page';

const withErrorBoundary = (element: React.ReactNode) => (
  <ErrorBoundary>
    <ErrorComponent />
    {element}
  </ErrorBoundary>
);

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
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
