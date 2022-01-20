import React from "react";
const commonFields = {
  name: "",
  email: "",
  password: "",
  re_password: "",
  gender: "",
};

export class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        ...commonFields,
      },
      error: {
        ...commonFields,
      },
      isSubmitted: false,
    };
  }
  handleChange = (e) => {
    const { name, value, checked } = e.target;
    this.setState(
      (preState) => {
        return {
          data: {
            ...preState.data,
            [name]: value
          }
        };
      },
      () => {
        this.validateForm(name);
      })
  };
  validateForm = (fieldName) => {
    //validation Logic
    let errMsg = null;
    const { data } = this.state;
    switch (fieldName) {
      case "name":
        errMsg = data[fieldName]  !=='' ? "" : "Name is required";
        break;
      case "email":
        errMsg =
          data[fieldName] !== ''
            ? (data[fieldName].includes("@")
              ? ""
              : "Invalid Email Format")
            : "email is required ";
        break;
      case "password":
        console.log("Field", data[fieldName].length);
        errMsg =data[fieldName] != ''
            ? (data[fieldName].length >= 8)
              ?  "" : "Password must  be at least 8 characters long"
            : "Password is required";
        break;
      case "re_password":
        errMsg =
          data[fieldName]  !==''
            ? (data["password"] === data[fieldName])
              ? ""
              : "Password does not match"
            : "Re_password is required";
        break;
      case "gender":
        errMsg = data[fieldName]  !=='' ? "" : "Gender is required";
        break;
    }
    this.setState((preErr)=>({
      error:{
          ...preErr.error,
          [fieldName]: errMsg
      }
    }),()=>{
      const {error}=this.state;
      let error_count=0
      for(let key in commonFields){
        if(error[key]){
          error_count++;

        }
      }
      this.setState({
        isSubmittingForm: (error_count !=0) ? true : false
      
    })
  })
  }


  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({
      isSubmittingForm:true
    })
    console.log("State", this.state);
    for(let key in commonFields){    
        this.validateForm(key);
      }   
     
  };
  render() {
    const {error}=this.state
    return (
      <div className="container">
      {
                    this.state.isSubmittingForm ? 'Loading....' : ''
                }
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">Register page</h4>
            <hr />
            <form action="" onSubmit={this.handleSubmit}>
              <div className="row mb-3">
                <label className="col-sm-3">Name:</label>
                <div className="col-sm-9">
                  <input
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    required
                    placeholder="enter your  name"
                    className="form-control  control form-control-sm"
                  />
                  <span className="text-danger">{error.name} </span>
                </div>

              </div>

              <div className="row mb-3">
                <label className="col-sm-3">Email:</label>
                <div className="col-sm-9">
                  <input
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    
                    placeholder="enter your email"
                    className="form-control  control form-control-sm"
                  />
                  <span className="text-danger">{error.email} </span>
                </div>
              </div>

              <div className="row mb-3">
                                <label className="col-sm-3">Password: </label>
                                <div className="col-sm-9">
                                    <input onChange={this.handleChange} type="password" name="password"  placeholder="Enter your password..." className="form-control form-control-sm" />
                                    <span className="text-danger">{error.password}</span>
                                
                                </div>
                                </div>

              <div className="row mb-3">
                <label className="col-sm-3">RePassword:</label>
                <div className="col-sm-9">
                  <input
                  onChange={this.handleChange}
                    type="password"
                    name="Re-password"
                    placeholder="Re-Enter your password"
                    className="form-control  control form-control-sm"
                  />
                  <span className="text-danger">{error.re_password} </span>
                </div>
              </div>

              <div className="row mb-3">
                                <label className="col-sm-3">Gender: </label>
                                <div className="col-sm-9">
                                    <label htmlFor="male" className="mr-1">
                                        <input type="radio" name="gender" onChange={this.handleChange} value={'Male'} id="male"/> Male &nbsp;&nbsp;
                                    </label>
                                    <label htmlFor="female">
                                        <input type="radio" name="gender" onChange={this.handleChange}  value={'Female'} id="female"/> Female &nbsp;&nbsp;
                                    </label>
                                    <label htmlFor="other">
                                        <input type="radio" name="gender" onChange={this.handleChange}  value={'Other'} id="other"/> Other
                                    </label>
                                    <span className="text-danger">{error.gender}</span>

                                </div>
                                </div>
              <div className="row mb-3">
                <div className="offset-sm-3 col-sm-9">
                  <button className="btn btn-success btn-sm" disabled={this.state.isSubmittingForm} type="submit">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
