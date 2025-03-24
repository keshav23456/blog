import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import "./App.css";
import { logout } from "./store/authSlice";
import { login } from "./store/authSlice";
import { Header } from "./components";
import { Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);//useeffect lake true kartenge
  const dispatch = useDispatch();//global mein changes honge

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());//kuch na kuch to ho login mrin false hoga 
          //logout mein true ho jayega
        }
      })
      .finally(() => setLoading(false));
  }, []);
  //conditional loading
  return !loading ? (
    <div className="min-h-sc flex-wrap content-between bg-gray">
      <div className="w-full block">
        <Header />
        <main>
           <Outlet />
           {/* //react router dom  se outlet aayega*/}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;

//database ya network se puchne ke liye loading bana lena is good bcoz it will allow conditional rendering
