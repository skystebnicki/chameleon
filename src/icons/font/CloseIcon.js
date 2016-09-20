import React, { Component, PropTypes } from 'react';
import FontIcon from '../../FontIcon';
import ThemeService from '../../styles/ChamelThemeService';

/**
 * Close or clear button
 *
 * @param props
 * @param context
 * @returns {ReactDOM}
 * @constructor
 */
const CloseIcon = (props, context) => {
    let theme = (context.chamelTheme && context.chamelTheme.fontIcons)
    ? context.chamelTheme.fontIcons : ThemeService.defaultTheme.fontIcons;

    return (
        <FontIcon {...props} className={theme.iconClose} />
    );
};

/**
 * An alternate theme may be passed down by a provider
 */
CloseIcon.contextTypes = {
    chamelTheme: React.PropTypes.object
};

export default CloseIcon;
