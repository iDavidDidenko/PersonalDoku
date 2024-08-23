// Define the ValidationErrors interface
export interface ValidationErrors {
    [key: string]: string | undefined;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Define the validateValues function
export function validateSignInFields(inputValues: { email: string; password: string }): ValidationErrors {
    let errors: ValidationErrors = {};
    

    if (!emailRegex.test(inputValues.email)) {
        errors.email = "Email is invalid";
    }

    if (inputValues.password.length < 5) {
        errors.password = "Password is too short";
    }

    return errors;
}

export function validateSignUpFields(inputValues :{firstName : string
                                                   lastName: string
                                                   email: string
                                                   age: string 
                                                   password: string}){
    let errors : ValidationErrors = {}; 
    
    if(inputValues.firstName.length < 2){
        errors.firstName = "first name too short";
    }
    if(inputValues.lastName.length < 2){
        errors.lastName = "last name too short";
    }
    if (!emailRegex.test(inputValues.email)) {
        errors.email = "Email is invalid";
    }
    if(inputValues.age === ''){
        errors.age = "select age";
    }
    if (inputValues.password.length < 5) {
        errors.password = "Password is too short";
    }

    return errors;
}
