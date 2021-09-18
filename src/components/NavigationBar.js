import { Link } from "react-router-dom"
import { useState } from "react"
import { RegisterLoginModal } from "../modals/RegisterLoginModal"
import Register from "./Register"
import { useRecoilState } from 'recoil'
import { isLogged } from "../Recoil/globalState"
import Login from "./Login"
import Navdropdownmodal from "../modals/Navdropdownmodal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Dropdown from "./Dropdown"

export default function NavigationBar(props) {
    const [LoggedInUser] = useRecoilState(isLogged)
    const [ShowModalLogin, setShowModalLogin] = useState(false)
    const [ShowModalRegister, setShowModalRegister] = useState(false)
    const [ShowDropDown, setShowDropDown] = useState(false)

    if (LoggedInUser) {
        return (
        <div className="navbar" style={navbarStyle}>
                <Link to="/">
                    <img className="nav-img" style={imgStyle} src="https://www.logo.wine/a/logo/Reddit/Reddit-Horizontal-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo" />
                </Link>
                <input style={navsearchStyle} className="nav-search"type="search" id="search" placeholder="search.."></input>
                <h1 style={{color: "white"}}>{LoggedInUser.user}</h1>
            </div>
        )
    }

    else {
        return(
            <div className="navbar" style={navbarStyle}>
                <Link to="/">
                    <img className="nav-img" style={imgStyle} src="https://www.logo.wine/a/logo/Reddit/Reddit-Horizontal-White-Dark-Background-Logo.wine.svg" alt="Reddit Logo" />
                </Link>
                <input style={navsearchStyle} className="nav-search"type="search" id="search" placeholder="search.."></input>
                <div style={userdivStyle} className="userinfodiv">
                    <button style={loginbuttonStyle} onClick={() => setShowModalLogin(!ShowModalLogin)}>Log In</button>
                    <button style={registerbuttonStyle} onClick={() => setShowModalRegister(!ShowModalRegister)}>Sign Up</button>
                    <div>
                        <div onClick={() => {setShowDropDown(!ShowDropDown)}}>
                            <FontAwesomeIcon icon={faUser} style={{color: "grey", fontSize:"20px"}}  />
                            <FontAwesomeIcon icon={faArrowDown} style={{color: "grey", fontSize:"22px"}}  />
                        </div>
                        <Navdropdownmodal LoggedInUser={LoggedInUser} show={ShowDropDown} handlestate={() => {setShowDropDown(!ShowDropDown)}}>
                            <h1>TEST</h1>
                        </Navdropdownmodal>
                    </div>
                </div>
                <RegisterLoginModal show={ShowModalLogin} handlestate={() => setShowModalLogin(!ShowModalLogin)}>
                    <Login handlestate={() => setShowModalLogin(!ShowModalLogin)}/>
                </RegisterLoginModal>
                <RegisterLoginModal show={ShowModalRegister} handlestate={() => setShowModalRegister(!ShowModalRegister)}>
                    <Register handlestate={() => setShowModalRegister(!ShowModalRegister)}/>
                </RegisterLoginModal>
            </div>
        )
    }
}

const imgStyle = {
    height: "4rem",
    width: "10rem",
    marginLeft: "-100px"
}
const navbarStyle = {
    backgroundColor: "#212222",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderBottom: "grey thin solid",
    position: "absolute"
}
const navsearchStyle = {
    height: "1rem",
    width: "20rem",
    backgroundColor: "#1a1a1b",
    border: "grey thin solid",
    padding: "20px",
    fontSize: "15px",
    borderRadius: "7px"
}
const userdivStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "300px",
    marginRight: "-100px"
}
const loginbuttonStyle = {
    backgroundColor: "#212222",
    border: "white solid thin",
    height: "2rem",
    width: "5rem",
    borderRadius: "30px",
    color: "white",
    margin: "0"
}
const registerbuttonStyle = {
    height: "2rem",
    width: "5rem",
    borderRadius: "30px",
    border: "black solid thin",
    margin: "0"
}