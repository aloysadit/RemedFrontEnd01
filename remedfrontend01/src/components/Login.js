import React, { Component } from 'react';

class Login extends Component {

  functionSubmit = () => {

    let user = this.refs.name.value;
    this.props.onSubmit(user);
    console.log(user);
  }

  render() {

    return (
      <div className="container">
        <form>
          <div className="container">
            <label htmlFor="nama" className="col-form-label">Name</label>
            <div>
              <input className="form-control" type="text" ref="name" id="nama" placeholder="Input Name" />
            </div>
          </div>
        </form>

        <div className="container">
          <button className="btn btn-info btn-submit" id="submit" onClick={() => { this.functionSubmit(); }}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Login;