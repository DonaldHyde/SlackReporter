'use strict';

import React    from "react";
import ReactDOM from 'react-dom';

import AppContainer from './containers/app_container'

const App = () => {
    return (
        <AppContainer />
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('content')
);