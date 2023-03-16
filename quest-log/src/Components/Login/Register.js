import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Login.css'
export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword){
            alert(username)
        } else {
            alert("Passwords Don't Match!")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inputBox">
                    <label for="username">Username: </label>
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="username" id="username" name="username"/>
                </div>
                <div className="inputBox">
                    <label for="password">Password: </label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                </div>
                <div className="inputBox">
                    <label for="confirmPassword"> Confirm Password: </label>
                    <input value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" placeholder="********" id="confirmPassword" name="confirmPassword" />
                </div>
                <button>Register</button>
            </form>
            <Link to="/login">Have an Account?</Link>
        </div>
    )
}