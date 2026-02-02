import React from "react";
import video from "../assets/video.mp4";
import jack from "../assets/jack.png";
import thumbnail1 from "../assets/thumbnail1.png"
import gerard from "../assets/gerard.png"
import {Link} from "react-router-dom"
import { ThumbsUp, ThumbsDown, Share, Brain, Bookmark,EllipsisVertical } from "lucide-react";

let videoitems = [
  {
    icon: Share,
    name: "Share",
  },
  {
    icon: Brain,
    name: "Brain",
  },
  {
    icon: Bookmark,
    name: "Save",
  },
];

let videoitems2 = [
  {
    icon: Share,
    name: "Share",
  },
  {
    icon: Brain,
    name: "Brain",
  },
];

let videoRenders = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7,8];


const VideoPage = () => {
  return (
    <div className="min-h-screen font-[Roboto] w-full flex flex-col lg:flex-row bg-[#151515] text-white pt-16 lg:px-4">
      <video src={video} className="lg:hidden" controls muted></video>
      <div className="flex flex-col w-full px-1 lg:px-6 lg:flex-row gap-4">
        <div className="video-section w-full lg:w-[80%]">
          <video
            src={video}
            className="hidden w-full lg:block lg:rounded-xl lg:mt-4"
            controls
            autoPlay
            muted
          ></video>
          <h1 className="text-[22px] leading-8 font-semibold pt-4">
            Create Youtube Clone Using React JS | Bulid Complete Website Like
            YouTube In React JS 2024
          </h1>
          <div className="xl:flex justify-between items-center">
            <div className="flex items-center mb-3.5">
              <div className="flex items-center gap-4">
                <img src={jack} className="w-10 rounded-[50%]" />
                <div>
                  <h1 className="font-medium text-lg">GraeteStack</h1>
                  <p className="text-[12px] text-neutral-400">
                    12.2 lakh subscribers
                  </p>
                </div>
              </div>
              <div className="bg-white text-black ml-14 flex justify-center items-center px-4.5 py-2 rounded-4xl">
                <button className="font-semibold">Subscribe</button>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex gap-2 bg-neutral-800 px-4 py-2 rounded-4xl">
                <div className="flex justify-center items-center gap-2 border-r border-neutral-600 pr-4">
                  <ThumbsUp />
                  <p>5K</p>
                </div>
                <ThumbsDown />
              </div>
              <div className="flex">
                <div className="flex gap-2 lg:hidden">
                  {videoitems2.map((each) => (
                    <div className="flex justify-center items-center gap-2 bg-neutral-800 px-4 rounded-4xl">
                      <each.icon />
                      <p>{each.name}</p>
                    </div>
                  ))}
                </div>
                <div className="hidden lg:flex gap-2">
                  {videoitems.map((each) => (
                    <div className="flex justify-center items-center gap-2 bg-neutral-800 px-4 rounded-4xl">
                      <each.icon />
                      <p>{each.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
            <div className="p-4 bg-neutral-800 my-4 rounded-xl">
                <p>61 lakh views 1 year ago</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, aliquid. Nostrum cumque odio quibusdam at veniam. Voluptate ducimus ipsam facere vero obcaecati distinctio officiis nam vel?</p>
            </div>
        </div>
        <div className="recement-section w-full lg:w-[40%]">
            <div className="gap-4">
            {videoRenders.map((each) => (
              <Link to="/videopage">
                <div className="flex flex-col w-full gap-2 cursor-pointer grow lg:flex-row justify-center items-start mt-4">
                  <img src={thumbnail1} className="w-full lg:w-[40%] rounded-xl" />
                  <div className="flex lg:flex-row justify-between items-start mt-3.5 w-full tracking-normal">
                    <div className="flex">
                      <div className="flex flex-col justify-start">
                        <p className="text-[14px] font-[Roboto] text-white leading-none">
                          creat a video
                        </p>
                        <p className="text-neutral-400 text-[12px]">make your</p>
                        <div>
                          <p className="flex items-center whitespace-nowrap gap-1 text-neutral-400 text-[12px]">
                            40 lakh views{" "}
                            <span className="mb-auto leading-none">.</span> 2
                            years ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <EllipsisVertical />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
