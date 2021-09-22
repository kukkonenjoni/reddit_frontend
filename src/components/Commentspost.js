import { faComment, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Commentspost(props) {
    return(
        <div className="post-container" style={contStyle}>
            <div className="post-upvotes" style={{backgroundColor: "#212222"}}>
                <FontAwesomeIcon icon={faChevronUp} style={{fontSize:"30px", color:"rgb(231, 231, 231)"}}/>
                <h2 style={{fontSize:"20px", color:"rgb(231, 231, 231)"}}>0</h2>
                <FontAwesomeIcon icon={faChevronDown} style={{fontSize:"30px", color:"rgb(231, 231, 231)"}}/>
            </div>
            <div className="post">
                <div className="post-information">
                        <h3 className="default pi-h3">Posted by
                                /u/Kerttu
                        </h3>
                </div>
                    <div className="post-content">
                        <h3 className="pc-h3">Otsikko</h3>
                        <h1 className="pc-h1">Sisältö</h1>
                    </div>
                    <div className="post-lower">
                        <FontAwesomeIcon icon={faComment} style={{fontSize:"15px", color:"rgb(231, 231, 231)"}}/>
                        <h4 style={{color: "white", margin: "0px 10px"}}>{0}</h4>
                        <h4 className="pl-h4" style={{margin: "0px"}}>Comments</h4>
                    </div>
                </div>
        </div>
    )
}

const contStyle = {
    marginBottom: "0px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
     paddingBottom: "50px"
}