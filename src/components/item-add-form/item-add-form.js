import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  render () {
    return (
    <div className='item-add-form'>
    <input />
    <button type='button'
    className='btn btn-outline-secondary btn-sm float-right'
    onClick ={() => this.props.onItemAdded('hello add')}>
    Add item
  </button>
  </div>
  )};
};
