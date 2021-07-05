import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  setData,
  deleteColor,
  startEdit,
  saveEdit,
  handleChange,
  addColor,
  logout,
  cancelEdit
} from "../actions/actions";
//

const ColorList = ({
  //mapStateToProps
  colors,
  editing,
  newColor,
  colorToEdit,
  //import from '../actions/actions'
  deleteColor,
  startEdit,
  saveEdit,
  handleChange,
  addColor,
  logout,
  cancelEdit
}) => {
  console.log("ColorList > colors:", colors);

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.id} onClick={() => startEdit(color.id)}>
            <span>
              <span
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  deleteColor(color);
                }}
              >
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            saveEdit(colorToEdit);
          }}
        >
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e => handleChange(e, "colortoEdit")}
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              name="code"
              onChange={e => handleChange(e, "colorToEdit")}
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={cancelEdit}>cancel</button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={e => {
            addColor(e, newColor);
          }}
        >
          <legend>new color</legend>
          <label>
            color name:
            <input
              name="color"
              onChange={e => handleChange(e, "newColor")}
              value={newColor.color}
            />
          </label>
          <label>
            hex code:
            <input
              name="code"
              onChange={e => handleChange(e, "newColor")}
              value={newColor.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">Add Color</button>
          </div>
        </form>
      )}
      <Link to="/" onClick={logout}>
        <div
          style={{
            background: "blue",
            color: "white",
            padding: "10px 5px",
            margin: "30px 0px"
          }}
        >
          Logout
        </div>
      </Link>
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

const mapStateToProps = state => ({
  colors: state.colorsList,
  editing: state.isEditing,
  colorToEdit: state.colorToEdit,
  newColor: state.newColor
});

export default connect(mapStateToProps, {
  setData,
  deleteColor,
  startEdit,
  saveEdit,
  handleChange,
  addColor,
  logout,
  cancelEdit
})(ColorList);
