import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Md Parvez Mosaraf | Md Mehedi Hasan
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
