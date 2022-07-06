import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material"; //stack component from material ui is used to add layout to immediate chils elements.
import Logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px", //sm-small
          xs: "40px", //xs-extra small
        },
        mt: { sm: "32px", xs: "20px" }, //mt- margin top
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" aliginItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            borderBottom: "3px solid #FF2625",
            color: "#3A1212",
          }}
        >
          {" "}
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
