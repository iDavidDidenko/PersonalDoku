import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { validateValues, ValidationErrors } from './Validation'; // Import the function and interface
import './Style.css'

export default function SignIn() {

    const initialLoginDetails = {
        email: '',
        password: ''
    };
    const [details, setDetails] = useState(initialLoginDetails);
    const [errors, setErrors] = useState<ValidationErrors>({});

    useEffect(() => {
        if (Object.keys(errors).length === 0 && details.email && details.password) {
            console.log(`submit pass: ${details.email} ${details.password}`);
        }
    }, [errors]);

    // handleBlue for dynamic validation on Focuse field
    function handleBlur(event: FocusEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const partialDetails = { ...details, [name]: value };
        const validateErrors = validateValues(partialDetails);
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: validateErrors[name]
        }));
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const updatedDetails = { ...details, [name]: value };
        setDetails(updatedDetails);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        const validationErrors = validateValues(details);
        setErrors(validationErrors);
    }

    function handleSignUp() {

    }

    return (
        <div className='container'>
            <form className='form-container' onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email" 
                    name="email"
                    value={details.email}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                <div className='error-container'>{errors.email ? <>Incorrect email Input</> : null}</div>
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password"
                    value={details.password}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                <div className='error-container'>{errors.password ? <>Incorrect Password Input</> : null}</div>
                <div className='button-container'>
                    <button type="submit">Sign In</button>
                    <button type="button" onClick={handleSignUp}>Sign Up</button>
                </div>
            </form>
        </div>
    );
}
