<<<<<<< HEAD
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
=======
import useFetch from "./useFetch";

function App() {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  return (
    <div>
      <h1>With custom hooks | Dinesh Decodes</h1>
      {data && <p>{data.title}</p>}
    </div>
  );
}

export default App;
>>>>>>> bd794e8a53987bb5f4d088c4b9fe94037b92d8be
