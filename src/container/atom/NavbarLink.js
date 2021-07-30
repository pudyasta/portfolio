import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../../App";

const useStyles = makeStyles({
  navlink: {
    textDecoration: "none",
    margin: "auto",
    color: "#7e7e7e",
  },
  selected: {
    color: "#000000",
    borderBottom: "2px solid #000",
    transition: "border-bottom .5s ease-in-out",
  },
});

const NavbarLink = (props) => {
  const classes = useStyles();
  const dispatch = useContext(UserContext);
  return (
    <>
      <NavLink
        exact
        to={props.to}
        activeClassName={classes.selected}
        className={classes.navlink}
        // onClick={() => dispatch({ type: "set-loading" })}
      >
        {props.children}
      </NavLink>
    </>
  );
};

export default NavbarLink;
