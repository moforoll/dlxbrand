import './App.css';
import Home from './components/Home/Home'
import Shop from "./components/Shop/Shop"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/shop",
    element: <Shop/>,
  },
]);
function App() {
  return (
    <div>
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
