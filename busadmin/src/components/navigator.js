import React, { Component } from 'react';


class navigator extends Component {
  render() {
    return (
      <div>
        <nav className="black darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Coastal Lines</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/login"><i className="fa fa-sign-in" aria-hidden="true"/> Login</a></li>
            </ul>
          </div>
          <div class="nav-content">
            <ul class="tabs tabs-transparent">
              <li className="tab"><a class="active" href="/"><i className="fa fa-home"/>Home</a></li>
              <li className="tab"><a href="/price"><i className="fa fa-money"/>Check Travel Cost</a></li>
              <li className="tab"><a href="/buyTicket"><i className="fa fa-suitcase"/>Reservations</a></li>
              <li className="tab"><a href="/price"><i className="fa fa-bus"/>Train Details</a></li>
              <li className="tab"><a href="/about"><i className="	fa fa-paper-plane	"/>About Us</a></li>

            </ul>
          </div>
        </nav>   

      </div>
    )
  }

}




export default navigator;