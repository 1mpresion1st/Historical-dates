import React from "react";
import "../styles/main.scss";
import { Typography } from "./Typography/Typography";
import { MainPage } from "../pages/main";

const App: React.FC = () => {
  return (
    <div>
      <MainPage testProp="test" />
    </div>
  );
};

export default App;
