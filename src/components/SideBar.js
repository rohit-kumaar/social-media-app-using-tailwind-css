import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";

export const SideBar = () => {
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar__logo">
          <img className="sidebar__img" src={logo} alt="Logo" title="Logo" />
        </div>

        <ul className="sidebar__items ">
          <li className="sidebar__list">
            <NavLink to="/home/my-profile">My Profile (Home)</NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to="/home/profile-details">Profile Details</NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to="/home/profile-verification">
              Profile Verification
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to="/home/infrastructure-details">
              Infrastructure Details
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to="/home/diagnostic-services">
              Diagnostic Services
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to="/home/staff-details">Staff Details</NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to="/home/payment-details">Payment Details</NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to="/home/faq">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
