import React from "react";

export const Footer = () => {
  const today = new Date();
  return (
    <footer className="appFooter">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};
