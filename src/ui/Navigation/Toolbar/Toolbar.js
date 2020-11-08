import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => {
 
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
              <DrawerToggleButton click={props.drawerClickHandler} />
          </div>
          <div className="toolbar__logo"><a href="/">My logo</a></div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
              <ul>
                {
                  props.navData.menu.filter(f => f.displayOn.indexOf('toolbar')>=0).map((l) => {
                    return <li key={l.title}><a href={l.link}>{l.title}</a></li>;
                  })
                }
              </ul>
          </div>
      </nav>
    </header>
  );
};

export default toolbar;
