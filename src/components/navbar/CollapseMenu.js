import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { useSpring, animated } from "react-spring";

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <NavLink
              to="/"
              exact
              activeStyle={{
                color: "var(--silver-3)",
                borderBottom: "2px solid var(--silver-3)",
              }}
              onClick={props.handleNavbar}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              exact
              activeStyle={{
                color: "var(--silver-3)",
                borderBottom: "2px solid var(--silver-3)",
              }}
              onClick={props.handleNavbar}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              exact
              activeStyle={{
                color: "var(--silver-3)",
                borderBottom: "2px solid var(--silver-3)",
              }}
              onClick={props.handleNavbar}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/organizations"
              exact
              activeStyle={{
                color: "var(--silver-3)",
                borderBottom: "2px solid var(--silver-3)",
              }}
              onClick={props.handleNavbar}
            >
              Orgs
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/profile"
              exact
              activeStyle={{
                color: "var(--silver-3)",
                borderBottom: "2px solid var(--silver-3)",
              }}
              onClick={props.handleNavbar}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              exact
              activeStyle={{
                color: "var(--silver-3)",
                borderBottom: "2px solid var(--silver-3)",
              }}
              onClick={props.handleNavbar}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              exact
              activeStyle={{
                color: "var(--silver-3)",
                borderBottom: "2px solid var(--silver-3)",
              }}
              onClick={props.handleNavbar}
            >
              Signup
            </NavLink>
          </li> */}
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: var(--dark-2);
  position: fixed;
  top: 6rem;
  left: 0;
  right: 0;
  z-index: 2;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: var(--silver-0);
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--silver-3);
      border-bottom: 1px solid var(--silver-3);
    }
  }
`;
