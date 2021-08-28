import "./App.css";
import React from "react";
import Title from "./components/Title";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* Importing Title dynamically using componen from components */}

      <div className="title">
        <Title appName="Text Analyser" />
      </div>

      {/* Main text editor part */}
      <div className="container my-3">
        {/* TextForm through componenets */}
        <TextForm heading="Enter your text to analyse :" />
      </div>
    </>
  );
}

export default App;
