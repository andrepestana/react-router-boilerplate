import React, { Component } from 'react';

import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class Navigation extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    const navData = {
      menu: [
        { 
          title: 'Home',
          link: '/',
          displayOn: ['sideDrawer']
        },
        { 
          title: 'About',
          link: '/about',
          displayOn: ['sideDrawer', 'toolbar']
        },
        { 
          title: 'Contact',
          link: '/contact',
          displayOn: ['sideDrawer', 'toolbar']
        }
      ]
    }
    
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar 
          drawerClickHandler={this.drawerToggleClickHandler} 
          navData={navData} />
        <SideDrawer 
          show={this.state.sideDrawerOpen} 
          navData={navData} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
         
        </main>
      </div>
    );
  }
}

export default Navigation;
