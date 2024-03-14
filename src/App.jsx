
import './layout.scss';

import HomePage from "./pages/homePage";
import Layout from './pages/layout/layout'; 
import {
   createBrowserRouter,
   RouterProvider,
   Route,
   Link,
 } from "react-router-dom";
import ListPage from './pages/listPage/listPage';
import SinglePage from './pages/singlePage/singlePage';
 
function App() {
  

   const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children : [
          {
            path : "/",
            element : <HomePage />
          },
          {
            path: "/list",
            element: <ListPage />
          },
          {
            path: "/:id",
            element: <SinglePage />
          }
        ]
      },
    
    ]);

  return (
    <>
     
        <RouterProvider router={router} />

    </>

  )
}

export default App
