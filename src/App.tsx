import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/TopBar";
import Dashboard from "./pages/dashboard/Dashboard";
import Report from "./pages/report/Report";
import { useEffect, useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // Set default open/close based on screen width
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
    setIsSidebarOpen(!isMobile);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-light text-dark">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="flex flex-col flex-grow h-full">
          <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          <main className="flex-grow overflow-y-auto p-3">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
