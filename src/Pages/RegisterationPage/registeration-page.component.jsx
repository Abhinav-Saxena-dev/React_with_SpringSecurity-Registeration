import React from "react";

import SignIn from "../../Components/Sign-in/sign-in.component";

import SignUp from "../../Components/Sign-Up/sign-up.component";

import './registeration-page.styles.scss';


const RegistrationPage = () => {

    return(
        <div className="registration-page">
            <div className="reg-sign-up">
                <h1>Sign Up</h1>
            <SignUp/>
            </div>
            <div className="reg-sign-in">
                <h1>Sign In</h1>
            <SignIn/>
            </div>
        </div>
    );
}

export default RegistrationPage;