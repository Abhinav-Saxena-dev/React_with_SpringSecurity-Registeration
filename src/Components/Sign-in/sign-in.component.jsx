import React, { useState } from "react";

import FormInput from "../Form-input/form-input.component";

import './sign-in.style.scss';

const SignIn = () => {

    const [user, setUser] = useState({
        email : "",
        password : "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUser(prev => (
            {
                ...prev,
                [name] : value,
            }
        ))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();

        data.append("email", user.email);
        data.append("password", user.password);

        const requestOptions = {
            method : "POST",
            headers : {'Content-Type': 'application/x-www-form-urlencoded'},
            body : new URLSearchParams(data),
        }  

        await fetch("https://localhost:8080/dologin", requestOptions)
        .then(res => console.log(res.text()));
    }
 
    return(
        <div className="sign-in">
            <div className="header"></div>
            <form className="form-box" onSubmit={handleSubmit}>
                <FormInput type = "email" name = "email" value = {user.email} handleChange = {handleChange} label = "email"/>
                <FormInput type = "password" name = "password" value = {user.password} handleChange = {handleChange} label = "Password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignIn;