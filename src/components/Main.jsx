import React from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import gerard from "../assets/gerard.png";
import {
  EllipsisVertical,
  House,
  Smartphone,
  TvMinimalPlay,
  PersonStanding,
} from "lucide-react";
let mainElement = [
  "All",
  "Web Development",
  "Podcasts",
  "AI",
  "Gaming",
  "Comic books",
  "Dramedy",
  "Tamil Cinema",
  "Media theories",
  "Ideas",
  "Strategies",
  "Thoughts",
  "History",
  "AMVS",
  "Comedy",
  "Soundtracks",
  "Tourist destinations",
  "Recently uploaded",
  "Watched",
  "New to you",
];

let leftSection = [
  { icons: House, name: "Home" },
  { icons: Smartphone, name: "Shorts" },
  { icons: TvMinimalPlay, name: "Subcriptions" },
  { icons: PersonStanding, name: "You" },
];

let videoRenders =[
  1,2,3,4,5,6,7,1,2,3,4,5,6,7
]

const Main = (props) => {
  const { mainItems } = props;
  return (
    <div className="font-[Roboto] bg-black text-white pt-16">
      <div className="flex">
        <div className="fixed left-0 top-16 mt-4 ml-1 hidden lg:flex flex-col h-screen">
          {leftSection.map((each) => (
            <div className="flex flex-col justify-center items-center mb-8">
              <each.icons />
              <p className="text-[10px]">{each.name}</p>
            </div>
          ))}
        </div>
        <div className="lg:ml-16 w-full">
          <div className="w-full max-w-[92vw] flex ml-6 gap-2.5 mt-2 overflow-x-auto pb-2 scrollbar-hide">
            {mainElement.map((each) => {
              return (
                <div key={each} onClick={() => props.toggleMainItem(each)}>
                  <button
                    type="button"
                    className={`whitespace-nowrap cu-item rounded-lg px-2.5 py-1 font-medium font-sans tracking-tighter ${mainItems === each ? "bg-white text-black" : "bg-neutral-800 text-white hover:bg-neutral-700"}`}
                  >
                    {each}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="feed gap-4 ml-6 mr-6">
            {videoRenders.map(each => (
              <div className="flex flex-col w-full cursor-pointer grow items-start mt-4">
              <img src={thumbnail1} className="w-full rounded-xl" />
              <div className="flex justify-between items-start mt-3.5 w-full tracking-normal">
                <div className="flex">
                  <img src={gerard} className="w-8 h-8 rounded-full mr-4" />
                  <div className="flex flex-col justify-start">
                    <p className="text-lg font-[Roboto] text-white leading-none">
                      creat a video
                    </p>
                    <p className="text-neutral-400">make your</p>
                    <div>
                      <p className="flex items-center gap-1 text-neutral-400 text-[14px]">
                        40 lakh views{" "}
                        <span className="mb-auto leading-none">.</span> 2 years
                        ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <EllipsisVertical />
                </div>
              </div>
            </div>
            ))}
          </div>

          {/* <div class="b-container">
            <div class="bg-blue-400 w-20 h-20 flex justify-center rounded-lg items-center">
              box
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
