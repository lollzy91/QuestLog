import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import axios from "../../api/axios";
export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const data = {username: username, 
            password: password, 
            confirmPassword: confirmPassword
        }
        e.preventDefault();
        if (password === confirmPassword){
            axios.post("/register", data).then(response => {
                navigate("/login");
                alert("Success!")
            }).catch(function (error) {
                if(error.response){
                    alert("Username already exists")
                }
            })
        } else {
            alert("Passwords Don't Match!")
        }
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className="border border-dark rounded-3 p-4">
                <Form.Group className="mb-3" >
                    <Form.Label >Username: </Form.Label>
                    <Form.Control value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter username" id="username" name="username"/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label >Password: </Form.Label>
                    <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter password" id="password" name="password"/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label> Confirm Password: </Form.Label>
                    <Form.Control value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" />
                </Form.Group>
                <Button type="submit">Register</Button>
            </Form>
            <Link to="/login">Have an Account?</Link>
        </div>
    )
}