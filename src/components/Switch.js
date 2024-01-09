import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  font-family: "Oswald", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  @media(max-width:320px){
    width :200px;
  }
`;

const Switch = (props) => {
  return (
    <Nav>
      <NavLink to="/" activeStyle style={{ textDecoration: "none" }}>
        <Button
          value="Login"
          background={props.lb}
          br="10px"
          width="90%"
        ></Button>
      </NavLink>
      <NavLink to="/sign-up" activeStyle style={{ textDecoration: "none" }}>
        <Button
          value="Sign Up"
          background={props.sb}
          br="10px"
          width="90%"
        ></Button>
      </NavLink>
    </Nav>
  );
};

export default Switch;
