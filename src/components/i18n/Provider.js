import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import flatten from 'flat'

import { LOCALES } from './constants';
import messages from './messages';

const Provider = ({ children, locale = LOCALES.FRENCH }) => (
  <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={flatten(messages[locale])}
  >
    {children}
  </IntlProvider>
);

Provider.displayName = 'I18nProvider';

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  locale: PropTypes.oneOf(Object.values(LOCALES)),
};

Provider.defaultProps = {
  locale: LOCALES.FRENCH,
};

export default Provider;
