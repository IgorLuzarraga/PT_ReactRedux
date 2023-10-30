import { Outlet } from "react-router-dom";
import Header from "./scenes/Header";
import SelectFooter from "./scenes/footer/SelectFooter";

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-[720px] mt-20">
        <Outlet />
      </main>
      <SelectFooter />
    </>
  );
};

export default App;
