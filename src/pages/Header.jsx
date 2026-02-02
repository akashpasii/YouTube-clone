import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

class Header extends Component {
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
      <div className="w-full bg-[#151515] text-white">
        <Navbar toggleSidebar={this.toggleSidebar} />
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

export default Header;
