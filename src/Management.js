
import React, { useState } from 'react';

const Management = () => {
  const [postData, setPostData] = useState({ name: '', job: '' });

  const handlePost = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      if (response.ok) {
        console.log('Post created successfully');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  return (
    <div className='container'>
 <div className="form-group">
        <label>
        name:
      <input type="text" name="name" value={postData.name} onChange={handleInputChange} placeholder="name" />
      
      </label>
      </div>
      <div className="form-group">
      <label>
        job:
      <input name="text" value={postData.job} onChange={handleInputChange} placeholder="job" />
      </label>
      </div>
      <button onClick={handlePost}>Insert Management data</button>
    </div>
  );
};


export default Management;