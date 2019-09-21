import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, ToolbarItem, ToolbarTitle } from 'carbon-components-react';

const ApplicationView = () => {
  return (
    <div>
      <Toolbar className="application__nav-bar">
        <ToolbarItem>
          <Link to="/">MSCSO</Link>
        </ToolbarItem>
        <ToolbarItem>
          <Link to="/courses">Courses</Link>
        </ToolbarItem>
        <ToolbarItem>
          <Link to="/recent">Recent</Link>
        </ToolbarItem>
        <ToolbarItem>
          <Link to="/login">Log in</Link>
        </ToolbarItem>
      </Toolbar>
    </div>
  )
}

export default ApplicationView;