import "./App.css";
import Title from "./components/Title";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* Importing Navbar from components */}

      <div className="title">
        <Title appName="Text Analyzer" />
      </div>
      <div className="container my-3">
        {/* NTextForm through componenets */}
        <TextForm heading="Enter your text to analyze :" />
      </div>
    </>
  );
}

export default App;
