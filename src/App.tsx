import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </main>
    </>
  );
}

export default App;
