import "../css/Navdropdown.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faBolt, faDigitalTachograph, faShieldAlt, faQuestion } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Navdropdown(props) {
    return(
        <div className="container">
            <Link to="/premium" className="dropdown-items">
                <FontAwesomeIcon className="dropdown-icon" icon={faShieldAlt}/>
                <h1 className="dropdown-text">Premium</h1>
            </Link>
            <Link to="/powerup" className="dropdown-items">
                <FontAwesomeIcon className="dropdown-icon" icon={faBolt}/>
                <h1 className="dropdown-text">Powerups</h1>
            </Link>
            <Link to="/talk" className="dropdown-items">
                <FontAwesomeIcon className="dropdown-icon" icon={faDigitalTachograph}/>
                <h1 className="dropdown-text">Talk</h1>
            </Link>
            <Link to="/help-center" className="dropdown-items">
                <FontAwesomeIcon className="dropdown-icon" icon={faQuestion}/>
                <h1 className="dropdown-text">Help Center</h1>
            </Link>
            <div className="dropdown-items">
                <FontAwesomeIcon className="dropdown-icon" icon={faSignInAlt}/>
                <h1 className="dropdown-text dropdown-last">Log In / Sign Up</h1>
            </div>
        </div>
    )
}