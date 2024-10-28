import React, { useState } from "react";

function Login (){
    const [loginInfo, setLoginInfo] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleForm = (e) => {
        e.preventDefault();


        if (!username || !password) {
            setLoginInfo(false);
            return;
        }
        if(username === "user" && password === "password"){
            setLoginInfo(true);
        } else {
            setLoginInfo(false);
        }
    }
    return (
    <>
    <h1>Login Page</h1>
    {/* <p>{loginInfo ? "Welcome, user" : "Invalid username or password"}</p> */}

    {loginInfo !== null && ( // Only display message if loginInfo is not null
                <p>{loginInfo ? "Welcome, user!" : "Invalid username or password"}</p>
            )}


    {!loginInfo &&
       <form onSubmit={handleForm}>
        <label>Username:</label>
        <input type="text" placeholder="username" onChange={(e)=> setUsername(e.target.value)} required/>
        <br />
        <label>Password:</label>
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required/>
        <br />
        <button type="submit">Submit</button>
       </form>}
    </>);
}

export default Login;