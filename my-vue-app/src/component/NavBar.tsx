// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const userCount = useSelector((state) => state.users.list.length); // Get user count

  return (
    <nav>
      <Link to="/users">Users ({userCount})</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default NavBar;
