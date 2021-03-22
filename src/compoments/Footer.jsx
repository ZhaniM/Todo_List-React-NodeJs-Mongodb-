import React from "react";

let year = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>Zhani Muceku {year}</p>
    </footer>
  );
}

export default Footer;
