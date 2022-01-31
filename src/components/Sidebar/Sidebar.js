import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <aside className={`${isOpen ? "sidebar" : "sidebarClose"}`}>
        <div className="closeContainer">
          <span onClick={() => toggle()}>
            <AiOutlineClose />
          </span>
        </div>
        <div className="sidebarContainer">
          <Link
            to="/"
            onClick={() => toggle()}
            className="sidebarContainer__link"
          >
            <div>
              <span>Home</span>
            </div>
          </Link>

          <Link
            to="/skills"
            onClick={() => toggle()}
            className="sidebarContainer__link"
          >
            <div>
              <span>Skills</span>
            </div>
          </Link>

          <Link
            to="/static"
            onClick={() => toggle()}
            className="sidebarContainer__link"
          >
            <div>
              <span>Static</span>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
