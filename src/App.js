import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import FloatingButton from "./components/common/FloatingButton";
import PollList from "./pages/PollList";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

const App = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        {/* 헤더는 맨 위 */}
        <Header />

        {/* 헤더 아래에 사이드바와 메인 컨텐츠 */}
        <div style={{ display: "flex", flex: 1 }}>
          {/* 왼쪽 사이드바 */}
          <Sidebar />

          {/* 오른쪽 메인 컨텐츠 */}
          <div style={{ flex: 1, backgroundColor: "#f9f9f9", padding: "16px" }}>
            <Routes>
              <Route path="/polls" element={<PollList />} />
              <Route path="/dashboard/overview" element={<Dashboard />} />
              <Route path="/setting/profile" element={<Settings />} />
              <Route path="/users" element={<Users />} />
              <Route path="*" element={<h2>404: Page Not Found</h2>} />
            </Routes>
          </div>
        </div>

        {/* 플로팅 버튼 */}
        <FloatingButton />
      </div>
    </Router>
  );
};

export default App;
