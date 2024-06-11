import { Route, Routes } from "react-router-dom";

import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Index from "@pages/Index/Index";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
