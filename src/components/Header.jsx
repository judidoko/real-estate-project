import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  // Using useEffect to check the changing of auth
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  }, [auth]);
  const [pageState, setPageState] = useState("sign-in");
  // NavLink Style Function
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#000000" : "none",
      borderBottom: isActive ? "5px solid #ff0000" : "none",
    };
  };

  return (
    <>
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
          <div>
            <h1 className="h-5 cursor-pointer">
              <Link to="/">Real Estate Project</Link>
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-10">
              <li
                className={`py-3 text-sm font-semibold text-gray-400 
                    border-b-[3px] border-b-transparent cursor-pointer`}
              >
                <NavLink to="/" style={navLinkStyles}>
                  Home
                </NavLink>
              </li>
              <li
                className={`py-3 text-sm font-semibold text-gray-400 
                    border-b-[3px] border-b-transparent cursor-pointer`}
              >
                <NavLink to="/offers" style={navLinkStyles}>
                  Offers
                </NavLink>
              </li>
              <li
                className={`py-3 text-sm font-semibold text-gray-400 
                    border-b-[3px] border-b-transparent cursor-pointer`}
              >
                <NavLink
                  to="/profile"
                  style={navLinkStyles}
                  onClick={() => navigate("/profile")}
                >
                  {pageState}
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
