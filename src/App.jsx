import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/rotas";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="top-right" />
      <AppRoutes />
    </BrowserRouter>
  );
}