import React from 'react'
import axios from 'axios';
import qs from 'qs';
export const Password=()=>{

    const [login,setLogin]=React.useState('');
    const[pwd,setPwd]=React.useState('');
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:{ 
        grant_type: 'password',
        username:login,
        password:login,
        scope:'read_profile'
    },
        url: 'http://localhost:9090/oauth/token',
        auth: {
            username: 'clientapp',
            password: '123456'
         }
      };
      const data=qs.stringify({ grant_type: 'password',
      username:login,
      password:login,
      scope:'read_profile'
   })
    const onClickSubmit= (event)=>{

       axios.post('http://3.22.117.30:9090/oauth/token',
       data,
    {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
       },
       auth: {
        username: 'clientapp',
        password: '123456'
     }
    }).then(result => {
        console.log(result)
    })
    .catch((error)=>{
        console.log(error);
    });
       
    }
    return(
        <>
        <label>Login Oauth passowrd crendetails</label>
        <br/>
        <label>Username</label>
        <input type="text" onChange={(event)=>setLogin(event.target.value)}/>
        <br/>
        <label>Password</label>
        <input type="text" onChange={(event)=>setPwd(event.target.value)}/>
        <br/>
        <button type="button" onClick={((event)=>onClickSubmit(event))}> Submit</button>
        </>
    )
}