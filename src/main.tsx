import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.tsx";
import App from "./App";
import Login from "./pages/login/Login.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ShowUsers } from "./features/user/ShowUsers.tsx";
import Landing from "./pages/landing/Landing.tsx";
import WithAuthProtection from "./components/HOC/WithAuthProtection.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Landing />} />
            <Route path="/home" element={<Landing />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/users"
              element={
                // Using the Protected component to protect this route
                <WithAuthProtection>
                  <ShowUsers />
                </WithAuthProtection>
              }
            />
          </Route>
        </Routes>
      </AppContextProvider>
    </Provider>
  </BrowserRouter>,
);
