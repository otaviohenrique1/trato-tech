import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./components/PaginaPadrao";
import Categoria from "./pages/Categoria";
import Home from "./pages/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />}/>
          <Route path="/categoria/:nomeCategoria" element={<Categoria />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}