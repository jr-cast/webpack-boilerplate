import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this js script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('golden');
  return element;
}

document.body.appendChild(component());
