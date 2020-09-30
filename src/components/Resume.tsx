import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <>
      <Navbar />
      <Typography variant="h4" style={{ color: "tan" }}>
        This is a Test
      </Typography>
    </>
  );
};

export default Resume;
