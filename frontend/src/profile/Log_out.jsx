import {useState} from 'react'
import axios from 'axios'

function Log_out() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage]=useState('');


       const handleLogout=async()=>{
        try{const response=axios .post("http://localhost:8000/mform/log_out")
      console.log('Response',response.data);
      setIsLoggedIn(false);
      setErrorMessage('');
    }catch(error){
        console.log('Login error',error.response?.data?.message||error.message);
        setErrorMessage(error.response?.data?.message||'An error ocuured');
      }
       };

  return (
    <>
      <div style={{
       height: '420px',
          width: '450px',
          border: '3px solid white',marginTop:'100px',
          boxShadow:'50px 100px 100pxrgb(136, 136, 136)',
          marginLeft:'500px',
          backgroundImage:'radial-gradient(circle, #fff, #f9f9f9, #f4f4f4, #efefef, #eaeaea, #e5e5e5, #e0e0e0, #dbdbdb, #d6d6d6, #d1d1d1, #cccccc, #c7c7c7)',

      }}>
        {isLoggedIn?(
         <>
           <p>You are currently logged in</p>
          <button onClick={handleLogout}>Log_Out</button>
         </>
        ):(
          <p>You are successfullly logged out!!</p>
        )}
      {errorMessage&&<p style={{color:'red'}}>{errorMessage}</p>}
      </div>
    </>
  );
}

export default Log_out