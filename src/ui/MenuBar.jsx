import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/PNT-orginal-PNG.png";
import Container from "./Container";
const menuItem = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Courses", link: "/courses" },
  { title: "Upcoming Batch", link: "/upcoming-batch" },
  { title: "Join Seminars", link: "/join-seminars" },
  { title: "Success Stories", link: "/success-storis" },
  { title: "Servics", link: "/servics" },
  { title: "Contact", link: "/contact" },
];

const MenuBar = () => {
  return (
    <div className="bg-white/90 shadow-lg shadow-gray-500/10">
      <Container>
        <div className="flex justify-between items-center py-3  bg-white/90  sticky top-0">
          <div>
            <Link to="/">
              <img className="w-36 md:w-48" src={logo} alt="PeopleNTech" />
            </Link>
          </div>
          <div>
            <ul className="flex justify-center items-center text-[15px] gap-2">
              <li className="flex justify-between items-center gap-4">
                {menuItem?.map((item, index) => {
                  return (
                    <Link
                      className="font-semibold inline-block  hover:text-sky-400"
                      key={index}
                      to={item?.link}
                    >
                      {item?.title}
                    </Link>
                  );
                })}
              </li>
              <li>
                <Link
                  className="border-2 border-solid border-sky-300 rounded-md px-4 py-2 hover:bg-sky-400 hover:text-white/90 font-bold "
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MenuBar;
