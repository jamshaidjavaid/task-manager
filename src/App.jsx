import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Personal from "./pages/Personal";
import Work from "./pages/Work";
import Studies from "./pages/Studies";
import Grocery from "./pages/Grocery";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<p>This page doesn't exist</p>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
