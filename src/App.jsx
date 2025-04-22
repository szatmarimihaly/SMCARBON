import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Shop from "./pages/Shop"
import { auth } from "./firebase"
import { useState, useEffect } from "react"


const RequireAuth = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if(user === undefined){
    return <div>Loading...</div>;
  }

return user ? children : <Navigate to="/signin" />; 

}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/shop" element={<RequireAuth><Shop/></RequireAuth>} />
      </Routes>
    </Router>
  )
}

export default App
