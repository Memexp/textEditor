import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: null,
    Weight: false,
    Style: false,
    DecorationLine: false
  };
  selectColor = color => {
    const newColor = color;
    this.setState({ color: newColor });
  };

  selectStyle = style => {
    if (style === "bold") {
      this.setState({
        Weight: !this.state.Weight
      });
    } else if (style === "italic") {
      this.setState({
        Style: !this.state.Style
      });
    } else {
      this.setState({
        DecorationLine: !this.state.DecorationLine
      });
    }
  };

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => this.selectStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.selectColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.Weight ? "bold" : "",
            fontStyle: this.state.Style ? "italic" : "",
            textDecorationLine: this.state.DecorationLine ? "underline" : ""
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
