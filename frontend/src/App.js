import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/login";
import Signup from "./features/auth/signup";
import Dashboard from "./features/dashboard/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
