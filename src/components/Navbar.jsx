import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Youtube, Search, Mic, Plus, Bell } from "lucide-react";

class Navbar extends Component {
  render() {
    const { toggleSidebar } = this.props;
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between pl-2.5 pr-6 py-2 bg-[#151515]">
        <div className="flex justify-center items-center gap-2">
          <div className="hover:bg-neutral-700 p-2.5 rounded-[50%] cu-item">
            <Menu size={22} onClick={this.props.toggleSidebar} />
          </div>
          <Link to="/">
            <div className="flex justify-center items-center cu-item">
              <Youtube color="#903737" className="w-8 h-8" />
              <div className="flex">
                <h1 className="text-2xl text-bold">YouTube</h1>
                <span className="text-xs font-semibold text-gray-500">IN</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="justify-center items-center w-full hidden gap-4 lg:flex">
          <div className="flex border-gray-600 border border-solid w-[60%] rounded-full">
            <input
              type="text"
              className="w-full px-4 outline-none"
              placeholder="Search"
            />
            <div className="p-2 px-4 rounded-r-full bg-gray-900 cu-item">
              <Search className="" />
            </div>
          </div>
          <div className="p-2 rounded-[20px] bg-neutral-800 cu-item">
            <Mic />
          </div>
        </div>
        <div className="flex justify-between items-center gap-3.5 lg:gap-4">
          <div className="flex border-gray-600 border lg:hidden border-solid w-[60%] rounded-full">
            <input className="w-full bg-neutral-800 rounded-l-full outline-none px-2" />
            <div className="p-2 px-4 rounded-r-full bg-neutral-600 cu-item">
              <Search className="lg:hidden cu-item" />
            </div>
          </div>
          <Bell className="hidden" />
          <div className="flex justify-center items-center w-8.5 h-8.5 rounded-full bg-green-800 cu-item">
            <span className="text-white">a</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
