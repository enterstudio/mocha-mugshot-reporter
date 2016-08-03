import React from 'react';
import FailedTest from './failed.jsx';
import PassedTest from './passed.jsx';

var Details = React.createClass({
  render: function() {
    var paths = this.props.paths;

    return <div className='details'>
      {Object.keys(paths).length === 1 ?
        <PassedTest paths={paths}/> : <FailedTest paths={paths}/>}
    </div>;
  }
});

module.exports = Details;
