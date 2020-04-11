import React from 'react';
import Main from '../layouts/Main';
import Helmet  from 'react-helmet';

const Readme = () => {
  return (
    <Main>
        <Helmet title='Readme'/>
      <h1>This is /readme route page</h1>
    </Main>
  )
}

export default Readme
