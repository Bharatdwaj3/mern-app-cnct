import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

// eslint-disable-next-line react/prop-types
function Log_In({ onLoginSuccess, onLoginFailure }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeUserName = (e) => { setUserName(e.target.value); };
  const onChangePassword = (e) => { setPassword(e.target.value); };

  const navigate = useNavigate(); 
  const onSumbit = async (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:8000/mform/log_in", userData);
      console.log('Response', response.data);
      setIsLoggedIn(true);
      setErrorMessage('');
      onLoginSuccess();
    } catch (error) {
      console.log('Login error', error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || 'An error occurred');
      onLoginFailure();
      navigate('/mform/register'); 
    }
  };

  return (
    <>
      <div>
        {isLoggedIn ? (
          <p>Welcome Back, {username}!! You are logged in</p>
        ) : (
          <div
            style={{
              height: '420px',
              width: '450px',
              border: '3px solid white',
              marginTop: '100px',
              boxShadow: '50px 100px 100pxrgb(136, 136, 136)',
              marginLeft: '500px',
              backgroundImage: 'radial-gradient(circle, #fff, #f9f9f9, #f4f4f4, #efefef, #eaeaea, #e5e5e5, #e0e0e0, #dbdbdb, #d6d6d6, #d1d1d1, #cccccc, #c7c7c7)',
            }}
          >
            <form style={{ padding: '40px' }} onSubmit={onSumbit}>
              <label>
                Username: <input required type="text" name="username" onChange={onChangeUserName} />
              </label>
              <br />
              <br />
              <label>
                Password: <input required type="password" placeholder="password" name="password" onChange={onChangePassword} />
              </label>
              <br />
              <br />
              <button type="submit">Submit</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
        )}
      </div>
    </>
  );
}

export default Log_In;