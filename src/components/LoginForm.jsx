import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/css/forms.css';

function LoginForm() {
  const [actor, setActor] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActor((prevActor) => ({ ...prevActor, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(actor);
    console.log('button pressed');

    try {
      const response = await fetch('https://backend-server-86l5.onrender.com/sacco/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(actor),
      });

      const data = await response.json();
      if (data) {
        const loggedData = data;
        navigate('/dashboard', { state: loggedData });
      } else {
        // Handle login failure
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='background'>
      <div className='div-object login'>
        <h2 className='section-header'>LOGIN</h2>
        <form className='form-body' onSubmit={handleSubmit}>
          <div className="form-object login-form">
            <div className='background'></div>
            <div className='login-background'>
              <label htmlFor="username" className="input-label">
                Username
                <input
                  type="text"
                  name="username"
                  className="user-input"
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="password" className="input-label">
                Password
                <input
                  type="password"
                  name="password"
                  className="user-input"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
        </form>
        <div className="btn-div">
          <button type="submit" className="btn btn-login" onClick={handleSubmit}>Login</button>
          <button className="btn btn-sign-up">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
