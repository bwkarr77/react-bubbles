import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { getColors } from "../actions/actions";

const BubblePage = ({ colorsList, getColors, reFetch }) => {
  // const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColors();
  }, []);

  console.log("Bubblepage > colorsList:", colorsList);
  // setColorList(colorsList);
  return !colorsList ? (
    <div>LOADING THE RAINBOW...</div>
  ) : (
    <div className="bubblesContent">
      <ColorList />
      <Bubbles />
    </div>
  );
};

const mapStateToProps = state => ({
  colorsList: state.colorsList,
  reFetch: state.reFecth
});

export default connect(mapStateToProps, { getColors })(BubblePage);
