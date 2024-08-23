import React, { ChangeEvent, FocusEvent, useEffect } from "react";
import { useState } from "react";
import './Style.css'
import { ValidationErrors, validateSignUpFields } from "./Validation";

interface SignUpProps {
    handleCurrentForm: (setFormDisplay: boolean) => void;
}

export default function SignUp({ handleCurrentForm }: SignUpProps) {
    const initialRegisterInfo = {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        password: '',
        // profile image -> format PNJ, JPG, and other formats if needed.
    };

    const [registerInfo, setRegisterInfo] = useState(initialRegisterInfo);
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [age, setAge] = useState('');

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            console.log(`submit pass: `);
        }
    }, [errors]);

    function handleSubmit(event: any) {
        event.preventDefault();
        const validationErrors = validateSignUpFields(registerInfo);
        setErrors(validationErrors);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const updateChanges = { ...registerInfo, [name]: value };
        setRegisterInfo(updateChanges);
    }

    function handleBlur(event: FocusEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const focusfield = { ...registerInfo, [name]: value };
        const validateErrors = validateSignUpFields(focusfield);
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: validateErrors[name]
        }));

    }

    const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedAge = event.target.value;
        setAge(selectedAge);
        setRegisterInfo(prevInfo => ({
            ...prevInfo,
            age: selectedAge
        }));
    };

    const ageOptions = [];
    for (let i = 10; i <= 99; i++) {
        ageOptions.push(<option key={i} value={i}>{i}</option>);
    }

    return (
        <div className="container">
            <img id="leftArrow" src="./left-arrow.png" onClick={()=>{handleCurrentForm(true)}}/>
            <form className="form-container" id="signUp" onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text"
                    name="firstName"
                    value={registerInfo.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}></input>
                <div className='error-container'>{errors.firstName ? <>{errors.firstName}</> : null}</div>
                <label>Last Name:</label>
                <input type="text"
                    name="lastName"
                    value={registerInfo.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}></input>
                <div className='error-container'>{errors.lastName ? <>{errors.lastName}</> : null}</div>
                <label>Email:</label>
                <input type="email"
                    name="email"
                    value={registerInfo.email}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                <div className='error-container'>{errors.email ? <>{errors.email}</> : null}</div>
                <label>Age:</label>
                <select id="age" value={age} onChange={handleAgeChange}>
                    <option value="" disabled>Select your age</option>
                    {ageOptions}
                </select>
                <div className='error-container'>{errors.age ? <>{errors.age}</> : null}</div>
                <label>Password:</label>
                <input type="password"
                    name="password"
                    value={registerInfo.password}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                <div className='error-container'>{errors.password ? <>{errors.password}</> : null}</div>
                <div className="button-container">
                    <button type="submit">Register!</button>
                </div>

            </form>
        </div>
    )
}