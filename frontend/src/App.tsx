import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./presentation/pages/NoPage";
import Dashboard from "./presentation/pages/task/Dashboard";
import Setting from "./presentation/pages/task/Setting";
import NewForm from "./presentation/pages/task/NewForm";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/add-task" element={<NewForm />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
}