import React from 'react'
import './styles.css'

function Login() {

    const [userId, setUserId] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmit = (event) => {
        console.log(userId, password);
    }

    return (
        <div className="login">
            <div className="loginhead">login</div>

            <form onSubmit={onSubmit}>
                <input 
                placeholder="Enter UserID"
                onChange={() => setUserId(userId)}
                />

                <input 

                placeholder = "Enter Password"
                type="password"
                onChange={() => setPassword(password)}
                />

                <button type="submit">Log IN</button>
            </form>
        </div>
    )
}

export default Login