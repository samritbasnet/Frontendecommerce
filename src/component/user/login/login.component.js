//stateful, class comp
//stateless, functional comp
//import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import React from "react";

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isSubmitted: false,
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Name:", name);
    // set value to a state
    this.setState({
      [name]: value,
    });
  };



  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({
      isSubmitted: true,
    });
    console.log("sTATE", this.state);
  };


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center"> Login page </h4> 
            <hr />
            </div>
          </div>
          <div className="col-12">
            <form action="" method="post" onSubmit={this.handleSubmit}>

              <div className="form-group row mb-3">
                <label className="col-sm-3"> Email </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    placeholder="Enter your email"
                    required
                    className="form-control form-control-sm"
                  />
                </div>
                </div>

                <div className="form-group row mb-3">
                  <label className="col-sm-3"> Password: </label>
                  <div className=" col-sm-9">
                    <input
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                      placeholder="Enter your password"
                      required
                      className="form-control form-control-sm"
                    />
                  </div>
                  </div>


                  <div className="form-group row mb-3">
                    <div className="offset-sm-3 col-sm-9">
                      <button
                        className="btn btn-sm btn-success"
                        disabled={this.state.isSubmitted}
                        type="submit"
                      >
                        Login
                      </button>

                      Or
                      
                      <a href="/register">Register</a>
                      
                    </div>
                  </div>
              </form>
          </div>
          </div>
    );
  }
}
