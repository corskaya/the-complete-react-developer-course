'use strict';

var appRoot = document.getElementById('app');

var showDetails = false;

var onShowDetails = function onShowDetails() {
  showDetails = !showDetails;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onShowDetails },
      showDetails ? 'Hide details' : 'Show details'
    ),
    showDetails ? React.createElement(
      'p',
      null,
      'This paragraph is now visible.'
    ) : null
  );

  ReactDOM.render(template, appRoot);
};

render();
