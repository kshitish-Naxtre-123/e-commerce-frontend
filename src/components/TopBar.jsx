import React from "react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../redux/api/usersApiSlice";
import { logout } from "../redux/features/auth/authSlice";
import logo from '../assets/logo.png'

const TopBar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="z-50 w-full flex items-center justify-between fixed bg-gray-800 text-white px-10 py-7">
      <div className="">
        <h2>E-COMMERCE MANAGEMENT SYSTEM</h2>
      
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="flex gap-2 items-center">
          {userInfo?.isadmin && (
            <p className="text-pink-500 font-semibold text-sm">admin:</p>
          )}
          <h3>{userInfo?.username || ""}</h3>
          {userInfo &&
            (dropdownOpen ? (
              <IoIosArrowUp
                size={20}
                className="ml-3 text-white"
                onClick={toggleDropdown}
              />
            ) : (
              <IoIosArrowDown
                size={20}
                className="ml-3 text-white"
                onClick={toggleDropdown}
              />
            ))}
        </div>
        <div className="relative z-40 top-10">
          {dropdownOpen && userInfo && (
            <ul
              className={`absolute  bg-gray-800 right-0 mt-2 mr-25 space-y-1 bg-white-400 text-white font-bold border rounded-md px-3 py-3 ${
                !userInfo.isadmin ? "-top-100" : "-top-180"
              } `}
            >
              {userInfo.isadmin && (
                <>
                  <li>
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 rounded-md mt-2 hover:text-[#35e5f1] hover:underline"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/productlist"
                      className="block px-4 py-2 rounded-md hover:text-[#35e5f1] hover:underline "
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/categorylist"
                      className="block px-4 py-2 rounded-md hover:text-[#35e5f1] hover:underline "
                    >
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/orderlist"
                      className="block px-4 py-2 rounded-md hover:text-[#35e5f1] hover:underline "
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/userlist"
                      className="block px-4 py-2 rounded-md hover:text-[#35e5f1] hover:underline "
                    >
                      Users
                    </Link>
                  </li>
                </>
              )}

              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 rounded-md hover:text-[#35e5f1] hover:underline"
                >
                  Profile
                </Link>
              </li>
              {/* <li>
                <button
                  onClick={logoutHandler}
                  className="block px-4 py-2 text-left rounded-md hover:text-[#35e5f1] hover:underline  mb-3"
                >
                  Logout
                </button>
              </li> */}
            </ul>
          )}
        </div>
        {userInfo ? (
          <button
            className="bg-pink-500 px-5 py-1 rounded-md"
            onClick={logoutHandler}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-pink-500 px-5 py-1 rounded-md"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default TopBar;
