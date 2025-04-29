import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LHVEntry from "./pages/LHVEntry.tsx";
import AddConginment from "./pages/operation/AddConginment.tsx";
import EditChallan from "./pages/operation/EditChallan.tsx";
import SearchChallans from "./pages/operation/SearchChallans.tsx";
import TruckArrivalReport from "./pages/operation/TruckArrivalReport.tsx";
import AddThisConsignment from "./components/operations/edit-challan/AddThisConsignment.tsx";
import Bills from "./pages/finance/Bills.tsx";
import BillEntry from "./pages/finance/BillEntry.tsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: (
          <div className="bg-green-200 h-[calc(100vh-64px)] font-semibold">
            Home
          </div>
        ),
      },
      {
        path: "about",
        element: (
          <div className="bg-blue-200 h-[calc(100vh-64px)] font-semibold">
            About
          </div>
        ),
      },
      {
        path: "lhv-entry",
        element: <LHVEntry />,
      },
      {
        path: "/add-consignment",
        element: <AddConginment />,
      },
      {
        path: "/edit-challan",
        element: <EditChallan />,
      },
      {
        path: "/search-challans",
        element: <SearchChallans />,
      },
      {
        path: "/truck-arrival-report",
        element: <TruckArrivalReport />,
      },
      {
        path: "/add-this-consignment",
        element: <AddThisConsignment />,
      },
      {
        path : "/search-bills",
        element : <Bills/>
      },
      {
        path : "/bill-entry",
        element : <BillEntry/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
