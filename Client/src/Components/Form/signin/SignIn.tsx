import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Form, FormField, FormInput } from 'semantic-ui-react';
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

    return (
        <div className='form-wrapper'>
            <Form className="singin" onSubmit={handleSubmit}>
                <FormField>
                    <label>Email</label>
                    <FormInput placeholder='Email' value={details.email} name='email' onChange={handleChange} />
                    {errors.email ? (<p>{errors.email}</p>) : null}
                </FormField>
                <FormField>
                    <label>Password</label>
                    <FormInput placeholder='Password' value={details.password} name='password' onChange={handleChange} />
                    {errors.password ? (<p>{errors.password}</p>) : null}
                </FormField>
                <Button type='submit' content='Submit'>Login</Button>
                <Button>Sign-up</Button>
            </Form>
        </div>

    );
}
