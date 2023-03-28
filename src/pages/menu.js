import React, { useState } from "react";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [closeSidebar, setCloseSidebar] = useState(false);

  const handleArrowClick = (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    setShowMenu(!showMenu);
    arrowParent.classList.toggle("showMenu");
  };

  const handleSidebarClick = () => {
    setCloseSidebar(!closeSidebar);
  };

  return (
    <div>
      <div className="arrow" onClick={handleArrowClick}></div>
      <div className={`sidebar ${closeSidebar ? "close" : ""}`}></div>
      <div className="bx-menu" onClick={handleSidebarClick}></div>
    </div>
  );
}

export default Menu;