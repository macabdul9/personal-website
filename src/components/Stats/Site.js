import React, { Component } from 'react'
import Table from './Table';
// import data from '../../data/github';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from 'axios';

class Stats extends Component {
  state = {
    gitData : {}
  }
  
  componentWillMount(){
    axios.get('https://api.github.com/repos/macabdul9/personal-website')
    .then( response => {
       this.setState({gitData:response.data})
    } )
    .catch( error => {
        console.log(error);
    } );
  }

  componentDidMount(){
    this.props.onFetchGithub();
  }

  render() {
    const {gitData} = {...this.state};
    const data = [
      {
        label: 'Number of visitors',
        value: 0,
      },
      {
        label: 'Stars this repository has on github',
        key: 'stargazers_count',
        value: String(gitData["stargazers_count"]),
        link: 'https://github.com/macabdul9/personal-website/stargazers',
      }, {
        label: 'Number of people watching this repository',
        key: 'watchers',
        value: String(gitData["watchers"]),
        link: 'https://github.com/macabdul9/personal-website/stargazers',
      }, {
        label: 'Number of forks',
        key: 'forks',
        value: String(gitData["forks"]),
        link: 'https://github.com/macabdul9/personal-website',
      }, {
        label: 'Number of spoons',
        value: '0',
      }, {
        label: 'Number of linter warnings',
        // TODO ammend this with a pre-commit hook
        // `npm run lint | grep problems | tail -1 | awk '{print $2}'`
        value: '0',
      }, {
        label: 'Open github issues',
        key: 'open_issues_count',
        value: String(gitData["open_issues_count"]),
        link: 'https://github.com/macabdul9/personal-website/issues',
      }, {
        label: 'Last updated at',
        key: 'pushed_at',
        value: String(gitData["pushed_at"]),
        link: 'https://github.com/macabdul9/personal-website/commits',
      },
      { /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
        xargs -I file cat file | wc -l */
        label: 'Lines of Javascript powering this website',
        value: '~3000',
        link: 'https://github.com/macabdul9/personal-website',
      },
    ];
    return (
      <>
        <div>
          <h3>Some stats about this site</h3>
          <Table
            data={data}
          />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
      gitData:state.github.gitData
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchGithub: () => dispatch(actions.fetchGitData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
