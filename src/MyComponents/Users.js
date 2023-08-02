import React, { Component } from 'react'
import { commonService } from './../Utility/commonService';
import { Utilities } from './../Utility/utilityService'
import { Link } from "react-router-dom";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
      counter: 1,
      id: '',
      createdDate: '',
      showdiv: false,
      formData: {
        name: '',
        job: '',
      },
      registartionRequest: {
        email: 'eve.holt@reqres.in',
        password: 'postol'
      },
      token: '',
      isRegistration: false,
      loginRequest: {
        email: 'eve.holt@reqres.in',
        password: 'postol'
      },
      listOfUsers: [],
    }
  }
  handleClick() {
    // Update the state when the button is clicked
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };
  registrationHandleChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      registartionRequest: {
        ...prevState.registartionRequest,
        [name]: value,
      },
    }));
  };
  loginHandleChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      loginRequest: {
        ...prevState.loginRequest,
        [name]: value,
      },
    }));
  };
  getUser = async () => {

    const { formData } = this.state;
    let response = await commonService.GetUserDetails(formData.name, formData.job)
    let [apiStatus, apiResponse] = await Utilities.ApiResponseHandler(response);
    if (apiResponse !== null) {
      if (apiStatus) {
        this.setState({
          name: apiResponse.name,
          job: apiResponse.job,
          id: apiResponse.id,
          createdDate: apiResponse.createdAt,
          showdiv: true,

        })

      } else {
        this.setState({
          name: '',
          job: '',
          id: '',
          createdDate: '',
        })
      }
    }
  }
  getUserRegister = async () => {

    const { registartionRequest } = this.state;
    let response = await commonService.UserRegistration(registartionRequest.email, registartionRequest.password)
    let [apiStatus, apiResponse] = await Utilities.ApiResponseHandler(response);
    if (apiResponse !== null) {
      if (apiStatus) {
        this.setState({

          id: apiResponse.id,
          token: apiResponse.token,
          showdiv: false,

        })
        window.alert("Succesfully registerd");
      } else {
        this.setState({
          name: '',
          job: '',
          id: '',
          createdDate: '',
        })
      }
    }
  }
  getUserLogin = async () => {

    const { loginRequest } = this.state;
    let response = await commonService.UserLogin(loginRequest.email, loginRequest.password)
    let [apiStatus, apiResponse] = await Utilities.ApiResponseHandler(response);
    if (apiResponse !== null) {
      if (apiStatus) {
        this.setState({

          id: apiResponse.id,
          token: apiResponse.token,
          showdiv: true,
        })
        window.alert("Succesfully Login");
      } else {
        this.setState({
          name: '',
          job: '',
          id: '',
          createdDate: '',
        })
      }
    }
  }
  getListOfUsers = async () => {
    const { listOfUsers } = this.state;
    let response = await commonService.GetUserList()
    let [apiStatus, apiResponse] = await Utilities.ApiResponseHandler(response);
    if (apiResponse !== null) {
      if (apiStatus) {
        this.setState({
          listOfUsers: apiResponse.data,
          showdiv: true,
        })
        console.log('api data', listOfUsers);
        window.alert("Succesfully get All data");
      } else {
        this.setState({
          listOfUsers: '',
        })
      }
    }
  }
  render() {
    const { name, job, counter, id, showdiv, createdDate, formData, registartionRequest, token, isRegistration, loginRequest, listOfUsers } = this.state
    return (

      <>
        <div className='page-container'>
          <div>
            <br />
            <div className="form-group">
              <label>
                name:
                <input type="text" name="name" value={formData.name} onChange={this.handleChange} />
              </label>
            </div>
            <div className="form-group">
              <label>
                job:
                <input type="text" name="job" value={formData.job} onChange={this.handleChange} />
              </label>
            </div>
            <button type="submit" onClick={this.getUser}>Submit</button>

          </div>
          <div >
            {(name && showdiv) &&
              <>
                <h2>User Details</h2>

                <table className='center'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>User_Name</th>
                      <th>Job Profile</th>
                      <th>CreatedDate</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{job}</td>
                      <td>{createdDate}</td>
                    </tr>

                  </tbody>
                </table>

              </>

            }
          </div>
          <div >
            {
              name &&
              <>
                <h3>Registration</h3>
                <div className="form-group">
                  <label>
                    email:
                    <input type="text" name="email" value={registartionRequest.email} onChange={this.registrationHandleChange} />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    password:
                    <input type="text" name="password" value={registartionRequest.password} onChange={this.registrationHandleChange} />
                  </label>
                </div>
                <button type="submit" onClick={this.getUserRegister}>Submit</button>
              </>

            }
          </div>
          <div >
            {

              (token) &&
              <>
                <div className="form-group">
                  <h3>Login</h3>
                  <label>
                    email:
                    <input type="text" name="email" value={loginRequest.email} onChange={this.loginHandleChange} />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    password:
                    <input type="text" name="password" value={loginRequest.password} onChange={this.loginHandleChange} />
                  </label>
                </div>
                <button type="submit" onClick={this.getUserLogin}>Submit</button>
              </>

            }

          </div>
          <div>
            {
              (token) &&
              <button type="submit" onClick={this.getListOfUsers}>Submit</button>
            }
          </div>
          <div className='form-floating'>

            <select >
              {
                listOfUsers.map((element, id) => {
                  return (
                    <option key={id} value={id}>{element.name}</option>
                  )
                })

              }
            </select>

          </div>
          {/* <div>
          {
            (token && showdiv) &&
            <Link to="/">
              <button className="primary-button" >home</button>
            </Link>
          }
        </div> */}
        </div>
      </>

    );

  }
}
export default Users;