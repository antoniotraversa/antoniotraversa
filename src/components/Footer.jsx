import React from "react";
import "./css/Footer.css";

export default function Footer() {
  return (  
      <footer className="site-footer">
        <div className="container row between center-y">
          <p className="muted">© {new Date().getFullYear()} antoniotraversa.it</p>
          <p className="muted"> All rights reserved.</p>
        </div>
      </footer>
    );
}