import React from "react";
import { useState } from "react";

import FormInput from "../Form-input/form-input.component";

import './sign-up.styles.scss';

const SignUp = () => {

    const [user, setUser] = useState({
        email : "",
        password : "",
        username : "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name] : value})
            )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("username", user.username);
        data.append("email", user.email);
        data.append("password", user.password);

        const requestOptions = {
            method : "POST",    
            body : new URLSearchParams(data),
        };

        await fetch("http://localhost:8080/registration", requestOptions)
        .then(response => console.log(response.text()))

        setUser({
            email : "",
            password : "",
            username : "",
        });
    }

    return(
        <div className="sign-up">
            <div className="header"></div>
            <form className="form-box" onSubmit={handleSubmit}>
                <FormInput type = "email" name = "email" value = {user.email} handleChange = {handleChange} label = "email"/>
                <FormInput type = "password" name = "password" value = {user.password} handleChange = {handleChange} label = "Password"/>
                <FormInput type = "text" name = "username" value = {user.username} handleChange = {handleChange} label = "Username"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;