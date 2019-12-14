import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { getColors } from "../actions/actions";

const BubblePage = ({ colorsList, getColors, isFetching }) => {
  // const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColors();
  }, []);

  console.log("Bubblepage > colorsList:", colorsList);
  // setColorList(colorsList);
  return (
    <>
      <ColorList colors={colorsList} />
      <Bubbles colors={colorsList} />
    </>
  );
};

const mapStateToProps = state => ({
  colorsList: state.colorsList,
  isFetching: state.isFetching
});

export default connect(mapStateToProps, { getColors })(BubblePage);
