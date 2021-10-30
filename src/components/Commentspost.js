import { faComment, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import calccomments from '../helpers/calccomments'
import { useRecoilState } from 'recoil'
import { isLogged } from '../Recoil/globalState'
import axios from 'axios'

export default function Commentspost({ data }) {

    const [LoggedInUser] = useRecoilState(isLogged)

    const upvote = (sreddit, spost, sup, sdown) => {
        if (LoggedInUser) {
            const newUpvote = {
                createdBy: LoggedInUser.id
            }
            const config = {
                headers: { Authorization: `Bearer ${LoggedInUser.token}`}
            }
            axios.post(`https://fast-dawn-38066.herokuapp.com/api/r/${sreddit}/upvote/${spost}`, newUpvote, config)
                .then((res) => res.status !== 400 ? window.location.reload(true) : "")
        } else {
            alert("please log in to upvote")
        }
    }
    const downvote = (sreddit, spost, sup, sdown) => {
        if (LoggedInUser) {
            const newDownvote = {
                createdBy: LoggedInUser.id
            }
            const config = {
                headers: { Authorization: `Bearer ${LoggedInUser.token}`}
            }
            axios.post(`https://fast-dawn-38066.herokuapp.com/api/r/${sreddit}/downvote/${spost}`, newDownvote, config)
                .then((res) => res.status !== 400 ? window.location.reload(true) : "")
                
        } else {
            alert("please log in to upvote")
        }
    }

    return(
        <div className="post-container" style={contStyle}>
            <div className="post-upvotes" style={{backgroundColor: "#212222"}}>
                <FontAwesomeIcon icon={faChevronUp} style={{fontSize:"30px", color:"rgb(231, 231, 231)"}} onClick={() => upvote(data.subreddit.name, data.title)}/>
                <h2 style={{fontSize:"20px", color:"rgb(231, 231, 231)"}}>{data? data.upvotes.length - data.downvotes.length: ""}</h2>
                <FontAwesomeIcon icon={faChevronDown} style={{fontSize:"30px", color:"rgb(231, 231, 231)"}} onClick={() => downvote(data.subreddit.name, data.title)}/>
            </div>
            <div className="post">
                <div className="post-information">
                        <h3 className="default pi-h3">
                            Posted by {data ? data.createdBy.url: ""}
                        </h3>
                </div>
                    <div className="post-content">
                        <h3 className="pc-h3">{data.formatted_title}</h3>
                        <h1 className="pc-h1">{data.content}</h1>
                    </div>
                    <div className="post-lower">
                        <FontAwesomeIcon icon={faComment} style={{fontSize:"15px", color:"rgb(231, 231, 231)"}}/>
                        <h4 style={{color: "white", margin: "0px 10px"}}>{data ? calccomments(data.comments) : ""}</h4>
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