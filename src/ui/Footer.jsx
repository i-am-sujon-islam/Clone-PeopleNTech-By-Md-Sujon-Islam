import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdOutgoingMail } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

import whLogo from "../assets/PNT-white-png.png";
import Container from "./Container";

const Footer = () => {
  const quickLink = [
    {
      title: "Join Free Seminars",
      link: "https://peoplentech.com.bd/seminars",
    },
    {
      title: "Success Story",
      link: "https://peoplentech.com.bd/success-stories",
    },
    { title: "Placement Support", link: "https://peoplentech.com.bd/#" },
    {
      title: "Privacy Policy",
      link: "https://peoplentech.com.bd/privacy-policy",
    },
    { title: "Our Mentors", link: "https://peoplentech.com.bd/our-faculty" },
  ];
  const course = [
    {
      title: "Software Testing and Quality Assurance",
      link: "https://peoplentech.com.bd/course/software-testing-and-quality-assurance",
    },
    {
      title: "Professional Web Development Specialist",
      link: "https://peoplentech.com.bd/course/professional-web-development-specialist",
    },
    {
      title: "Oracle Database Administration DBA 19C Training",
      link: "https://peoplentech.com.bd/course/acle-database-administration-dba-19c-training",
    },
    {
      title: "Microsoft ASP.NET MVC Core with SQL Server",
      link: "https://peoplentech.com.bd/course/microsoft-asp-net-mvc-ce-with-sql-server",
    },
  ];

  const contact = [
    {
      icon: <MdLocationOn />,
      title:
        "151/7, Good Luck Center (7th & 8th) Floor, Green Road, Dhaka - 1205, Bangladesh",
      link: "https://www.google.com/maps/place/PeopleNTech+Institute+of+IT+-+training+%26+Job+Placement+Service/@23.750716,90.386776,18z/data=!4m6!3m5!1s0x3755b8bb2b0758f9:0xe21afdf459453ff!8m2!3d23.7506748!4d90.3867103!16s%2Fg%2F11b7hfdhp7?hl=en-US&entry=ttu",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Regular: +8801799-446655, 01929-554499",
      link: "tel:+8801799446655",
    },
    {
      icon: <TfiHeadphoneAlt />,
      title: "IP Phone: +880961-333-7448",
      link: "tel:+8809613337448",
    },
    {
      icon: <MdOutgoingMail />,
      title: "Email: info@peoplentech.com.bd",
      link: "info@peoplentech.com.bd",
    },
  ];
  return (
    <div className="bg-black/90 text-white/80">
      <Container>
        <div className="py-24">
          <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 items-start">
            <div className="flex flex-col gap-3 ">
              <img src={whLogo} alt="Logo" />
              <p>
                Established with the goal of fostering success, PeopleNTech
                Institute of IT is a trusted institution. Over the past enduring
                nine years since its establishment, it has contributed to the
                development of Digital Bangladesh and achieved multifaceted
                success through trans-formative changes.
              </p>
              <div className="flex justify-center items-center gap-6">
                <Link
                  className="hover:text-sky-500 "
                  to="https://twitter.com/peoplentech1?lang=en"
                >
                  <FaTwitter className=" w-6 h-6 rounded-full" />
                </Link>
                <Link
                  className="hover:text-sky-500"
                  to="https://www.facebook.com/peoplentechbd"
                >
                  <FaFacebook className=" w-6 h-6 rounded-full" />
                </Link>
                <Link
                  className="hover:text-sky-500"
                  to="https://www.youtube.com/@PeopleNTechBangladesh"
                >
                  <FaYoutube className=" w-6 h-6 rounded-full" />
                </Link>
                <Link
                  className="hover:text-sky-500"
                  to="https://www.linkedin.com/company/peoplentech-institute/"
                >
                  <FaLinkedin className=" w-6 h-6 rounded-full" />
                </Link>
              </div>
            </div>
            <div>
              <h1 className="text-3xl">Quick Links</h1>
              <ul>
                {course?.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className=" hover:text-sky-500 inline-block my-3"
                        to={item.link}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl">Our Courses</h1>
              <ul>
                {quickLink?.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className="  hover:text-sky-500 inline-block inline-block my-3"
                        to={item.link}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h1 className="text-3xl">Contact Us</h1>
              <ul>
                {contact?.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className=" flex gap-2 hover:text-sky-500 my-3"
                      >
                        <span className="text-xl "> {item.icon}</span>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
