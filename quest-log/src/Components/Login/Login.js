import React, {useState} from "react";
export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(username);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label for="username">Username: </label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="username" id="username" name="username"/>
            <label for="password">Password: </label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"/>
            <button>Log In</button>
        </form>
    )
}