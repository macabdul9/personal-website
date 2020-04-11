import React, { Component } from 'react';
import Main from '../layouts/Main';
import Helmet from 'react-helmet';

class EDA extends Component {
    render() {
        return (
            <Main>
                <Helmet title='EDA'/>
                <h1>This is /eda route page</h1>
            </Main>
        )
    }
}

export default EDA
