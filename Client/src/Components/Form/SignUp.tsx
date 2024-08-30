import React, { ChangeEvent, FocusEvent } from "react";
import { useState } from "react";
import './Style.css'
import { ValidationErrors, validateSignUpFields } from "./Validation";
import  {CustomSelect, SelectOptions} from "../CustomHTML/CustomSelectElement";

const AGE_OPTIONS : SelectOptions[] = [];

for(let i = 10; i <= 90; i++){
    AGE_OPTIONS.push();
}

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
        profileImage: null,
    };

    const [registerInfo, setRegisterInfo] = useState(initialRegisterInfo);
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

    function handleSubmit(event: any) {
        event.preventDefault();
        const validationErrors = validateSignUpFields(registerInfo);
        setErrors(validationErrors);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
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
    
    

    return (
        <div className="container">
            <img id="leftArrow" src="./left-arrow.png" onClick={() => { handleCurrentForm(true) }} />
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
                <CustomSelect props={registerInfo.age} opsList={AGE_OPTIONS}></CustomSelect>
                {/* <select id="age" value={registerInfo.age} onChange={handleChange} >
                    <option value="" disabled >Select your age</option>
                </select> */}
                <div className='error-container'>{errors.age ? <>{errors.age}</> : null}</div>
                <label>Password:</label>
                <input type="password"
                    name="password"
                    value={registerInfo.password}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                <div className='error-container'>{errors.password ? <>{errors.password}</> : null}</div>
                <label>Upload Profile Image (PNG, JPG):</label>
                {/* <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
                {imagePreviewUrl && <p>Success</p>  /*<img src={imagePreviewUrl} alt="Profile Preview" className="image-preview" />} */} */
                <div className="button-container">
                    <button type="submit">Register!</button>
                </div>
            </form>
        </div>
    )
}