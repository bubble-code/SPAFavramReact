import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout"
import { Automate } from "../pages/Automate"


export const routes = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        path: 'automate',
        element: <Automate />
      }
    ]
  }
])