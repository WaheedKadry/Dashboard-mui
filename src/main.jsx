import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Team from "./Pages/Team/Team.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Invoices from "./Pages/Invoices/Invoices.jsx";
import Calender from "./Pages/Calender/Calender.jsx";
import Faq from "./Pages/Faq/Faq.jsx";
import BarChart from "./Pages/BarChart/BarChart.jsx";
import LineChart from "./Pages/LineChart/LineChart.jsx";
import PieChart from "./Pages/PieChart/PieChart.jsx";
import Geography from "./Pages/Geography/Geography.jsx";
import Form from "./Pages/Form/Form.jsx";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
   <Route index element={<Dashboard />}/>
     <Route path="*" element={<ErrorPage />} />
     <Route path="team" element={<Team />} />
     <Route path="contact" element={<Contact />} />
     <Route path="invoices" element={<Invoices />} />
     <Route path="form" element={<Form />} />
     <Route path="calender" element={<Calender />} />
     <Route path="faq" element={<Faq />} />
     <Route path="barchart" element={<BarChart />} />
     <Route path="piechart" element={<PieChart />} />
     <Route path="linechart" element={<LineChart />} />
     <Route path="geography" element={<Geography />} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
