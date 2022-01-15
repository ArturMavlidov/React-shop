import React from "react";

export default function Header() {
  return (
    <nav className="indigo darken-4">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/ArturMavlidov/React-shop" target='_blank'>Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
