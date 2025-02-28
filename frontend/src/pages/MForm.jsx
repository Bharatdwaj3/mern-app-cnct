import { useState } from 'react';
import { Log_In, Register } from '../profile/index';  

function MForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setLoginFailed(false);
  };

  const handleLoginFailure = () => {
    setLoginFailed(true);
  };

  return (
    <>
     {!isLoggedIn?(<Log_In onLoginSuccess={handleLoginSuccess} onLoginFailure={handleLoginFailure} />):(
      !isLoggedIn&&loginFailed?(<Register/>):(<p>Welcome Back On Loggin In</p>)
     )}
    </>
  );
}

export default MForm;