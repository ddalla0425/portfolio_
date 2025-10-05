import './App.css';
import Header from "./components/common/Header";
import MainLayout from "./layouts/MainLayout";
import {useState} from "react";

function App() {
    const [showNav, setShowNav] = useState(false);

    return (
      <>
          <Header showNav={showNav} setShowNav={setShowNav} />
          <MainLayout />
      </>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       리엑트 프로젝트 준비
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
