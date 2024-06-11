import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar/index';
import Home from './Pages/Home';

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
