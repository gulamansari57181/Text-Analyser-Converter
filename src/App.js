import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* Importing Navbar from components */}

      <Navbar appName="Hello" />
      <div className="container my-3">
        {/* Navbar through componenets */}
        <TextForm heading="Enter your text to analyze." />
      </div>
    </>
  );
}

export default App;
