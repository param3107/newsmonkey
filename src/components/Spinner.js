import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border my-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
  }
}

