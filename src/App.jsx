import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
function App(){
  const router=createBrowserRouter([
    {path:"/Pages/Home",element:<Home />
    },
    {path:"/Pages/ContactUs", element:<ContactUs />},
  ]);
  return (
    <div>
      <h1>React Router v7 Project</h1>
      <RouterProvider router={router} />
    </div>

  );
}
export default App;