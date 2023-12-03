import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/rotas";

export function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}