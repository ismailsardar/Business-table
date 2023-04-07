import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CanceledPage from "./pages/CanceledPage";
import CompletedPage from "./pages/CompletedPage";
import CreatePage from "./pages/CreatePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import NewTaskPage from "./pages/NewTaskPage";
import Page404 from "./pages/Page404";
import ProfilePage from "./pages/ProfilePage";
import ProgressPage from "./pages/ProgressPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/all" element={<NewTaskPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/completed" element={<CompletedPage />} />
          <Route path="/canceled" element={<CanceledPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
