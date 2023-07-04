import React from 'react';
import './App.css';
class PostMethod extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        responseData: [],
        isLoginSuccessful: false,
      formData: {
        name: '',
        job: '',
      },
    };
  }
  handleLogin = () => {
    // Perform login logic here...
    // If login is successful, set isLoginSuccessful to true
    this.setState({ isLoginSuccessful: true });
  };
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    debugger
    const { formData } = this.state;

    try {
      var response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
        window.alert('Succesfully Inserted');
        console.log('POST request successful');
        const data = await response.json();
        this.setState({ responseData: data, error: null });
        
      } else {
        // Handle error response
        console.error('POST request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  };

  render() {
    const { formData } = this.state;
    const { isLoginSuccessful } = this.state;
    return (
        <div className="container">
          <h5>Data</h5>
          {isLoginSuccessful && <p>Success! You are logged in.</p>}
      <form onSubmit={this.handleSubmit}>
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

        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default PostMethod;