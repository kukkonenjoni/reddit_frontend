import { useState } from "react"
import { useParams } from "react-router"
import axios from "axios"

export default function Commentspopup({Comment, LoggedInUser}) {

    const { post, subreddit } = useParams()

    const [NestedComment, setNestedComment] = useState("")
    const createcomment = (e) => {
        e.preventDefault()
        if (Comment) {
            const newComment = {
                content: NestedComment,
                createdBy: LoggedInUser.id
            }
            const config = {
                headers: { Authorization: `Bearer ${LoggedInUser.token}`}
            }
            axios.post(`https://fast-dawn-38066.herokuapp.com/api/r/${subreddit}/comments/${post}/${Comment}`, newComment, config)
                .then((res) => {console.log(res)})
                .then(() => setNestedComment(""))
        }
    }

    return(
        <div>
            <form onSubmit={createcomment}>
                <textarea onChange={(e) => setNestedComment(e.target.value)} value={NestedComment ? NestedComment : ""}></textarea>
                <input type="submit" value="Reply"/>
            </form>
        </div>
    )
}