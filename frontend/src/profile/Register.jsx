import { useState } from 'react';
import axios from 'axios';

function Register() {

   const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
     const [email, setEmail] = useState("");
      const [userdata, setUserData] = useState(false);


     const onChangeName =(e)=>{setName(e.target.value);};
     const onChangeUserName =(e)=>{setUserName(e.target.value);};
     const onChangePassword =(e)=>{setPassword(e.target.value);};
     const onChangeEmail =(e)=>{setEmail(e.target.value);};

    const onSumbit=(e)=>{
      e.preventDefault();
      const userData={
        name:name,
        username:username,
        password:password,
        email:email,
      };
    
     axios
      .post("http://localhost:8000/mform/register", userData)
      .then((res) => {
        console.log(res.data);
        setName(name);
        setUserName(username);
        setPassword(password);
        setEmail(email);
      })
      .catch((error) => {
        console.log(error);
      });
    setUserData(true);

    }

  return (
    <>
      <div>
        {userdata?(<p>User Registered!!!</p>):(
            <div
        style={{
          height: '420px',
          width: '450px',
          border: '3px solid white',marginTop:'100px',
          boxShadow:'50px 100px 100pxrgb(136, 136, 136)',
          borderRadius:'30px',
          marginLeft:'500px',
          backgroundImage:'radial-gradient(circle, #fff, #f9f9f9, #f4f4f4, #efefef, #eaeaea, #e5e5e5, #e0e0e0, #dbdbdb, #d6d6d6, #d1d1d1, #cccccc, #c7c7c7)',

        }}
      >
        <form style={{ padding: '40px', }}  onSubmit={onSumbit}>
          <label>
            Name: <input  style={{backgroundColor:"white",borderRadius:"7px",border: "none"}}   required type="text" name="name" onChange={onChangeName}  />
          </label>
          <br />
          <br />
          <label>
            Username: <input  style={{backgroundColor:"white",borderRadius:"7px",border: "none"}}   required type="text" name="username" onChange={onChangeUserName}  />
          </label>
          <br />
          <br />
          <label>
            Email: <input  style={{backgroundColor:"white",borderRadius:"7px",border: "none"}}   required type="email" placeholder="email" name="email" onChange={onChangeEmail}  />
          </label>
          <br />
          <br />
          <label style={{backgroundImage:"(to right,white,skyblue)",borderRadius:"10px"}}>
            Password: <input
            style={{backgroundColor:"white",borderRadius:"7px",border: "none"}}   required type="password" 
            placeholder="password" 
            name="password" 
            onChange={onChangePassword}  />
          </label>
          <br />
          <br />
         <button style={{marginLeft:"110px",marginTop:"60px",borderRadius:"10px",width:"150px",height:"40px",backgroundColor:"skyblue",border: "none"}} type="submit">Submit</button>
        </form>
         
      </div>


        )}
      
      </div>
    </>
  );
}
export default Register;