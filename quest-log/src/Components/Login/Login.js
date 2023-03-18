import React, {useState, useRef, useEffect} from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import axios from "../../api/axios";
const LOGIN_URL = '/login';

export const Login = () => {
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, [])
    
    useEffect(() => {
        setErrMsg('')
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {username: username, password: password}
        try {
            const response = await axios.post(LOGIN_URL, data);
            const token = response?.data?.token;
            setAuth({username, password, token})
            setUsername('');
            setPassword('');
            navigate("/");
        } catch (err){
            alert("Login Failed");
        }
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className="border border-dark rounded-3 p-4">
                <Form.Group className="mb-3" >
                    <Form.Label >Username: </Form.Label>
                    <Form.Control 
                        value={username} 
                        onChange={(e)=>setUsername(e.target.value)} 
                        type="text" 
                        placeholder="Enter username" 
                        id="username" 
                        ref={userRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label >Password: </Form.Label>
                    <Form.Control 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                        type="password" 
                        placeholder="Enter password" 
                        id="password" 
                        />
                </Form.Group>
                <Button type= "submit">Log In</Button>
            </Form>
            <Link to="/register">Need an Account?</Link>
        </div>
    )
}