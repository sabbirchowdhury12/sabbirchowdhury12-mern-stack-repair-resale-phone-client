import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
      <RouterProvider router={router}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </RouterProvider>
    </div>
  );
}

export default App;
