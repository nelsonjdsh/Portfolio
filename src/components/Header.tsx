import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import avatar from "../nelson-v1.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(10),
    // height: theme.spacing(15),
    margin: theme.spacing(1),
    maxWidth: "100%",
    height: "auto",
    display: "flex",
  },
  tittle: {
    color: "tomato",
  },
  subtittle: {
    color: "tan",
    marginBottom: "3rm",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Nelson" />
      </Grid>
      <Typography className={classes.tittle} variant="h4">
        <Typed
          // showCursor={false}
          strings={["Nelson Santos"]}
          typeSpeed={80}
          backSpeed={60}
        ></Typed>
      </Typography>
      <br />
      <Typography className={classes.subtittle} variant="h5">
        <Typed
          strings={[
            "Desarrollo Web",
            "Desarrollo de Aplicaciones de Escritorio",
            "Desarrollo Mobil",
          ]}
          typeSpeed={60}
          backSpeed={70}
          // onComplete={st}
          loop
        ></Typed>
      </Typography>
    </Box>
  );
};

export default Header;
