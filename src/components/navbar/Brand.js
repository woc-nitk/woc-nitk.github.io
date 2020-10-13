import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-min.png";

const Brand = () => {
  return <Link to="/" style={{ width: "50px" }}><Image src={logo} alt="Winter of Code Logo" /></Link>;
};

export default Brand;

const Image = styled.img`
  height: 50px;
  margin: auto 0;
`;
