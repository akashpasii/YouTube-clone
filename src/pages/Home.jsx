import React, { Component } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

class Home extends Component {
  state = {
    showSidebar: false,
    showmoreExplore: false,
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      showSidebar: !prevState.showSidebar,
    }));
  };

  toggleShowmore = () => {
    this.setState((prevState) => ({
      showmoreExplore: !prevState.showmoreExplore,
    }));
  };

  render() {
    const { showSidebar, showmoreExplore, mainItems } = this.state;
    return (
      <div className="h-20vw w-full bg-[#151515] text-white">
        <Header toggleSidebar={this.toggleSidebar} />
        <div className="flex flex-1 relative">
          <Sidebar
            visible={showSidebar}
            showmoreExplore={showmoreExplore}
            toggleShowmore={this.toggleShowmore}
            toggleSidebar={this.toggleSidebar}
          />
        </div>
      </div>
    );
  }
}

export default Home;
