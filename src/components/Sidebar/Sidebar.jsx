import "./Sidebar.css";
import { FaGithub } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      <div
        className={`sidebar ${
          isMobile && isOpen ? "sidebar-open" : !isMobile ? "sidebar-open" : ""
        }`}
      >
        <div className="sidebar-header">
          <h2>My Github Projects</h2>
          {isMobile && (
            <button className="sidebar-close-button" onClick={toggleSidebar}>
              ✕
            </button>
          )}
        </div>

        <div className="sidebar-links">
          <a
            href="https://alfredn1.github.io/Dashboard-Task/"
            className="sidebar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="github-project">
              <FaGithub style={{ marginRight: "8px" }} />
              <span>Dashboard-Task</span>
            </div>
          </a>
          <a
            href="https://alfredn1.github.io/restaurant-task/"
            className="sidebar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="github-project">
              <FaGithub style={{ marginRight: "8px" }} />
              <span>Restaurant-Task</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
