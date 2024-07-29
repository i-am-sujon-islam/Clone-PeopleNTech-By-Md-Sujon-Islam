import React from "react";
import { GrAchievement } from "react-icons/gr";
import { IoBookOutline, IoPeopleSharp } from "react-icons/io5";
import { LuCopyCheck } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";
import avatar from "../assets/avatar.png";
import bannerimg from "../assets/Hero-Side-Image.webp";
import "../index.css";
import BannerServicsCard from "./BannerServicsCard";
import Container from "./Container";
const Banner = () => {
  return (
    <div className="bg-gray-200">
      <Container>
        <div className="grid grid-cols-2 py-8 lg:mr-8">
          <div>
            <h3 className=" flex justify-center gap-1 text-lg text-sky-500 py-10">
              <span>
                <LuCopyCheck />
              </span>{" "}
              Global Leader In Professional Skill Development & Job Placement
            </h3>
            <h1 className="text-3xl font-semibold pb-4">
              Creating Skilled{" "}
              <span className="text-red-600">
                Manpower, Freelancer & Entrepreneur
              </span>
              Since 2005
            </h1>
            <p className="w-2/3">
              Pioneering professional skill development with expert mentors,
              ensuring continuous success through strategic job placements in
              the tech sector. A proven pathway to thriving careers in the
              dynamic digital landscape
            </p>
            <div className="flex justify-between items-center my-3">
              <BannerServicsCard
                icon={<IoBookOutline />}
                number="70+"
                title="Courses"
              />
              <BannerServicsCard
                icon={<IoPeopleSharp />}
                number="200+"
                title="Experienced teachers"
              />
              <BannerServicsCard
                icon={<TfiCup />}
                number="10K+"
                title="Successful students"
              />
            </div>
          </div>
          <div className="relative">
            <div>
              <h2 className="text-lg font-semibold absolute top-24 left-0 bg-white/90 rounded-xl py-4 px-6 flex justify-center items-center gap-2">
                <span className="text-sky-400 text-xl">
                  <GrAchievement />
                </span>
                Get A Discount Offers
              </h2>
            </div>
            <img src={bannerimg} alt="bannerimg" />
            <div className="cardAnimation absolute right-0 bottom-32 bg-white/90 p-3 rounded-xl">
              <h3 className="text-lg text-sky-500">10K Successful Students</h3>
              <img src={avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
