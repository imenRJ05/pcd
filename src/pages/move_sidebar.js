import React, { useState } from "react";

function handleClick(e) {
  let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
  arrowParent.classList.toggle("showMenu");
}

function Sidebar() {
  const [sidebarClosed, setSidebarClosed] = useState(false);

  function handleSidebarBtnClick() {
    setSidebarClosed(!sidebarClosed);
  }

  return (
    <div>
      <div className="arrow" onClick={handleClick}>
        {/* Arrow content here */}
      </div>
      {/* ... other arrow elements */}
      <div className={`sidebar ${sidebarClosed ? "close" : ""}`}>
        {/* Sidebar content here */}
      </div>
      <div className="bx-menu" onClick={handleSidebarBtnClick}>
        {/* Sidebar button content here */}
      </div>
    </div>
  );
}

export default Sidebar;
