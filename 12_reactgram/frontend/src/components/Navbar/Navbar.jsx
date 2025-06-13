import "./Navbar.css"

// components
import { NavLink, Link, useNavigate } from "react-router-dom";
import {BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill} from "react-icons/bs"

// hooks
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";

import { logout, reset } from "../../slices/authSlice";

  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth)

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())

    navigate("/login")
  }
