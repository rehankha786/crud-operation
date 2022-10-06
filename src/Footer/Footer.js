import React from "react";
import "./Footer.css";
const Footer = ({tabledata}) => {
  return (
    <div className="footer">
    <footer className='container page-footer '>
      <div className='footer-copyright text-center py-3'>© 2020 Copyright:</div>
      <div className="count">
        <p>TOTAL BOOKS AVAILABLE : <b>{tabledata.length}</b> </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
