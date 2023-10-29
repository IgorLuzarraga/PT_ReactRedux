import { Outlet } from "react-router-dom";
import Header from "./scenes/Header";
import Footer from "./scenes/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="border-0 border-solid border-red-500 mt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
