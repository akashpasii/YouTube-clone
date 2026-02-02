import React, { Component } from "react";
import Main from "../components/Main";

class MainPage extends Component {
  state = {
    mainItems: "All",
  };

  toggleMainItem = (item) => {
    this.setState({
      mainItems: item,
    });
  };

  render() {
    const {mainItems} = this.state
    return <Main mainItems={mainItems} toggleMainItem={this.toggleMainItem} />;
  }
}

export default MainPage;
