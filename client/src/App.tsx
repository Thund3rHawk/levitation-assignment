import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import { useContext, ReactNode, useState} from "react";
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
  return login ? children : <Navigate to="/sign-in" />;
}

function App() {
  // const {setLogin} = useContext (UserContext)
  // useEffect (()=>{
  //   if (localStorage.getItem("userData")){
  //     setLogin(true);
  //   }
  // },[]);

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
