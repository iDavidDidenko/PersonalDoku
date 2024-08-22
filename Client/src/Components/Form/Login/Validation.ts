// Define the ValidationErrors interface
export interface ValidationErrors {
    [key: string]: string | undefined;
}

// Define the validateValues function
export function validateValues(inputValues: { email: string; password: string }): ValidationErrors {
    let errors: ValidationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(inputValues.email)) {
        errors.email = "Email is invalid";
    }

    if (inputValues.password.length < 5) {
        errors.password = "Password is too short";
    }

    return errors;
}
