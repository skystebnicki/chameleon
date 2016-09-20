import React, { Component, PropTypes } from 'react';
import FontIcon from '../../FontIcon';

const ArrowForwardicon = (props, context) => {
  let theme = (context.chamelTheme && context.chamelTheme.fontIcons)
    ? context.chamelTheme.fontIcons : {};

  return (
    <FontIcon {...props} className={theme.iconArrowForward} />
  );
};

/**
 * An alternate theme may be passed down by a provider
 */
ArrowForwardicon.contextTypes = {
  chamelTheme: React.PropTypes.object
};

export default ArrowForwardicon;
