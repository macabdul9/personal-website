import React from 'react';
import Main from '../layouts/Main';
import Helmet from 'react-helmet';
import ReportRenderer from '../render/ReportRenderer';

const Report = () => {
  return (
    <Main>
        <Helmet title="Report" />
      <h1>This is /report route page</h1>
      <ReportRenderer/>
    </Main>
  )
}

export default Report
