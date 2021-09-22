import { useState } from "react"
import { useRecoilState } from 'recoil'
import { isLogged } from "../Recoil/globalState"
import axios from 'axios'
import "../css/Register.css"

export default function Register(props) {

    const [LoggedInUser, setLoggedInUser] = useRecoilState(isLogged)
    const [User, setUser] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [Errors, setErrors] = useState([])

    const submitForm = async (event) => {
        event.preventDefault();
        if (Password === ConfirmPassword && User && Email) {
            const new_user = {
                name: User,
                email: Email,
                password: Password
            }
            await axios.post("http://localhost:5000/api/authentication/register", new_user)
                .then((res) => {console.log(res)})
                .then((data) => {props.handlestate()})
        }
    }
    return(
        <div id="login-box">
            <div className="left">
                <form onSubmit={submitForm}>
                    <h1>Sign up</h1>
                    <input type="text" name="username" placeholder="Username" onChange={(e) => setUser(e.target.value)}/>
                    <input type="email" name="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" name="password2" placeholder="Retype password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <input type="submit" name="signup_submit" value="Sign me up" />
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