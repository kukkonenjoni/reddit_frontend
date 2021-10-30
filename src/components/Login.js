import { useState } from "react"
import { useRecoilState } from 'recoil'
import { isLogged } from "../Recoil/globalState"
import axios from 'axios'


export default function Login(props) {
    const [LoggedInUser, setLoggedInUser] = useRecoilState(isLogged)
    const [User, setUser] = useState("")
    const [Password, setPassword] = useState("")
    const [Errors, setErrors] = useState([])

    const submitForm = (event) => {
        event.preventDefault()
        const newUser = {
            name: User,
            password: Password
        }
        axios.post("http://localhost:5000/api/authentication/login", newUser)
            .then((data) => {if (data) {
                setLoggedInUser({user: data.data.user,id: data.data.id, token: data.data.token})
                localStorage.setItem('token', data.data.token)
            } else {
                console.log("False Username")
            }})
    }

    return(
        <div id="login-box">
            <div className="left">
                <form onSubmit={submitForm}>
                    <h1>Login</h1>
                    <input type="text" name="username" placeholder="Username" onChange={(e) => {setUser(e.target.value)}}/>
                    <input type="password" name="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    <input type="submit" name="signup_submit" value="Login"/>
                </form>
            </div>
            
            <div className="right">
                <span className="loginwith">Sign in with<br />social network</span>
                <button className="social-signin facebook">Log in with facebook</button>
                <button className="social-signin twitter">Log in with Twitter</button>
                <button className="social-signin google">Log in with Google+</button>
            </div>
            <div className="or">OR</div>
        </div>
    )
}