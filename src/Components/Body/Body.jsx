import React, { useContext, useState } from "react";
import { ContextApp } from "../../ContextAPI";
import Navbar from "../Navbar/Navbar";
import Icon from "../Reuseable/Icon/Icon";
import { links, style, works } from "../Appconstant";
import "./Body.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import NotificationSystem from "react-notification-system";
import Footer from "./Footer/Footer";
import YouAreLost from "./404/YouAreLost";
import Services from "./Services/Services";
import Works from "./Works/Works";
import Projectpage from "../Reuseable/Projectpage/Projectpage";
import { AnimatePresence } from "framer-motion";
import Aboutme from "./Aboutme/Aboutme";

function Body(props) {
  const { scrolled, notifisystem } = useContext(ContextApp);
  const worksroutes = works?.map((project) => {
    return (
      <Route path={project.link} element={<Projectpage project={project} />} />
    );
  });

  return (
    <div className="body">
      <Icon
        icon={scrolled ? "fad fa-arrow-up top scrol" : "top"}
        clickEvent={() => window.scrollTo(0, 0)}
      />
      <NotificationSystem ref={notifisystem} style={style} />
      <Navbar links={links} />

      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          {worksroutes}
          <Route path="/contact" element={<Contact />} />
          <Route element={<YouAreLost />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
export default Body;
