import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, selectMode] = useState("light");
  const [Aler, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const tglMode = () => {
    console.log("Hello toggle");
    if (mode === "light") {
      selectMode("dark");
      document.body.style.backgroundColor = "#282349";
      showAlert("Dark Mode is Enabled", "success");
    } else {
      selectMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="Text Analyzer"
        mode={mode}
        toggleMode={tglMode}
      />
      <Alert alert={Aler} />

      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the Text to Analyze "
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route
            path="About"
            element={
              <About/>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
