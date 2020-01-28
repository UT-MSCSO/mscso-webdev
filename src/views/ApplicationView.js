import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, ToolbarItem } from 'carbon-components-react';

const ApplicationView = () => {
  return (
    <div className="application__nav-bar">
      <Toolbar>
        <div className="main-tools">
          <ToolbarItem className="nav-bar__home">
            <Link to="/">MSCSO</Link>
          </ToolbarItem>
          <ToolbarItem>
            <Link to="/courses">Courses</Link>
          </ToolbarItem>
          <ToolbarItem>
            <Link to="/recent">Recent</Link>
          </ToolbarItem>
        </div>
        <ToolbarItem>
          <Link to="/login">Log in</Link>
        </ToolbarItem>
      </Toolbar>
    </div>
  )
}

export default ApplicationView;