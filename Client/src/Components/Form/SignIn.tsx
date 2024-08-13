import React, { ChangeEvent, useState } from 'react';
import { Button, Form, FormField, FormInput, Label } from 'semantic-ui-react';


export default function SignIn() {
    const loginDetails = {
        email: '',
        password: ''
    }

    const [details, setDetails] = useState(loginDetails);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setDetails({...details, [name]: value});
    }

    // a function that return final object to backend 
    function handleSubmit() {
        console.log(`email: ' ${details.email} + ' pass: ' ${details.password}`)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormField>
                <label>Email</label>
                <FormInput placeholder='Email' value={details.email} name='email' onChange={handleChange} />
            </FormField>
            <FormField>
                <label>Password</label>
                <FormInput placeholder='Password' value={details.password} name='password' onChange={handleChange} />
            </FormField>
            <Button type='submit' content='Submit'>Login</Button>
            <Button>Sign-up</Button>
        </Form>
    )
}

