import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
          </div>
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Calendar">Calendar</Link></li>
            <li><Link to="/completed">Completed</Link></li>
            <li><Link to="/todo">To do</Link></li>

            <li><Link to="/addtask">Add a Task</Link></li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;