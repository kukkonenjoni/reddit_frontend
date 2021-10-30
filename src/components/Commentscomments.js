import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faComment } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil';
import { isLogged } from '../Recoil/globalState'
import { useState } from 'react';
import Commentspopup from './Commentspopup';
import axios from 'axios';
import { useParams } from 'react-router';


export default function Commentscomments({ data }) {

    const [LoggedInUser] = useRecoilState(isLogged)
    const [Popup, setPopup] = useState("")
    const { subreddit, post } = useParams()

    function formatdate(date) {
        let newDate = date.split("-")
        let newDate2 = newDate[2].split(".")
        newDate2 = newDate2[0].replace(/[^a-z^0-9]+/g, " ");
        newDate2 = newDate2.split(" ")
        newDate[2] = newDate2[0].toString()
        newDate2.shift()
        newDate2.pop()
        newDate2 = newDate2.toString().replace(/,/g, ":")
        const theDate = `${newDate2} ${newDate[2]}/${newDate[1]}`
        return theDate
    }

    function alertUser() {
        alert("Please Log In!");
        setPopup("")
    }
    const upvote = (sid) => {
        if (LoggedInUser) {
            const newUpvote = {
                createdBy: LoggedInUser.id
            }
            const config = {
                headers: { Authorization: `Bearer ${LoggedInUser.token}`}
            }
            axios.post(`https://fast-dawn-38066.herokuapp.com/api/r/${subreddit}/upvote/${post}/${sid}`, newUpvote, config)
                .then((res) => console.log(res))
        } else {
            alert("please log in to upvote")
        }
    }
    const downvote = (sid) => {
        console.log("GG")
        if (LoggedInUser) {
            const newDownvote = {
                createdBy: LoggedInUser.id
            }
            const config = {
                headers: { Authorization: `Bearer ${LoggedInUser.token}`}
            }
            axios.post(`https://fast-dawn-38066.herokuapp.com/api/r/${subreddit}/downvote/${post}/${sid}`, newDownvote, config)
                .then((res) => console.log(res))
        } else {
            alert("please log in to upvote")
        }
    }

    return(
            <div className="comments" style={{margin: "10px 45px"}}>
                {data ? data.map((comment) => {
                    return(
                        <div className="comment" key={data._id}>
                            <div className="single-header" style={{display: "flex"}}>
                                <img style={{borderRadius: "50%", width: "20px"}} src="https://cdn.theorg.com/2f421c28-34f1-4bc8-b46c-497ad89d9dd2_medium.png" />
                                <h3 style={usernamestyle}>{comment.createdBy.url} · {formatdate(comment.createdAt)}</h3>
                            </div>
                            <div className="single-comment" style={commentcontainerstyle}>
                                <div>
                                    <h2 style={commentstyle}>{comment.content}</h2>
                                    <div style={{display: "flex", margin: "5px 10px"}}>
                                                <FontAwesomeIcon icon={faChevronUp} style={comment.upvotes.includes(LoggedInUser.id) ? arrowstyle : arrowstyleupvoted} onClick={() => upvote(comment._id)}/>
                                                <h3 style={upvotesnum}>{comment.upvotes.length - comment.downvotes.length}</h3>
                                                <FontAwesomeIcon icon={faChevronDown} style={comment.downvotes.includes(LoggedInUser.id) ? arrowstyle : arrowstyleupvoted} onClick={() => downvote(comment._id)}/>
                                                <div class="comment-popup" style = {{display: "flex"}} onClick={() => setPopup(Popup !== comment._id ? comment._id : "")}>
                                                    <h3 style={upvotesnum}>Reply</h3>
                                                    <FontAwesomeIcon icon={faComment} style={{fontSize:"15px", color:"rgb(231, 231, 231)"}}/>
                                                </div>
                                            </div>
                                            <div>
                                                {Popup === comment._id && LoggedInUser ? <Commentspopup LoggedInUser={LoggedInUser} Comment={comment._id}/> : Popup === comment._id && !LoggedInUser ? alertUser() : ""}
                                            </div>
                                </div>
                                {comment.comments.length > 0 ? <Commentscomments data={comment.comments} /> : ""}
                            </div>
                        </div>
                    )
                }): ""}
            </div>
    )
}

const commentcontainerstyle = {
    borderLeft: "2px solid grey",
    margin: "4px 0px 9px 9px"
}
const usernamestyle = {
    color:"rgb(210, 210, 210)",
    marginLeft: "5px",
    fontSize: "11px",
    marginTop: "2px"
}
const commentstyle = {
    color:"rgb(210, 210, 210)",
    marginLeft: "5px"
}
const upvotesnum = {
    color:"rgb(210, 210, 210)",
    fontSize: "11px",
    margin: "0px 8px"
}
const arrowstyle= {
    fontSize:"15px",
    color:"rgb(231, 231, 231)"
}
const arrowstyleupvoted= {
    fontSize:"15px",
    color:"rgb(50, 50, 50)"
}