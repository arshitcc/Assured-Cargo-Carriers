import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LHVEntry from './pages/LHVEntry.tsx';
import AddConginment from './pages/AddConginment.tsx';
import EditChallan from './pages/EditChallan.tsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <App/>
    ),
    children: [
      {
        path: '/home',
        element: (
          <div className='bg-green-200 h-[calc(100vh-64px)] font-semibold'>Home</div>
        ),
      },
      {
        path: 'about',
        element: (
          <div className='bg-blue-200 h-[calc(100vh-64px)] font-semibold'>About</div>
        ),
      },
      {
        path: 'lhv-entry',
        element: (
          <LHVEntry/>
        ),
      },
      {
        path: '/add-consignment',
        element: (
          <AddConginment/>
        )
      },
      {
        path : "/edit-challan",
        element : (
          <EditChallan/>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
