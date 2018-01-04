import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render () {
    return (
      <div className="header">
        <div className="container">
          <a className="header__burger">
            <span></span>
            <span></span>
            <span></span>
          </a>

          <div className="logo">React Dict</div>
        </div>
      </div>
    )
  }
}