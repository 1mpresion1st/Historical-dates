import { use, useEffect } from "react";
import { Typography } from "../components/Typography/Typography";


interface MainPageProps {
  testProp: string;
}

export const MainPage = ({testProp}: MainPageProps) => {
  
  
  return (
    <Typography variant="h1" color="primary" align="center">
      {testProp}
    </Typography>
  );
};