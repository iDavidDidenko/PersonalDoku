// Define the ValidationErrors interface
export interface ValidationErrors {
    email?: string;
    password?: string;
}

// Define the validateValues function
export function validateValues(inputValues: { email: string; password: string }): ValidationErrors {
    let errors: ValidationErrors = {};

    if (!inputValues.email.includes('@')) {
        errors.email = "Email is invalid";
    }

    if (inputValues.password.length < 5) {
        errors.password = "Password is too short";
    }

    return errors;
}
