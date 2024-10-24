import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import { useContext, ReactNode, useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import PdfPage from "./pages/PdfPage";

function UserProvider({ children }: { children: ReactNode }) {
  const [login, setLogin] = useState(false);
  return (
    <UserContext.Provider value={{ login, setLogin }}>
      {children}
    </UserContext.Provider>
  );
}

// ProtectedRoute component
function ProtectedRoute({ children }: { children: ReactNode }) {
  const { login } = useContext(UserContext);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!login && !isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
}

function App() {
  const { setLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setLogin(isLoggedIn);
      setIsLoading(false);
    };

    checkAuth();
  }, [setLogin]);

  useEffect(() => {
    if (!isLoading) {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      if (isLoggedIn) {
        navigate("/home", { replace: true });
      }
    }
  }, [isLoading, navigate]);

  if (isLoading) {
    return null;
  }

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pdf"
          element={
            <ProtectedRoute>
              <PdfPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserProvider>
  );
}

export default App;
