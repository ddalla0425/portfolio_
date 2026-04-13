import "./App.css";
import { Header } from "./components/common/Header";
import MainLayout from "./layouts/MainLayout";
import { useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <MainLayout />
    </>
  );
}

export default App;
