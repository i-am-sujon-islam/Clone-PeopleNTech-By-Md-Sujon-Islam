import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "./Container";

const TopMenu = () => {
  return (
    <div className="w-full h-full bg-[#212832] text-white/85">
      <Container>
        <div className="flex justify-between items-center py-3">
          <div className="flex justify-center items-center gap-3 font-bold text-[14px] tracking-tight">
            <h3>+880961-333-7448/+8801799-446655,01929-554499</h3>
            <Link to="info@peoplentech.com.bd">info@peoplentech.com.bd</Link>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link to="https://twitter.com/peoplentech1?lang=en">
              <FaTwitter className=" w-6 h-6 rounded-full" />
            </Link>
            <Link to="https://www.facebook.com/peoplentechbd">
              <FaFacebook className=" w-6 h-6 rounded-full" />
            </Link>
            <Link to="https://www.youtube.com/@PeopleNTechBangladesh">
              <FaYoutube className=" w-6 h-6 rounded-full" />
            </Link>
            <Link to="https://www.linkedin.com/company/peoplentech-institute/">
              <FaLinkedin className=" w-6 h-6 rounded-full" />
            </Link>
            <select className="text-black p-2 bg-[#FF9800] rounded-md">
              <option value="EN">EN</option>
              <option value="BN">BN</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopMenu;
