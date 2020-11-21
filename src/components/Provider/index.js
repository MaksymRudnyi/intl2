import React, { Component, useState, useContext } from 'react';

import { AppContext } from '../Context';
import { I18nPropvider } from '../i18n';

const ProviderWrapper = ({ children }) => {
    const {state} = useContext(AppContext);

    return (
        <I18nPropvider locale={state.locale}>
            { children }
        </I18nPropvider>
    );
}

export default ProviderWrapper;
