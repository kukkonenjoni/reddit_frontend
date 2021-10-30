import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useParams } from "react-router"

export default function Commentscreatecomment({LoggedInUser}) {

    const [Comment, setComment] = useState("")
    const { post, subreddit } = useParams()
    const createcomment = (e) => {
        e.preventDefault()
        if (Comment) {
            const newComment = {
                content: Comment,
                createdBy: LoggedInUser.id
            }
            const config = {
                headers: { Authorization: `Bearer ${LoggedInUser.token}`}
            }
            axios.post(`https://fast-dawn-38066.herokuapp.com/api/r/${subreddit}/comments/${post}`, newComment, config)
                .then((res) => {console.log(res)})
                .then(() => window.location.reload(true))
        } else {
            window.alert("empty comment")
        }
    }
    if (LoggedInUser) {
        return(
            <div style={commentstyle}>
                <h3 style={{color: "white"}}>Comment as: <Link style={{color: "teal", }}>{LoggedInUser.user}</Link></h3>
                <form onSubmit={createcomment}>
                    <textarea onChange={(e) => setComment(e.target.value)} value={Comment ? Comment : ""}></textarea>
                    <input type="submit" style={{marginTop: "0px"}} value="Comment"/>
                </form>
            </div>
        )
    } else {
        return ""
    }
}

const commentstyle = {
    backgroundColor: "#212222",
    width: "750px"
}