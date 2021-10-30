import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import calccomments from '../helpers/calccomments'
import { useRecoilState } from 'recoil';
import { isLogged } from '../Recoil/globalState'
import axios from 'axios';

export default function Subredditposts({ data }) {

    const { url } = useRouteMatch()
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

    return (
          <div className="posts">
              {
                data.map((post) => {
                    return(
                    <div className="post-container" key={post._id}>
                        <div className="post-upvotes">
                            <FontAwesomeIcon icon={faChevronUp} style={post.upvotes.includes(LoggedInUser.id) ? arrowstyle : arrowstyleupvoted} className="subredditposts-icon" onClick={() => upvote(post.subreddit.name, post.title)}/>
                            <h2 className="subredditposts-upvnum">{post.upvotes.length - post.downvotes.length}</h2>
                            <FontAwesomeIcon icon={faChevronDown} style={post.downvotes.includes(LoggedInUser.id) ? arrowstyle : arrowstyleupvoted} className="subredditposts-icon"onClick={() => downvote(post.subreddit.name, post.title)}/>
                        </div>
                        <div className="post">
                            <div className="post-information">
                                    <h2 className="default pi-h2">/r/{post.subreddit.name}</h2>
                                    <h3 className="default pi-h3">Posted by
                                            /u/{post.createdBy.name}
                                    </h3>
                            </div>
                                <Link style={{textDecoration: "none"}} to={`${url}/comments/${post.title}`}>
                                <div className="post-content">
                                    <h3 className="pc-h3">{post.formatted_title}</h3>
                                    <h1 className="pc-h1">{post.content}</h1>
                                </div>
                                    <div className="post-lower">
                                        <FontAwesomeIcon icon={faComment} style={{fontSize:"15px", color:"rgb(231, 231, 231)"}}/>
                                        <h4 style={{color: "white", margin: "0px 10px"}}>{calccomments(post.comments)||0}</h4>
                                        <h4 className="pl-h4" style={{margin: "0px"}}>Comments</h4>
                                    </div>
                                </Link>
                        </div>
                    </div>
                    )
                })
                }
          </div>
      );

}

const arrowstyle= {
    fontSize:"30px",
    color:"rgb(231, 231, 231)"
}
const arrowstyleupvoted= {
    fontSize:"30px",
    color:"rgb(50, 50, 50)"
}