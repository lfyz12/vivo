import './App.css';
import Header from "./components/Header/Header";
import InfoBar from "./components/InfoBar";
import Main from "./components/Main/Main";
import ActionSection from "./components/ActionSection";
import InfoSection from "./components/InfoSection";
import FormToCallback from "./components/FormToCallback";
import Feedback from "./components/Feedback/Feedback";
import FormToAdvice from "./components/FormToAdvice";
import Rule from "./components/Rule";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import React from "react";

function App() {
  return (
    <div className="App">
        <Header/>
        <InfoBar/>
        <Main/>
        <ActionSection/>
        <InfoSection/>
        <FormToCallback/>
        <Feedback/>
        <FormToAdvice/>
        <Rule/>
        <Footer/>
        <CopyRight/>

    </div>
  );
}

export default App;
