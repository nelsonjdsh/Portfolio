import React from "react";
import NavBar from "./Navbar";
import Header from "./Header";
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles({
//   particlesCanva: {
//     position: "absolute",
//   },
// });

const Home = () => {
  // const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Header />
    </div>
  );
};

export default Home;
