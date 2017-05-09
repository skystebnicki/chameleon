import React from 'react';
import SvgIcon from './svg-icon';

const NavigationMenu = (props) => {

  render: function() {
    return (
      <SvgIcon {...props}>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </SvgIcon>
    );
  }

});

export default NavigationMenu;
