import React, { Component } from 'react';
import { render } from 'react-dom';
import Card from '../components/Card';

// web_accessible_resources libs (chrome/lib):
window.Log('this is inject script!');

class Inject extends Component {
  render() {
    return (
      <div>
        <Card/>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const secondaryDiv = document.querySelector('#secondary');

        if (secondaryDiv) {
          const dom = document.createElement('div');
          dom.id = 'inject-component';
          secondaryDiv.prepend(dom);
          render(<Inject />, dom);
          observer.disconnect(); // Stop observing once the component is injected
          break;
        }
      }
    }
  })
  observer.observe(document.body, { childList: true, subtree: true });
});

