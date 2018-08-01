import React, { Component } from 'react';
import Login from "./components/Login";
import Welcome from "./components/Welcome";

class App extends Component {
  constructor() {
    super();
    this.state = { namaInput: [] };
  }

  submit = (namaUser) => {
    this.setState({ namaInput: namaUser });
  }

  render() {
    return (
      <div className="container">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active" id="nav-login-tab" data-toggle="tab" href="#nav-login" role="tab" aria-controls="nav-login" aria-selected="true">
              Login
            </a>
            <a className="nav-item nav-link" id="nav-welcome-tab" data-toggle="tab" href="#nav-welcome" role="tab" aria-controls="nav-welcome" aria-selected="false">
              Welcome
            </a>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
            <Login onSubmit={this.submit} />
          </div>
          <div className="tab-pane fade" id="nav-welcome" role="tabpanel" aria-labelledby="nav-welcome-tab">
            <Welcome name={this.state.namaInput} />
          </div>
        </div>

      </div>


    );
  }
}

export default App;
