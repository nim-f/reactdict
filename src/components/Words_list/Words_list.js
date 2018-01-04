import React, { Component } from 'react'
import _ from 'lodash'

export default class WordsList extends Component {

  renderList() {
    return _.map(this.props.list, (value, key) => {
      return (
        <li key={key}>
          {value.word} - {value.translation}
          <a href="#" onClick={() => this.props.delete(key)}>delete</a>
        </li>
      )
    })
  }

  render () {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }

}