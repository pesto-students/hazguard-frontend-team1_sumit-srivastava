import Sortby from "../SortBy/Sortby";
import React from "react";
import { views, bookmark } from "../../assets/assets";
const Post = () => {
  return (
    <div className=" w-100% no:mx-[15px] md:mx-[30px] h-[600px] mt-[30px] flex justify-between items-center">
      <div className="no:w-[100%] md:w-[78.5%] h-[100%] flex flex-col items-stretch justify-between">
        <div className="w-[100%] h-[23%] bg-[#fff] rounded-[20px] flex flex-col items-center justify-stretch">
          <div className="flex w-[100%] h-[15%] justify-between px-3 pt-1 font-[Arial] text-[#677094] text-[15px] font-[700]">
            <p>Godrej Industry</p>
            <p>20:33 30/07/2022</p>
          </div>
          <div className="w-[100%] h-[60%] px-3 flex justify-center items-center text-[#272343] font-[700] font-[Arial]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dolor accusantium numquam exercitationem officia! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Perspiciatis provident
            tenetur dolorem iure atque at ex iste illum tempora voluptate!
          </div>
          <div className="w-[100%] h-[15%] px-3 flex justify-between items-center">
            <p className="font-[Arial] text-[#677094] text-[15px] font-[700]">
              Hazard Type: Safety
            </p>
            <div className="flex justify-center items-center">
              <div className="flex mr-4">
                <img src={views} alt="views" className="w-[20px]" />
                <p className="font-[Arial] text-[#677094] text-[15px] font-[700] ml-1">
                  107
                </p>
              </div>
              <button className="bg-[#EED132] text-[#FFF] w-[200px] h-[35px] rounded-[40px] font-[Arial] text-[18px] font-[700]">
                Solution
              </button>
              <button>
                <img src={bookmark} alt="bookmark" className="w-[20px] ml-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[23%] bg-[#fff] rounded-[20px]">
          <div className="flex w-[100%] h-[15%] justify-between px-3 pt-1 font-[Arial] text-[#677094] text-[15px] font-[700]">
            <p>Godrej Industry</p>
            <p>20:33 30/07/2022</p>
          </div>
          <div className="w-[100%] h-[60%] px-3 flex justify-center items-center text-[#272343] font-[700] font-[Arial]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dolor accusantium numquam exercitationem officia! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Perspiciatis provident
            tenetur dolorem iure atque at ex iste illum tempora voluptate!
          </div>
          <div className="w-[100%] h-[15%] px-3 flex justify-between items-center">
            <p className="font-[Arial] text-[#677094] text-[15px] font-[700]">
              Hazard Type: Safety
            </p>
            <div className="flex justify-center items-center">
              <div className="flex mr-4">
                <img src={views} alt="views" className="w-[20px]" />
                <p className="font-[Arial] text-[#677094] text-[15px] font-[700] ml-1">
                  107
                </p>
              </div>
              <button className="bg-[#EED132] text-[#FFF] w-[200px] h-[35px] rounded-[40px] font-[Arial] text-[18px] font-[700]">
                Solution
              </button>
              <button>
                <img src={bookmark} alt="bookmark" className="w-[20px] ml-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[23%] bg-[#fff] rounded-[20px]">
          <div className="flex w-[100%] h-[15%] justify-between px-3 pt-1 font-[Arial] text-[#677094] text-[15px] font-[700]">
            <p>Godrej Industry</p>
            <p>20:33 30/07/2022</p>
          </div>
          <div className="w-[100%] h-[60%] px-3 flex justify-center items-center text-[#272343] font-[700] font-[Arial]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dolor accusantium numquam exercitationem officia! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Perspiciatis provident
            tenetur dolorem iure atque at ex iste illum tempora voluptate!
          </div>
          <div className="w-[100%] h-[15%] px-3 flex justify-between items-center">
            <p className="font-[Arial] text-[#677094] text-[15px] font-[700]">
              Hazard Type: Safety
            </p>
            <div className="flex justify-center items-center">
              <div className="flex mr-4">
                <img src={views} alt="views" className="w-[20px]" />
                <p className="font-[Arial] text-[#677094] text-[15px] font-[700] ml-1">
                  107
                </p>
              </div>
              <button className="bg-[#EED132] text-[#FFF] w-[200px] h-[35px] rounded-[40px] font-[Arial] text-[18px] font-[700]">
                Solution
              </button>
              <button>
                <img src={bookmark} alt="bookmark" className="w-[20px] ml-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[23%] bg-[#fff] rounded-[20px]">
          <div className="flex w-[100%] h-[20%] justify-between px-3 pt-1 font-[Arial] text-[#677094] text-[15px] font-[700]">
            <p>Godrej Industry</p>
            <p>20:33 30/07/2022</p>
          </div>
          <div className="w-[100%] h-[60%] max-h-[60%] px-3 flex justify-center items-center text-[#272343] font-[700] font-[Arial] text-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dolor accusantium numquam exercitationem officia! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Perspiciatis provident
            tenetur dolorem iure atque at ex iste illum tempora voluptate!
          </div>
          <div className="w-[100%] h-[20%] px-3 flex justify-between items-center">
            <p className="font-[Arial] text-[#677094] text-[15px] font-[700]">
              Hazard Type: Safety
            </p>
            <div className="flex justify-center items-center">
              <div className="flex mr-4">
                <img src={views} alt="views" className="w-[20px]" />
                <p className="font-[Arial] text-[#677094] text-[15px] font-[700] ml-1">
                  107
                </p>
              </div>
              <button className="bg-[#EED132] text-[#FFF] w-[200px] h-[35px] rounded-[40px] font-[Arial] text-[18px] font-[700]">
                Solution
              </button>
              <button>
                <img src={bookmark} alt="bookmark" className="w-[20px] ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Sortby/>
    </div>
  );
};

export default Post;
