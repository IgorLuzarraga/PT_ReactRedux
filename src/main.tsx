import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.tsx";
import App from "./App";
import Login from "./pages/login/Login.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ShowUsers } from "./features/user/ShowUsers.tsx";
import WithAuthProtection from "./components/HOC/WithAuthProtection.tsx";
import RouteNotFound from "./components/RouteNotFound.tsx";
import SelectLanding from "./pages/landing/SelectLanding.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<SelectLanding />} />
            <Route path="/home" element={<SelectLanding />} />
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
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </AppContextProvider>
    </Provider>
  </BrowserRouter>,
);
