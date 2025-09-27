import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorComponent } from './components/ErrorBoundary/components/ErrorComponent';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import AboutPage from './pages/About/About.page';
import { HomePage } from './pages/Home/Home.page';
import ScannerPage from './pages/Scanner/Scanner.page';
import StatisticsPage from './pages/Statistics/Statistics.page';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: (
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'scanner',
        element: <ScannerPage />,
      },
      {
        path: 'statistics',
        element: <StatisticsPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
