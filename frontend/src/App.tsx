import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./presentation/pages/NoPage";
import Dashboard from "./presentation/pages/task/Dashboard";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
}