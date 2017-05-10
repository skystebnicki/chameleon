import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from '../../FontIcon';
import ThemeService from '../../styles/ChamelThemeService';

/**
 * Save button
 *
 * @param props
 * @param context
 * @returns {ReactDOM}
 * @constructor
 */
const SaveIcon = (props, context) => {
  let theme = (context.chamelTheme && context.chamelTheme.fontIcon)
    ? context.chamelTheme.fontIcon : ThemeService.defaultTheme.fontIcon;

  return (
    <FontIcon {...props} className={theme.iconSave}>{"save"}</FontIcon>
  );
};

/**
 * An alternate theme may be passed down by a provider
 */
SaveIcon.contextTypes = {
  chamelTheme: PropTypes.object
};

export default SaveIcon;
