import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        {
          props.navData.menu.filter(f => f.displayOn.indexOf('sideDrawer')>=0).map((l) => {
            return <li key={l.title}><a href={l.link}>{l.title}</a></li>;
          })
        }
      </ul>
    </nav>
  );
};

export default sideDrawer;
