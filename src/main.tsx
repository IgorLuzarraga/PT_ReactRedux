import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.tsx";
import App from "./App";
import Login from "./pages/login/Login.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ShowUsers } from "./features/user/ShowUsers.tsx";

// import FormProfile from './components/FormProfile';
// import AboutUs from './pages/AboutUs/AboutUs';
// import { Home } from './pages/Home.jsx';
// import Login from './pages/Login.jsx';
// import Profile from './pages/Profile';
// import Ruteros from './pages/Ruteros/Ruteros.jsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route index element={<Home />} />

          <Route path="/ruteros" element={<Ruteros />} />
          <Route path="/aboutUs" element={<AboutUs />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
         */}
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<ShowUsers />} />
          </Route>
        </Routes>
      </AppContextProvider>
    </Provider>
  </BrowserRouter>,
);
