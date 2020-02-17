import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h1>My todo List</h1>
    <input placeholder="search"/>
    <ul>
      <li>Leart React</li>
      <li>Build App</li>
    </ul>
  </div>
);
ReactDOM.render(el,
  document.getElementById('root'));