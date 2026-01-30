import React from "react";
import {
  Menu,
  Youtube,
  House,
  SquarePlay,
  ChevronRight,
  History,
  ListMinus,
  Clock,
  ThumbsUp,
  Video,
  CornerLeftDown,
  Handbag,
  Library,
  Popcorn,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  GraduationCap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import cameron from "../assets/cameron.png";
import gerard from "../assets/gerard.png";
import jack from "../assets/jack.png";
import megan from "../assets/megan.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";

let ad = [
  { avaterimage: cameron, name: "cameron" },
  { avaterimage: gerard, name: "gerard" },
  { avaterimage: jack, name: "jack" },
  { avaterimage: megan, name: "megan" },
  { avaterimage: simon, name: "simon" },
  { avaterimage: tom, name: "tom" },
];

let adIcon = [
  { sidebarSectionicons: History, sidebarSectionName: "History" },
  { sidebarSectionicons: ListMinus, sidebarSectionName: "Playlists" },
  { sidebarSectionicons: Clock, sidebarSectionName: "Watch Later" },
  { sidebarSectionicons: ThumbsUp, sidebarSectionName: "Liked videos" },
  { sidebarSectionicons: Video, sidebarSectionName: "Your videos" },
  { sidebarSectionicons: CornerLeftDown, sidebarSectionName: "Downloads" },
];

let someExploreOtherContent = [
  { sidebarExploreContentIcon: Handbag, sidebarExploreContentName: "Shopping" },
  { sidebarExploreContentIcon: Library, sidebarExploreContentName: "Library" },
  { sidebarExploreContentIcon: Popcorn, sidebarExploreContentName: "Popcorn" },
];

let someExploreOtherContent2 = [
  { sidebarExploreContentIcon: Radio, sidebarExploreContentName: "Radio" },
  {
    sidebarExploreContentIcon: Gamepad2,
    sidebarExploreContentName: "Gamepad2",
  },
  {
    sidebarExploreContentIcon: Newspaper,
    sidebarExploreContentName: "Newspaper",
  },
  { sidebarExploreContentIcon: Trophy, sidebarExploreContentName: "Trophy" },
  {
    sidebarExploreContentIcon: GraduationCap,
    sidebarExploreContentName: "GraduationCap",
  },
  { sidebarExploreContentIcon: Handbag, sidebarExploreContentName: "Shopping" },
];

const Sidebar = (props) => {
  const { visible, showmoreExplore } = props;
  return (
    <div
      className={`w-60 h-screen justify-start bg-[#151515] fixed py-2 top-0 left-0 flex flex-col transition-transform duration-300 ease-in-out z-50 ${visible ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex justify-start items-center gap-2 pl-4 mb-2">
        <div className=" active:bg-neutral-800 p-2.5  rounded-[50%] cu-item">
          <Menu size={22} onClick={props.toggleSidebar} />
        </div>
        <div className="flex justify-center items-center cu-item">
          <Youtube color="#903737" className="w-8 h-8" />
          <div className="flex">
            <h1 className="text-2xl text-bold">YouTube</h1>
            <span className="text-xs font-semibold text-gray-500">IN</span>
          </div>
        </div>
      </div>

      <div className="scrollbar-container flex-1 overflow-y-auto scrollbar-thumb-gray-800">
        <div className="sidebar-border">
          <div className="ml-3.5 py-2.5">
            <div className="hoversidebar-item bg-neutral-800">
              <House />
              <h3>Home</h3>
            </div>
            <div className="hoversidebar-item">
              <SquarePlay />
              <h3>Shorts</h3>
            </div>
          </div>
        </div>

        <div className="sidebar-border">
          <div className="ml-3.5 py-2.5">
            <h2 className="hoversidebar-item gap-2! font-medium font-[Roboto] ">
              Subscriptions
              <span>
                <ChevronRight size={16} />
              </span>
            </h2>
            {ad.map((each) => (
              <div className="hoversidebar-item">
                <img src={each.avaterimage} className="w-8 rounded-full" />
                <p>{each.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-border">
          <div className="ml-3.5 py-2.5">
            <h2 className="hoversidebar-item gap-2! font-medium font-[Roboto]">
              You
              <span>
                <ChevronRight size={16} />
              </span>
            </h2>

            {adIcon.map((each) => (
              <div className="hoversidebar-item">
                <each.sidebarSectionicons size={24} />
                <p>{each.sidebarSectionName}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="ml-3.5 py-2.5">
            <h2 className="hoversidebar-item gap-2! font-medium font-[Roboto]">
              Explore
            </h2>
            {someExploreOtherContent.map((each) => (
              <div className="hoversidebar-item">
                <each.sidebarExploreContentIcon size={24} />
                <p>{each.sidebarExploreContentName}</p>
              </div>
            ))}
            <h2
              className={`hoversidebar-item gap-2! font-medium font-[Roboto] ${showmoreExplore ? "hidden!" : "flex!"}`}
              onClick={props.toggleShowmore}
            >
              <span>
                <ChevronDown />
              </span>
              Show more
            </h2>
            <div className={`${showmoreExplore ? "block" : "hidden"}`}>
              {someExploreOtherContent2.map((each) => (
                <div>
                  <div className="hoversidebar-item">
                    <each.sidebarExploreContentIcon size={24} />
                    <p>{each.sidebarExploreContentName}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2
              className={`hoversidebar-item gap-2! font-medium font-[Roboto] ${showmoreExplore ? "flex!" : "hidden!"}`}
              onClick={props.toggleShowmore}
            >
              <span>
                <ChevronUp />
              </span>
              Show fever
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
