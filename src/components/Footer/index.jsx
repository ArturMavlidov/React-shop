import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer indigo darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Artur Mavlidov
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
