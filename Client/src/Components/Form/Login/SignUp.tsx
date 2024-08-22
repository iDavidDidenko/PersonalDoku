import { useState } from "react";

export default function SignUp() {
    const initialRegisterInfo = {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        password: '',
        // profile image -> format PNJ, JPG, and other formats if needed.
    };

    const [registerInfo, setRegisterInfo] = useState(initialRegisterInfo);
    const [age, setAge] = useState('');

    function handleSubmit() {

    }

    const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAge(event.target.value);
    };

    const ageOptions = [];
    for (let i = 10; i <= 99; i++) {
        ageOptions.push(<option key={i} value={i}>{i}</option>);
    }

    return (
        <div className="container">
            <form className="form-container" onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={registerInfo.firstName}></input>
                <label>Last Name:</label>
                <input type="text" name="firstName" value={ } ></input>
                <label>Age:</label>
                <select id="age" value={age} onChange={handleAgeChange}>
                    <option value="" disabled>Select your age</option>
                    {ageOptions}
                </select>
                {age && <p>Selected Age: {age}</p>}
                <label>Email:</label>
                <input type="email" name="email" value={ } onChange={handleChange} />
                <input type="password" name="password" value={} onChange={handleChange} />
            </form>

        </div>
    )
}