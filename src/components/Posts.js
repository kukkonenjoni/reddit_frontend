import axios from 'axios'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import "../css/Posts.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Posts(props) {

    const { status, error, data, isFetching } = useQuery("randomPosts", async () => {
        const { data } = await axios.get('http://localhost:5000/api')
        return data
    });

    return (
          <div className="posts">
              {console.log(status)}
              { status === "loading" ? <h1>Loading</h1> : 
                status === "error" ? <h1>{error.message}</h1>:
                data ? data.map((post) => {
                    return(
                    <div className="post-container">
                        <div className="post-upvotes">
                            <FontAwesomeIcon icon={faChevronUp} style={{fontSize:"30px", color:"rgb(231, 231, 231)"}}/>
                            <h2 style={{fontSize:"20px", color:"rgb(231, 231, 231)"}}>{post.upvotes.length}</h2>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize:"30px", color:"rgb(231, 231, 231)"}}/>
                        </div>
                        <div className="post">
                            <div className="post-information">
                                <Link to={`${post.subreddit.url}`} style={{textDecoration: "none"}}>
                                    <h2 className="default pi-h2">/r/{post.subreddit.name}</h2>
                                </Link>
                                    <h3 className="default pi-h3">Posted by
                                        <Link to={`${post.createdBy.url}`} style={{textDecoration: "none", color:"rgb(88, 80, 80)"}}>
                                            /u/{post.createdBy.name}
                                        </Link>
                                    </h3>
                            </div>
                            <Link to={`${post.subreddit.url}/comments/${post.title}`} style={{textDecoration: "none"}}>
                                <div className="post-content">
                                    <h3 className="pc-h3">{post.formatted_title}</h3>
                                    <h1 className="pc-h1">{post.content}</h1>
                                </div>
                                <div className="post-lower">
                                    <FontAwesomeIcon icon={faComment} style={{fontSize:"15px", color:"rgb(231, 231, 231)"}}/>
                                    <h4 style={{color: "white", margin: "0px 10px"}}>{0}</h4>
                                    <h4 className="pl-h4" style={{margin: "0px"}}>Comments</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                    )
                }): ""}
              <ReactQueryDevtools initialIsOpen />
          </div>
      );

}