import React from 'react';
import ReactDOM from 'react-dom';

class Popup extends React.Component {
  render() {
    return (
      <div>
        this is popup mutation!
      </div>
    );
  }
}

ReactDOM.render(
  <Popup />,
  document.getElementById('app'),
);
