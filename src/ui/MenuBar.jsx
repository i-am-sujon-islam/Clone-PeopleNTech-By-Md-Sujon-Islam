import React, { useRef, useState } from "react";

import { IoMenu } from "react-icons/io5";
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
  const [show, setShow] = useState(false);
  const ref = useRef();

  const menuChange = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div className="bg-white/90 shadow-lg shadow-gray-500/10 relative z-40">
      <Container>
        <div className="flex justify-between items-center py-3  bg-white/90  sticky top-0">
          <div>
            <Link to="/">
              <img className="w-36 md:w-48" src={logo} alt="PeopleNTech" />
            </Link>
          </div>
          <div>
            <ul className="hidden lg:flex justify-center items-center text-[15px] gap-2">
              <li className="flex justify-between items-center gap-2 lg:gap-4">
                {menuItem?.map((item, index) => {
                  return (
                    <Link
                      className="font-semibold inline-block  hover:text-sky-400 text-sm lg:text-md"
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

            <div>
              {" "}
              <IoMenu
                onClick={menuChange}
                className="lg:hidden text-4xl cursor-pointer"
              />
            </div>
          </div>
          {show && (
            <div
              onClick={handleClick}
              ref={(node) => (ref.current = node)}
              className="absolute bg-white top-full right-0 z-50"
            >
              <ul className="lg:hidden flex flex-col justify-center items-center text-[15px] gap-2 p-10  rounded-md">
                <li className="flex flex-col justify-between items-center gap-4">
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
          )}
        </div>
      </Container>
    </div>
  );
};

export default MenuBar;
