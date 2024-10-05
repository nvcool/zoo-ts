import { Route, Routes } from "react-router-dom";
import { Partners } from "./pages/Partners";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { News } from "./pages/News";
import { NewsIvent } from "./pages/NewsIvent";
import { Zoo } from "./pages/Zoo";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Routes>
          <Route element={<Partners />} path="/" />
          <Route element={<Partners />} path="/partners" />
          <Route element={<News />} path="/news" />
          <Route element={<NewsIvent />} path="/news-ivent" />
          <Route element={<Zoo />} path="/zoo" />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
