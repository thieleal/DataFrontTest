import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signin.css";

export default function Login() {
    //set constants to be filled with user input and remember functions
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState("");

    //function to make sure the email and password are valid by checking length
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    //function to handle submit event
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <h1 style={{ marginLeft: "38%", paddingLeft: "6%", borderTop: "solid 2px green", width: "12%" }}>
                Sign in
            </h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email" style={{ marginLeft: "-20%" }}>
                    <Form.Label style={{ fontWeight: "bold", fontSize: "20px" }}>
                        Email
                    </Form.Label>
                    <br />
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ height: "30px", width: "85%" }}
                    />
                </Form.Group>
                <br />
                <Form.Group size="lg" controlId="password" style={{ marginLeft: "-20%" }}>
                    <Form.Label style={{ fontWeight: "bold", fontSize: "20px" }}>
                        Password
                    </Form.Label>
                    <br />
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ height: "30px", width: "85%" }}
                    />
                </Form.Group>
                <br />
                <Form.Group size="lg" controlId="password" style={{ marginLeft: "-20%" }}>
                    <Form.Control
                        type="checkbox"
                        value={remember}
                        onChange={(e) => setRemember(e.target.value)}
                    />
                    <Form.Label style={{ fontSize: "20px", paddingLeft: "10px" }}>
                        Remember me?
                    </Form.Label>
                </Form.Group>
                <br />
                <Button block size="lg" type="submit" disabled={!validateForm()}
                    style={{ height: "40px", width: "104%", color: "white", backgroundColor: "green", fontSize: "20px", marginLeft: "-20%" }}>
                    Sign in
                </Button>
            </Form>
            <br />
            <div style={{ marginLeft: "42%" }}>
                <a href="#" style={{ paddingLeft: "20px", color: "black", fontWeight: "bold" }}>Forgot your password?</a>
                <p>Don't have an account? <a href="#" style={{ color: "black", fontWeight: "bold" }}>Sign up</a></p>
                <a href="#" style={{ paddingLeft: "20px", color: "black", fontWeight: "bold" }}>Resend email confirmation</a>
            </div>
        </div>
    );
}