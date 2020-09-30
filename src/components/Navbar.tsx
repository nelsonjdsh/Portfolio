import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import avatar from "../nelson-v1.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },

  // tittle: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   // transform: "translate(-50%, -50%)",
  //   width: "100vw",
  //   // textAlign: "center",
  //   // zIndex: 1,
  // },

  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(10),
    // height: theme.spacing(13),
    height: "auto",
    maxWidth: "60%",
  },

  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    // listPath: "/Home",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    // listPath: "/Home",
  },
];

const Navbar = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    right: false,
  });

  const toogleSlider = (slider: any, open: any) => () => {
    setState({ ...state, [slider]: open });
  };

  function sideList(slider: any) {
    return (
      <Box
        onClick={toogleSlider(slider, false)}
        className={classes.menuSliderContainer}
        component="div"
      >
        <Avatar className={classes.avatar} src={avatar} alt="Example" />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            // <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItem button key={key}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={lsItem.listText}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toogleSlider("right", true)}>
              <MenuIcon style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobilRightMenuSlider
              anchor="left"
              open={state.right}
              onClose={toogleSlider("right", false)}
            >
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
